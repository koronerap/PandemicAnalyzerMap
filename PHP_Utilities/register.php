<?php
require_once("utils.php");

require_once("strict_validation.php");

$result = $conn->query($sql);
$json = array();
header('Content-Type: application/json; charset=utf-8');
$user = $_POST['USER_NAME'];
$password = md5($_POST['USER_PASSWORD']);

$clear_user = mysqli_real_escape_string($conn, $user);
$clear_password = mysqli_real_escape_string($conn, $password);

$sql = "SELECT * FROM plfr_user where USER_NAME='".$clear_user."'";
$result = $conn->query($sql);

if ($result->num_rows > 0)
{
    while($row = $result->fetch_assoc()) {
        $json[] = ['StatusCode'=>'0','Message'=>'User name is aldready in use.','UserName'=>$row['USER_NAME']];
    } 
    
}else{

    $sql = "insert into plfr_user(USER_NAME,USER_PW,USER_ROLE) values('".$clear_user."','".$clear_password."','0')";
    $result = $conn->query($sql);

    if ($result === TRUE){
        $json[] = ['StatusCode'=>'1','Message'=>'Register is successful.'];
    }else{
        $json[] = ['StatusCode'=>'0','Message'=>'Register is not successful.','ErrorMessage'=> $conn->error];
    }
}
echo json_encode($json);
$conn->close();
?>