<?php
/**
 * contact.php — Endpoint form CTA (invio email via SMTP, in casa).
 * Riceve i campi del componente BookingForm e invia una email all'Orientation Desk.
 *
 * CREDENZIALI: lette da variabili d'ambiente impostate in Plesk
 * (Websites & Domains → PHP/FPM settings, oppure "Additional nginx/Apache directives").
 * NON inserire password nel repo.
 *   SMTP_HOST  (es. ssl0.ovh.net)
 *   SMTP_PORT  (465 SSL oppure 587 STARTTLS)
 *   SMTP_USER  (es. postmaster@antform.it → in produzione info@antform.it)
 *   SMTP_PASS  (password casella)
 *   MAIL_TO    (destinatario, es. info@antform.it)
 *
 * PHPMailer: se presente in ./vendor/ viene usato (SMTP autenticato, consigliato);
 * altrimenti fallback a mail() nativo.
 */
declare(strict_types=1);
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(204); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Metodo non consentito']); exit;
}

// Honeypot: se valorizzato è un bot
if (!empty($_POST['botcheck'] ?? '')) { echo json_encode(['success' => true]); exit; }

$nome      = trim((string)($_POST['nome'] ?? ''));
$email     = trim((string)($_POST['email'] ?? ''));
$telefono  = trim((string)($_POST['telefono'] ?? ''));
$messaggio = trim((string)($_POST['messaggio'] ?? ''));
$tipo      = trim((string)($_POST['tipo_richiesta'] ?? 'richiesta'));
$privacy   = !empty($_POST['privacy'] ?? '');

$errors = [];
if ($nome === '') $errors[] = 'nome mancante';
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'email non valida';
if (!$privacy) $errors[] = 'consenso privacy mancante';
if ($errors) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => implode(', ', $errors)]); exit;
}

$clean = fn(string $s) => str_replace(["\r", "\n"], ' ', $s);
// Legge le variabili sia da PHP-FPM (env[...]) sia da Apache (SetEnv) sia da $_ENV
$envv = fn(string $k) => getenv($k) ?: ($_SERVER[$k] ?? ($_ENV[$k] ?? ''));
$SMTP_HOST = $envv('SMTP_HOST');
$SMTP_PORT = (int)($envv('SMTP_PORT') ?: 465);
$SMTP_USER = $envv('SMTP_USER');
$SMTP_PASS = $envv('SMTP_PASS');
$MAIL_TO   = $envv('MAIL_TO') ?: $SMTP_USER;
$SITE      = $_SERVER['HTTP_HOST'] ?? 'webapp';

$subject = "[{$SITE}] Richiesta: {$clean($tipo)}";
$body  = "Nuova richiesta dal sito {$SITE}\n\n";
$body .= "Tipo richiesta: {$clean($tipo)}\n";
$body .= "Nome: {$clean($nome)}\n";
$body .= "Email: {$clean($email)}\n";
$body .= "Telefono: {$clean($telefono)}\n\n";
$body .= "Messaggio:\n{$messaggio}\n";

// --- PHPMailer + SMTP se disponibile ---
$autoload = __DIR__ . '/vendor/autoload.php';
if (is_file($autoload) && $SMTP_HOST !== '') {
    require $autoload;
    $mail = new \PHPMailer\PHPMailer\PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host       = $SMTP_HOST;
        $mail->SMTPAuth   = true;
        $mail->Username   = $SMTP_USER;
        $mail->Password   = $SMTP_PASS;
        $mail->SMTPSecure = $SMTP_PORT === 465 ? 'ssl' : 'tls';
        $mail->Port       = $SMTP_PORT;
        $mail->CharSet    = 'UTF-8';
        $mail->setFrom($SMTP_USER, "WebApp {$SITE}");
        $mail->addAddress($MAIL_TO);
        $mail->addReplyTo($email, $clean($nome));
        $mail->Subject = $subject;
        $mail->Body    = $body;
        $mail->send();
        echo json_encode(['success' => true, 'message' => 'Richiesta inviata']);
    } catch (\Throwable $e) {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Invio non riuscito']);
    }
    exit;
}

// --- Fallback mail() nativo ---
$headers = [
    'From: WebApp <' . ($SMTP_USER ?: ('no-reply@' . $SITE)) . '>',
    'Reply-To: ' . $clean($email),
    'Content-Type: text/plain; charset=UTF-8',
    'MIME-Version: 1.0',
];
$ok = mail($MAIL_TO, $subject, $body, implode("\r\n", $headers));
if ($ok) {
    echo json_encode(['success' => true, 'message' => 'Richiesta inviata']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Invio non riuscito']);
}
