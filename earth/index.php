<img src="<?php
	$url = 'https://www.google.com';
	$scheme = parse_url($url, PHP_URL_SCHEME);
	$host = parse_url($url, PHP_URL_HOST);
	$html = file_get_contents($url);
	preg_match_all( '|<img.*?src=[\'"](.*?)[\'"].*?>|i',$html, $matches ); 
	$imgSrc = $scheme . "://" . $host . $matches[1][0];
	echo $imgSrc;
?>">