<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  try {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $from="From: $name<$email>\r\nReturn-path: $email";

    if (mail("mece.martinece@gmail.com", $subject, $message, $from)) {
      http_response_code(200);
      echo json_encode({
        code: 200,
        message: 'Your mail has been successfully send.'
      });
    } else {
      http_response_code(500);
      echo json_encode({
        code: 500,
        message: 'Oops we have a problem sending your mail.'
      });
    }
    
  } catch ($error) {
    http_response_code(500);
    echo json_encode({
      code: 500,
      message: 'Oops we have a problem sending your mail.'
    });
    exit;
  }  
} else {
  echo json_encode({
    code: 403,
    message: "That's a no no request right there."
  });
}
  

  