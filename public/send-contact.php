<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit(json_encode(['ok' => false, 'error' => 'Method not allowed']));
}

if (!empty($_POST['website'])) {
    exit(json_encode(['ok' => true]));
}

$name = isset($_POST['name']) ? trim((string) $_POST['name']) : '';
$email = isset($_POST['email']) ? trim((string) $_POST['email']) : '';
$subject = isset($_POST['subject']) ? trim((string) $_POST['subject']) : '';
$message = isset($_POST['message']) ? trim((string) $_POST['message']) : '';
$locale = isset($_POST['locale']) ? preg_replace('/[^a-z]/', '', (string) $_POST['locale']) : 'fr';

if ($name === '' || $email === '' || $subject === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    exit(json_encode(['ok' => false, 'error' => 'Invalid input']));
}

$name = mb_substr(strip_tags($name), 0, 120);
$email = filter_var($email, FILTER_SANITIZE_EMAIL);
$subject = mb_substr(strip_tags($subject), 0, 160);
$message = mb_substr(strip_tags($message), 0, 5000);

$to = 'contact@levraimaroc.com';
$mailSubject = '=?UTF-8?B?' . base64_encode('Nouveau message — Le Vrai Maroc') . '?=';

$ip = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? 'n/a';
$userAgent = isset($_SERVER['HTTP_USER_AGENT']) ? mb_substr(strip_tags($_SERVER['HTTP_USER_AGENT']), 0, 200) : 'n/a';

$body = "Nouveau message depuis Le Vrai Maroc.\n\n";
$body .= "Langue : {$locale}\n";
$body .= "Nom : {$name}\n";
$body .= "Email : {$email}\n";
$body .= "Sujet : {$subject}\n\n";
$body .= "Message :\n{$message}\n\n";
$body .= "User-Agent : {$userAgent}\n";
$body .= "IP : {$ip}\n";

$headers = "From: Le Vrai Maroc <contact@levraimaroc.com>\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

if (mail($to, $mailSubject, $body, $headers)) {
    exit(json_encode(['ok' => true]));
}

http_response_code(500);
exit(json_encode(['ok' => false, 'error' => 'Mail delivery failed']));
