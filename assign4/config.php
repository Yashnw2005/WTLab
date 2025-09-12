<?php
// config.php
$host = '127.0.0.1';
$user = 'root';         // XAMPP default
$pass = '';             // XAMPP default is empty
$db   = 'student_crud';

$mysqli = new mysqli($host, $user, $pass, $db);
if ($mysqli->connect_errno) {
    die("Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error);
}
$mysqli->set_charset('utf8mb4');
?>
