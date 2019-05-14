<?php

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
  try {
    $name = $_REQUEST['name'];
    $email = $_REQUEST['email'];
    $subject = $_REQUEST['subject'];
    $message = $_REQUEST['message'];
    $from="From: $name<$email>\r\nReturn-path: $email";

    if (mail("mece.martinece@gmail.com", $subject, $message, $from)) {
      // http_response_code(200);
      // echo json_encode({
      //   code: 200,
      //   message: 'Your mail has been successfully send.'
      // });
      echo 200;
    } else {
      // http_response_code(500);
      // echo json_encode({
      //   code: 500,
      //   message: 'Oops we have a problem sending your mail.'
      // });
      echo 500;
    }
    
  } catch ($error) {
    // http_response_code(500);
    // echo json_encode({
    //   code: 500,
    //   message: 'Oops we have a problem sending your mail.'
    // });
    echo 500;
  }  
} else {
  // echo json_encode({
  //   code: 403,
  //   message: "That's a no no request right there."
  // });
  echo 403;
}
?>
  

  