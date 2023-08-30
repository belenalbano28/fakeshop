<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'PHPMailer-master/PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/PHPMailer-master/src/SMTP.php';
$email_from='romialbano@gmail.com';
$to = "belenalristi@gmail.com";
$email_body='test';
$email_subject='test';

$headers = "From: $email_from \r\n";

$headers .= "Cc: someone@domain.com \r\n";

mail($to,$email_subject,$email_body,$headers);

?>