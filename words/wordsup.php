 <?php
$file = 'words.txt';
$word = htmlspecialchars($_POST['word']).'@@@';
file_put_contents($file, $word, FILE_APPEND | LOCK_EX);
?>