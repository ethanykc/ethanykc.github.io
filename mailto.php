<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$phone = $_POST['phone'];
	$site = $_POST['site'];

	$email_from = 'ey2chung@uwaterloo.ca';
	$email_subject = "Form Submission";
	$email_body = "Name: $name. \n".
					"E-mail: $email. \n".
						"Message: $message. \n".
							"Site: $site. \n".
								"Phone: $phone. \n";
	
	$to = "ey2chung@uwaterloo.ca";

	$headers = "From: $email_from \r\n";
	
	$headers .= "Reply-To: $email \r\n";

	mail($to, $email_subject, $email_body, $headers);

	echo $thankYou="<p>Thank you! We will be in contact with you shortly.</p>";

	header("Location: contact.html");
	
?>