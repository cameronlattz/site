<? 
$file=fopen("words.txt","r");
$read=fread($file,filesize("words.txt"));
fclose($file); 
echo $read;
?>