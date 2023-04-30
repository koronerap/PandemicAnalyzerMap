<?php
error_reporting(0);

if (!isset($_SERVER['PHP_AUTH_USER'])) {
    header('WWW-Authenticate: Basic realm="CapstoneApiMember"');
    header('HTTP/1.0 401 Unauthorized');
    die('HTTP/1.0 401 Unauthorized request cancelled.');
} else {

    if($_SERVER['PHP_AUTH_USER']!="CapstoneApiMember" || $_SERVER['PHP_AUTH_PW']!="kY92NttZ-cfjNXedR-6GSVXLPg"){
        header('WWW-Authenticate: Basic realm="CapstoneApiMember"');
        header('HTTP/1.0 401 Unauthorized');
        die('HTTP/1.0 401 Unauthorization fail, Wrong User Name or Password.');
    }
}

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cap";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$json = file_get_contents('php://input');
$data = json_decode($json,true);
// var_dump($data);
for ($i=0; $i < count($data['districts']); $i++) { 

    $insert_sql = "INSERT INTO `data_town` (`TOWN_ID`, `TOWN_CITYID`, `TOWN_NAME`, `TOWN_MALE_PERSON_COUNT`, `TOWN_FEMALE_PERSON_COUNT`, `TOWN_VACCINATED_PERSON_AMOUNT`, `TOWN_TWO_DOSE_VACCINATED_PERSON_AMOUNT`, `TOWN_CASE_AMOUNT`, `TOWN_VACCINATED_CASE_AMOUNT`, `TOWN_LATITUDE`, `TOWN_LONGITUDE`, `TOWN_ADDRESS`) VALUES";
    $district = $data['districts'][$i]['district'];
    $male_person_amount = $data['districts'][$i]['male_person_amount'];
    $female_person_amount = $data['districts'][$i]['female_person_amount'];
    $vaccinated_person_amount = $data['districts'][$i]['vaccinated_person_amount'];
    $two_dose_vaccinated_person_amount = $data['districts'][$i]['two_dose_vaccinated_person_amount'];
    $case_amount = $data['districts'][$i]['case_amount'];
    $person_vaccinated_case_amount = $data['districts'][$i]['person_vaccinated_case_amount'];
    $latitude = $data['districts'][$i]['latitude'];
    $longitude = $data['districts'][$i]['longitude'];
    $town_address = $data['districts'][$i]['town_address'];

    $insert_sql .= "(NULL, 34, '".$district."', ".$male_person_amount.", ".$female_person_amount.", ".$vaccinated_person_amount.", ".$two_dose_vaccinated_person_amount.", ".$case_amount.", ".$person_vaccinated_case_amount.", ".$latitude.", ".$longitude.", '".$town_address."')";

 
    if ($conn->query($insert_sql) !== TRUE) 
        echo "Error: " . $insert_sql . "-" . $conn->error. "<br>";
      
}

echo "Request taken.";
?>