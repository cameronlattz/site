 <?php
$file = 'players.txt';
$ip = $_SERVER['REMOTE_ADDR']."@@@";
file_put_contents($file, $ip, FILE_APPEND | LOCK_EX);
$read=fread($file,filesize("players.txt"));
fclose($file); 
echo $read;
?>