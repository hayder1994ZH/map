<?php
// connection data base
$connect = new mysqli("localhost", "root", "", "map");
if ($connect->connect_error) {
    die("Connection failed: " . $connect->connect_error);
} 

?>