<? 
$file=fopen("players.txt","r");
$read=fread($file,filesize("players.txt"));
fclose($file); 
echo $read;
?>