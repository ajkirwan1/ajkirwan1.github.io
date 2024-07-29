<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$name = $_POST["firstname"];
	$lastname = $_POST["lastname"];
	$subject = $_POST["subject"];
	$message = "a test message";
	$to = "ajkirwan86@gmail.com";
	$headers = "From test for Pavel's website";
	if (mail($to, $subject, $message, $headers)) {
		echo "Email sent";
	}
	else {
		echo "Not sent";
	}
}
?>