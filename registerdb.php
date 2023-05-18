<?php

$dbhost = "localhost";
$username = "root";
$password = "";
$dbname = "login";

$conn = mysqli_connect($dbhost, $username, $password, $dbname);

$username = $_POST["username"];
$fname = $_POST["firstname"];
$lname = $_POST["lastname"];
$password = $_POST["password"];
$phone = $_POST["phone"];
$email = $_POST["email"];

echo '<h1>' .$username. '</h1>';

if($conn->query("INSERT INTO users (user_name, first_name, last_name, password, email_id, phone_no) VALUES('$username', '$fname', '$lname', '$password', '$email', '$phone')")){
	echo 'Data inserted';
	echo '<br/>';
}

header("location:index.html");


?>