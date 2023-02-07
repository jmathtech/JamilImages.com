<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../PHPMailer/src/Exception.php';
require '../PHPMailer/src/PHPMailer.php';
require '../PHPMailer/src/SMTP.php';

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $mail = new PHPMailer(true);
    try {
        $mail->SMTPDebug = 0;
        $mail->isSMTP();
        $mail->Host = 'smtp.dreamhost.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'admin@jamilimages.com';
        $mail->Password = 'TheFlyEagles24!';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;
        $mail->setFrom($email, $name);
        $mail->addAddress($email);
        $mail->isHTML(true);
        $mail->Subject = 'New Form Submission';
        $mail->Body    = $message;

        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
    }
}

header("Location: ../index.html");
    exit;
?>
