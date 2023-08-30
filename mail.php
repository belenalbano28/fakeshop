<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'PHPMailer-master/PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/PHPMailer-master/src/SMTP.php';
error_reporting(-1);
ini_set('display_errors', 'On');
set_error_handler("var_dump");
if(isset($_POST['email'])){
    $email_from='belenalristi@gmail.com';
    $to = $_POST['email'];
    $email_body='Hi! We contact you to validate your reservation of the products. You can withdraw it at a false address 1234 from 8:00 am to 7:00 pm and make the payment there. Although, if you wish, the package can be sent to the address you want, the payment must be made at the address with the shipping surcharge ($5.00) Thank you very much for your purchase.
    Fakeshop team.';
    $email_subject='Reservation of products from the website FakeShop';
    
    $headers = array("From: FakeShop@example.com",
        "Reply-To: FakeShop@example.com",
        "X-Mailer: PHP/" . PHP_VERSION
    );
    $headers = implode("\r\n", $headers);
    echo mail($to,$email_subject,$email_body,$headers);
    ?>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script>
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'The email has been sent. Check your inbox.',
        showConfirmButton: false,
        timer: 7500
      })
      setTimeout(function () {
  
      location.href="cart.html";
    }, 2000);
</script>

<?php
}else{
        ?>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script>
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Sorry, an error has occurred',
        showConfirmButton: false,
        timer: 7500
      })
      setTimeout(function () {
  
      location.href="cart.html";
    }, 2000);
      
</script>

<?php
}
?>