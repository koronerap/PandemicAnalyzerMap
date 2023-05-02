<?php
require_once("utils.php");

$sql = "SELECT * FROM data_news";
$result = $conn->query($sql);
$json = array();
while($row = $result->fetch_assoc()) {
    $json[] = $row;
}
header('Content-Type: application/json; charset=utf-8');
echo json_encode($json);
$conn->close();
?>