<?php
error_reporting(0);

    // $servername = "localhost:3306";
    // $username = "erdem_cap";
    // $password = "x63~2sN3t";
    // $dbname = "cap";

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "cap";


$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


?>