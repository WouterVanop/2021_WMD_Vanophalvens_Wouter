<?php
  if(isset($_POST)) {
    $message = "" ;
    $to = "matthias.druwe@odisee.be";
    $additional_headers = "From: webmaster@example.com";
    $subject = "FORM";
    foreach ( $_POST as $key => $value) {
      $message = "{$message}{$key}: {$value} \n";
    }

    mail($to, $subject, $message, $additional_headers);
    
    /**
     * ! Dit is geen goede code. Dit kan zelfs gevaarlijk zijn!
     * ! Aangezien we momenteel geen kennis hebben van PHP zorgt deze lijn er voor dat we terug naar de vorige pagina gaan.
     */
    header('Location: ' . $_SERVER['HTTP_REFERER']);
  }

?>
