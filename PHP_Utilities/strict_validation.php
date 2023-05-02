<?php
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
?>