<?php
require_once("utils.php");

$result = $conn->query($sql);
$json = array();
header('Content-Type: application/json; charset=utf-8');
$user = $_POST['USER_NAME'];
$password = md5($_POST['USER_PASSWORD']);

$clear_user = mysqli_real_escape_string($conn, $user);
$clear_password = mysqli_real_escape_string($conn, $password);


$sql = "SELECT * FROM plfr_user where USER_NAME='".$clear_user."' AND USER_PW='".$clear_password."'";
$result = $conn->query($sql);


if ($result->num_rows > 0)
{
    while($row = $result->fetch_assoc()) {
        $json[] = ['StatusCode'=>'1','Message'=>'Login success.','UserName'=>$row['USER_NAME'],'UserId'=>$row['USER_ID']];
    } 
    
}else{
    $json[] = ['StatusCode'=>'0','Message'=>'Wrong User Password or User Name'];
}
echo json_encode($json);
$conn->close();
?>