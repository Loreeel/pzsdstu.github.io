<?php

require_once 'settings.php';
/** @var TYPE_NAME $host */
/** @var TYPE_NAME $user */
/** @var TYPE_NAME $password */
/** @var TYPE_NAME $db */

$conn = new mysqli($host, $user, $password, $db);
$query = "delete from Teachers where id=" . $_POST["id"];
$conn->query($query);
echo json_encode($query);
