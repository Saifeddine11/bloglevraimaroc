<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');

// Only accept POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit(json_encode(['ok' => false, 'error' => 'Method not allowed']));
}

// Honeypot: if the hidden "website" field is filled, it's a bot
// Silently pretend success so bots don't retry
if (!empty($_POST['website'])) {
    exit(json_encode(['ok' => true]));
}

// Validate email
$email = isset($_POST['email']) ? trim($_POST['email']) : '';

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    exit(json_encode(['ok' => false, 'error' => 'Invalid email']));
}

$email = filter_var($email, FILTER_SANITIZE_EMAIL);
$locale = isset($_POST['locale']) ? preg_replace('/[^a-z]/', '', (string) $_POST['locale']) : 'fr';

// Build notification email
$to      = 'contact@levraimaroc.com';
$subject = '=?UTF-8?B?' . base64_encode('Nouvelle inscription newsletter — Le Vrai Maroc') . '?=';

$ip        = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? 'n/a';
$userAgent = isset($_SERVER['HTTP_USER_AGENT'])
    ? mb_substr(strip_tags($_SERVER['HTTP_USER_AGENT']), 0, 200)
    : 'n/a';

$body  = "Nouvelle inscription newsletter sur Le Vrai Maroc.\n\n";
$body .= "Email inscrit : {$email}\n\n";
$body .= "Langue : {$locale}\n";
$body .= "Source : Le Vrai Maroc — https://levraimaroc.com\n";
$body .= "User-Agent : {$userAgent}\n";
$body .= "IP : {$ip}\n";

$headers  = "From: Le Vrai Maroc <contact@levraimaroc.com>\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

// Send via PHP mail()
if (mail($to, $subject, $body, $headers)) {
    exit(json_encode(['ok' => true]));
} else {
    http_response_code(500);
    exit(json_encode(['ok' => false, 'error' => 'Mail delivery failed']));
}
