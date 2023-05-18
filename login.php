<?php

$dbhost = "localhost";
$username = "root";
$password = "";
$dbname = "login";

$conn = mysqli_connect($servername, $username, $password, $dbname);

$username = $_POST["username"];
$password = $_POST["password"];
$flag = 'true';
//$query = $mysqli->query("SELECT email, password from users");

$result = $conn->query('SELECT user_name, password from users order by id asc');

if($result === FALSE){
  die(mysql_error());
}

if($result){
  while($obj = $result->fetch_object()){
    if($obj->user_name === $username && $obj->password === $password) {

      $_SESSION['username'] = $username;
      $_SESSION['password'] = $obj->password;
      $_SESSION['id'] = $obj->id;
      $flag = 'false';
      header("location:homehtml.html");
    } 
    }
  if($flag === 'true'){
    redirect();
    }
  }

function redirect() {
  echo '<h1>Invalid Login! Redirecting...</h1>';
  header("Refresh: 3; url=index.html");
}


?>