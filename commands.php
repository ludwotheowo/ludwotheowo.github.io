<?php
$command = $_REQUEST["command"];
switch ($command) {
    case 'help':
        echo "Help command text";
        break;
    default:
        echo "Invalid command";
        break;
}
header("location: index.php");
die();
?>