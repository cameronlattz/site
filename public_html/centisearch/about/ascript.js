function onfuncs() {
pageone=document.getElementById('text').innerHTML;
}
function showupdate() {
document.getElementById('versec').innerHTML='Version '+n;
}
var page=0;
function back() {
page=page-1;
if (page==-1) {page=2;}
changepage();
}
function next() {
page=page+1;
if (page==3) {page=0;}
changepage();
}
function changepage() {
switch (page) {
	case 0: document.getElementById('text').innerHTML=pageone; document.getElementById('backsec').innerHTML='<a onclick="back()">&lsaquo;Contact</a>'; document.getElementById('forsec').innerHTML='<a onclick="next()">Downloading&rsaquo;</a>'; break;
	case 1: document.getElementById('text').innerHTML='<h1>Downloading</h1><ol><li>First, click the "Download" button to the right.</li><li>Choose "Save" or "Save as" and save the file in your My Documents folder.</li><li>After downloading, right-click the "centisearch.zip" file in My Documents and choose "Extract to \centisearch".</li><li>Open the "centisearch" folder, and click "firefox.html".</li><li>Drag the URL onto the home page button.</li></ol>'; document.getElementById('backsec').innerHTML='<a onclick="back()">&lsaquo;About</a>'; document.getElementById('forsec').innerHTML='<a onclick="next()">Contact&rsaquo;</a>'; break;
	case 2: document.getElementById('text').innerHTML='<h1>Contact & Thanks</h1>&middot;CentiSearch - Cameron Lattz<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<a href="http://www.primedesigning.com">www.primedesigning.com</a><br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;centisearch@gmail.com<br><br>&middot;Calendar - &nbsp; Greg Quilop<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <a href="http://www.queriousdesigns.com">www.queriousdesigns.com</a><br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; web@queriousdesigns.com'; document.getElementById('backsec').innerHTML='<a onclick="back()">&lsaquo;Downloading</a>'; document.getElementById('forsec').innerHTML='<a onclick="next()">About&rsaquo;</a>'; break;
}
}