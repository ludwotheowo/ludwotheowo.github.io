<?php
$command = $_REQUEST["command"];
switch ($command) {
    case 'help':
        echo "Help command text";
        break;
    default:
        echo "Invalid command";
        break;
    case 'lightmode':
        lightmode();
        break;
}
header("location: index.html");
die();
?>