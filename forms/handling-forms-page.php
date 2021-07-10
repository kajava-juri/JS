<?php
  // The global $_POST variable allows you to access the data sent with the POST method by name
  // To access the data sent with the GET method, you can use $_GET
  $name = htmlspecialchars($_POST['name']);
  $mail = htmlspecialchars($_POST['mail']);
  $msg = htmlspecialchars($_POST['msg']);
  echo  'Name: ', $name;
  echo '<br>';
  echo 'E-mail: ', $mail;
  echo '<br>';
  echo 'Message: ', $msg;
?>