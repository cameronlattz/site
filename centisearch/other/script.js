var fqvalue='';
var fqvalueold='';
var version=0.41;
var timeout=750;
var closetimer=0;
var ddmenuitem=0;
var navstart=0;
var cursearch=1;
var changeoff=0;
var cg2=1;
var cs=0;
var uselast=0;
var olde=0;
var isCtrl=false;
function LoadFuncs() {
sf();
startTime();
loadcalendar();
window.setTimeout('setter()',400);
window.setTimeout('ader()',1200);
window.setTimeout('updatecheck()',1500);
}
document.onclick = mclose;
document.onkeyup=function(e) {if(e.which == 16) {isCtrl=false; document.getElementById('sf').focus();}}
document.onkeydown=function(e) {
	if(e.which == 16) isCtrl=true;
	if(document.activeElement.id=='sf') isCtrl=false;
	if(isCtrl == true) {
	ns=100;
		switch (e.which) {
			case 48: ns=39; break;
			case 109: ns=46; break;
			case 107: ns=53; break;
			case 8: ns=60; break;
			case 40: ns=101; break;
			case 39: ns=movens(1); break;
			case 37: ns=movens(2); break;			
		}
		if (e.which<54 && e.which>40 && e.which!=48) {ns=e.which-49}			
		if (e.which>53 && e.which<107) {ns=((e.which-53)*7)+4;}
		if (ns!=100 && ns!=101) {
			alert(ns);
			switcher(ns);
			document.getElementById('sf').blur();
		}
		if (ns==101) {document.getElementById('sf').focus();}
		return false;
	}
}
function movens(dirvar) {
	if (cursearch<4) {cursearch=cursearch};
	if (cursearch>3) {cursearch=((cursearch-4)/7)+4};
	if (dirvar==2) {
		cursearch=cursearch-1;
		if (cursearch<1) {cursearch=13}
	}
	if (dirvar==1) {
		cursearch=cursearch+1;
		if (cursearch>13) {cursearch=1}
	}
	if (cursearch<6) {ns=cursearch-1};
	if (cursearch>5) {ns=((cursearch-5)*7)+4};
	alert('cs:'+cs+', cursearch:'+cursearch+', ns:'+ns);
	return ns;
}
function mopen(id) {
	mcancelclosetime();
	if(ddmenuitem) ddmenuitem.style.display = 'none';
	ddmenuitem = document.getElementById(id);
	ddmenuitem.style.display='block'
}
function mclose() {if(ddmenuitem) ddmenuitem.style.display = 'none';}
function mclosetime() {closetimer = window.setTimeout(mclose, timeout);}
function mcancelclosetime() {
	if(closetimer) {
		window.clearTimeout(closetimer);
		closetimer = null;
	}
}
function mbacker(mnum2) {
	var navlist=document.getElementById('navul').getElementsByTagName('a');
	var droplist=document.getElementById('navul').getElementsByTagName('img');
	if (mnum2>0) {mnum=(Math.floor(mnum2/10)*7)+4}
	if (mnum2<0) {mnum=(Math.floor(mnum2/10)*-1)-1}
	if (mnum>60) {mnum=60}
	for (var i=0; i<droplist.length; i++) {
		if (droplist[i].className=='mup' || droplist[i].className=='mdown') {
			if (i!=mnum) {
				droplist[i].className='mup';
			}
			if (i==mnum) {
				droplist[i].className='mdown';
			}
		}
	}
	if (mnum2<0) {cursearch=(Math.floor(mnum2/-10))-1}
	if (mnum2>0) {cursearch=(Math.floor(mnum2/10)*7)+4}
}











//REPLACE FUNCTION
function rightjumps() {
	document.jumptolink.link.value="javascript: void()";
	document.jumptolink.video.value="javascript: void()";
	document.jumptolink.fun.value="javascript: void()";
	document.jumptolink.torrent.value="javascript: void()";
}











function sf() {
	parent.droplinks.location="other/droplinks.html";
	document.getElementById('sf').focus();
}






//OUTDATED ROLLOVER FUNCTION REPLACE WITH SWAPPER
Rollimage = new Array()
Rollimage[0]= new Image(121,153)
Rollimage[0].src = "pictures/firefox/fox0.png"
Rollimage[1] = new Image(121,153)
Rollimage[1].src = "pictures/firefox/fox1.png"
function swap() {
	r0=document.globe.src;
	r1=Rollimage[0].src;
	r2=Rollimage[1].src;
	switch (r0) {
		case r1: document.globe.src=r2; break;
		case r2: document.globe.src=r1; break;
	}
}
//END OUTDATED ROLLOVER FUNCTION






function rwt(el,oi,cad,ct,cd,sg)
{
var e = window.encodeURIComponent ? encodeURIComponent : escape;var oi_param="";
var cad_param="";
if (oi) oi_param="&oi="+e(oi);
if (cad) cad_param="&cad="+e(cad);
el.href="/url?sa=t"+oi_param+cad_param+"&ct="+e(ct)+"&cd="+e(cd)+"&url="+e(el.href).replace(/\+/g,"%2B")+"&ei=XQSkRI3QCYz0wQKgztCgCw"+sg;el.onmousedown="";
return true;
}
function startTime() {
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
var z="AM";
var current=new Date();
var yearnow=current.getFullYear();
var d=new Date();
var weekday=new Array(7)
weekday[0]="Sunday"
weekday[1]="Monday"
weekday[2]="Tuesday"
weekday[3]="Wednesday"
weekday[4]="Thursday"
weekday[5]="Friday"
weekday[6]="Saturday"
var datenow=current.getDate();
var monthnow2=current.getMonth();
var monthnow1=monthnow2+1;
m=checkTime(m);
s=checkTime(s);
if(h>11) {
z="PM";
h=h-12;
}
else {
z="AM";
}
if(h==0) {
h=12;
}
yearnow1=yearnow;
if (yearnow-2000==9) {yearnow1="09"}
document.getElementById('txt').innerHTML=h+":"+m+":"+s+" "+z+"<span style='float:right; margin-top:0px'>"+weekday[d.getDay()]+", "+(current.getMonth()+1)+"/"+datenow+"/"+yearnow1;
t=setTimeout('startTime()',500);
}

function checkTime(i) {
if (i<10) 
  {i="0" + i}
   return i
}











//REGROUP INTO 1 FUNCTION
function changelink() {window.location=document.jumptolink.link.value}
function changevideo() {window.location=document.jumptolink.video.value}
function changefun() {window.location=document.jumptolink.fun.value}
function changetorrent() {window.location=document.jumptolink.torrent.value}
//END JUMPLINK FUNCTIONS













function loadcalendar() {
	t1=new Date();
	datenum1=t1.getDate();
	month0=t1.getMonth()+1;
	year0=(t1.getFullYear()-2000);
	datenum2=datenum1+1;
	datenum3=datenum1+2;
	month2=month0;
	month3=month0;
	year2=year0;
	year3=year0;
	var day0=new Array(7)
		day0[0]="Sun"
		day0[1]="Mon"
		day0[2]="Tue"
		day0[3]="Wed"
		day0[4]="Thu"
		day0[5]="Fri"
		day0[6]="Sat"
	day21=t1.getDay()+1;
	day31=t1.getDay()+2;
	if (day21==7) {day21=0; day31=1;}
	if (day31==7) {day31=0;}
	day1=day0[t1.getDay()];
	day2=day0[day21];
	day3=day0[day31];
	if (datenum1==31) {
		if (month0==1) {datenum2=1; datenum3=2; month2=2; month3=2;}
		if (month0==3) {datenum2=1; datenum3=2; month2=4; month3=4;}
		if (month0==5) {datenum2=1; datenum3=2; month2=6; month3=6;}
		if (month0==7) {datenum2=1; datenum3=2; month2=8; month3=8;}
		if (month0==8) {datenum2=1; datenum3=2; month2=9; month3=9;}
		if (month0==10) {datenum2=1; datenum3=2; month2=11; month3=11;}
		if (month0==12) {datenum2=1; datenum3=2; month2=1; month3=1; year2=year0+1; year3=year0+1;}
	}
	if (datenum1==30) {
		if (month0==1) {datenum3=1; month3=2;}
		if (month0==3) {datenum3=1; month3=4;}
		if (month0==4) {datenum2=1; datenum3=2; month2=5; month3=5;}
		if (month0==5) {datenum3=1; month3=6;}
		if (month0==6) {datenum2=1; datenum3=2; month2=7; month3=7;}
		if (month0==7) {datenum3=1; month3=8;}
		if (month0==8) {datenum3=1; month3=9;}
		if (month0==9) {datenum2=1; datenum3=2; month2=10; month3=10;}
		if (month0==10) {datenum3=1; month3=11;}
		if (month0==11) {datenum2=1; datenum3=2; month2=12; month3=12;}
		if (month0==12) {datenum3=1; month3=1; year3=year0+1;}
	}
	if (datenum1==29) {
		if (month0==2) {datenum2=1; datenum3=2; month2=3; month3=3;}
		if (month0==4) {datenum3=1; month3=5;}
		if (month0==6) {datenum3=1; month3=7;}
		if (month0==9) {datenum3=1; month3=10;}
		if (month0==11) {datenum3=1; month3=12;}
	}
	if (datenum1==28) {
		if (month0==2) {
			if ((year0%4)==0) {
				if ((year0%100)!=0) {datenum2=1; datenum3=2; month2=3; month3=3;}
				if ((year0%400)==0)	{datenum2=1; datenum3=2; month2=3; month3=3;}
			}
			if ((year0%4)!=0) {datenum2=29; datenum3=1; month3=3;}
			if ((year0%100)==0) {datenum2=29; datenum3=1; month3=3;}
		}
	}
	if (datenum1==27) {
		if (month0==2) {
			if ((year0%4)==0) {
				if ((year0%100)!=0) {datenum3=1; month3=3;}
				if ((year0%400)==0)	{datenum3=1; month3=3;}
			}
		}
	}
	if (year0<10) {year0='0'+year0;}
	if (year2<10) {year2='0'+year2;}
	if (year3<10) {year3='0'+year3;}
	var monthnowx=new Array(7)
		monthnowx[0]="January"
		monthnowx[1]="February"
		monthnowx[2]="March"
		monthnowx[3]="April"
		monthnowx[4]="May"
		monthnowx[5]="June"
		monthnowx[6]="July"
		monthnowx[7]="August"
		monthnowx[8]="September"
		monthnowx[9]="October"
		monthnowx[10]="November"
		monthnowx[11]="December"
	date1=month0+'/'+datenum1+'/'+year0;
	date2=month2+'/'+datenum2+'/'+year2;
	date3=month3+'/'+datenum3+'/'+year3;
	reminders1=reminderget(monthnowx[month0-1],datenum1);
	reminders2=reminderget(monthnowx[month2-1],datenum2);
	reminders3=reminderget(monthnowx[month3-1],datenum3);
	if (reminders1 == '<b>1)</b>' || reminders1 == '') {reminders1="<b></b>No reminders";}
	if (reminders2 == '<b>1)</b>' || reminders2 == '') {reminders2="<b></b>No reminders";}
	if (reminders3 == '<b>1)</b>' || reminders3 == '') {reminders3="<b></b>No reminders";}
	document.getElementById('calendarbox').innerHTML='<ul><li><span class="lefty"><b>'+day1+'</span><span class="righty">'+date1+'</b></span><p>'+reminders1+'</p></li><li><span class="lefty"><i>'+day2+'</span><span class="righty">'+date2+'</i></span><p>'+reminders2+'</p></li><li><span class="lefty"><i>'+day3+'</span><span class="righty">'+date3+'</i></span><p>'+reminders3+'</p></li></ul><a href="calendar/calendar.html">View the calendar</a>';
}
function reminderget(monthz,dayz) {
	var alertit = getCookie(monthz + dayz);
	var textit='';
	if(alertit != null) {
		alertit = alertit.split("|");
		textit = "<b>1)</b>" + alertit[0];
		for(var i = 1; i < alertit.length; i++) {
			textit += "<br><b>" + (i + 1) + ")</b>" + alertit[i];
		}
	}
	return textit;
}
function switcher(num) {
fqvalue=document.getElementById('sf').value;
if (changeoff==1) {fqvalue=fqvalueold;}
endpic='';
changeoff=0;
sb1=document.getElementById('searchbox1');
sb2=document.getElementById('searchbox2');
b='<input type="text" maxlength="256" size="50" id="sf" name="';
e='" class="search">';
a0="<a href='";
a1="<a onclick='switcher(";
c="' class='cur'>";
i="<img src='pictures/logos/";
i1="<img src='pictures/firefox/blank.gif' height='1px' width='425px'>";
switch (num) {
case -1: f.action='http://www.google.com/search';
	sb1.innerHTML='<a href="http://google.com" class="cur"><img src="pictures/logos/google.png"></a><a onclick="switcher(-2)"><img src="pictures/logos/googleimgs.png"></a><a onclick="switcher(-3)"><img src="pictures/logos/googlevids.png"></a><a onclick="switcher(-4)"><img src="pictures/logos/googlemaps.png"></a><a onclick="switcher(-5)"><img src="pictures/logos/googlenews.png"></a><a onclick="switcher(-6)"><img src="pictures/logos/googleshop.png"></a><a onclick="switcher(-7)"><img src="pictures/logos/googlefinance.png"></a>';
	sb2.innerHTML=b+'q'+e+'<br><input value="Web search" class="sub" type="submit">File type:<select name="q"><option value="">All</option><option value="filetype:3GP">3GP</option><option value="filetype:7Z">7Z</option><option value="filetype:AVI">AVI</option><option value="filetype:BAT">BAT</option><option value="filetype:BMP">BMP</option><option value="filetype:COM">COM</option><option value="filetype:CSV">CSV</option><option value="filetype:DAT">DAT</option><option value="filetype:DOC">DOC</option><option value="filetype:DOCX">DOCX</option><option value="filetype:DLL">DLL</option><option value="filetype:EXE">EXE</option><option value="filetype:FLV">FLV</option><option value="filetype:GIF">GIF</option><option value="filetype:ISO">ISO</option><option value="filetype:JPG">JPG</option><option value="filetype:LOG">LOG</option><option value="filetype:MID">MID</option><option value="filetype:MIDI">MIDI</option><option value="filetype:MOV">MOV</option><option value="filetype:MP3">MP3</option><option value="filetype:MP4">MP4</option><option value="filetype:MPG">MPG</option><option value="filetype:MSI">MSI</option><option value="filetype:PDF">PDF</option><option value="filetype:PNG">PNG</option><option value="filetype:PPS">PPS</option><option value="filetype:PPT">PPT</option><option value="filetype:PSD">PSD</option><option value="filetype:RAR">RAR</option><option value="filetype:RM">RM</option><option value="filetype:RTF">RTF</option><option value="filetype:RSS">RSS</option><option value="filetype:SVG">SVG</option><option value="filetype:SWF">SWF</option><option value="filetype:TIF">TIF</option><option value="filetype:TXT">TXT</option><option value="filetype:XLS">XLS</option><option value="filetype:XLSX">XLSX</option><option value="filetype:XML">XML</option><option value="filetype:WAV">WAV</option><option value="filetype:WKS">WKS</option><option value="filetype:WPD">WPD</option><option value="filetype:WPS">WPS</option><option value="filetype:WMA">WMA</option><option value="filetype:WMV">WMV</option><option value="filetype:ZIP">ZIP</option></select> Date:<select name="tbs"><option value="" selected>All time</option><option value="rcnt:1">Recent</option><option value="qdr:d">Past day</option><option value="qdr:w">Past week</option><option value="qdr:y">Past year</option></select>';
	break;
case -2: f.action='http://www.google.com/images';
	sb1.innerHTML='<a onclick="switcher(-1)"><img src="pictures/logos/google.png"></a><a href="http://www.google.com/images" class="cur"><img src="pictures/logos/googleimgs.png"></a><a onClick="switcher(-3)"><img src="pictures/logos/googlevids.png"></a><a onclick="switcher(-4)"><img src="pictures/logos/googlemaps.png"></a><a onClick="switcher(-5)"><img src="pictures/logos/googlenews.png"></a><a onClick="switcher(-6)"><img src="pictures/logos/googleshop.png"></a><a onclick="switcher(-7)"><img src="pictures/logos/googlefinance.png"></a>';
	sb2.innerHTML=b+'q'+e+'<br><input value="Image search" class="sub" type="submit">Show:<select name="imgsz"><option value="" selected>All image sizes</option><option value="huge">Extra Large images</option><option value="xxlarge">Large images</option><option value="small|medium|large|xlarge">Medium images</option><option value="icon">Small images</option></select> Filetype:<select name="as_filetype"><option value="">All</option><option value="bmp">BMP</option><option value="gif">GIF</option><option value="jpg">JPG</option><option value="png">PNG</option></select> SafeSearch:<select name="safe"><option value="off">Off</option><option value="active">On</option></select>';
	break;
case -3: f.action='http://video.google.com/videosearch';
	sb1.innerHTML='<a onclick="switcher(-1)"><img src="pictures/logos/google.png"></a><a onclick="switcher(-2)"><img src="pictures/logos/googleimgs.png"></a><a href="http://video.google.com" class="cur"><img src="pictures/logos/googlevids.png"></a><a onclick="switcher(-4)"><img src="pictures/logos/googlemaps.png"></a><a onClick="switcher(-5)"><img src="pictures/logos/googlenews.png"></a><a onClick="switcher(-6)"><img src="pictures/logos/googleshop.png"></a><a onclick="switcher(-7)"><img src="pictures/logos/googlefinance.png"></a>';
	sb2.innerHTML=b+'q'+e+'<br><input value="Video search" class="sub" type="submit">Sort by:<select name="so"><option value="" selected>Relevance</option><option value="1">Date</option></select> Time:<select name="st"><option value="">Any</option><option value="day">Last day</option><option value="week">Last week</option><option value="month">Last month</option></select> Length:<select name="dur"><option value="1">0-4 mins</option><option value="2">4-20 mins</option><option value="3">20+ mins</option></select>';
	break;
case -4: f.action='http://maps.google.com/maps';
	sb1.innerHTML='<a onclick="switcher(-1)"><img src="pictures/logos/google.png"></a><a onclick="switcher(-2)"><img src="pictures/logos/googleimgs.png"></a><a onclick="switcher(-3)"><img src="pictures/logos/googlevids.png"></a><a href="http://maps.google.com" class="cur"><img src="pictures/logos/googlemaps.png"></a><a onClick="switcher(-5)"><img src="pictures/logos/googlenews.png"></a><a onClick="switcher(-6)"><img src="pictures/logos/googleshop.png"></a><a onclick="switcher(-7)"><img src="pictures/logos/googlefinance.png"></a>';
	sb2.innerHTML=b+'q'+e+'<br><input value="Map search" class="sub" type="submit">Find:<select name="mrt" id="mrtbox"><option value="all" selected="selected">All results</option><option value="loc">Locations</option><option value="yp">Businesses</option><option value="kmlkmz">User-created content</option><option value="ds">Related maps</option><option value="websearch">Mapped web pages</option><option value="realestate">Real estate</option></select>';
	break;
case -5: f.action='http://news.google.com/news';
	sb1.innerHTML='<a onclick="switcher(-1)"><img src="pictures/logos/google.png"></a><a onclick="switcher(-2)"><img src="pictures/logos/googleimgs.png"></a><a onclick="switcher(-3)"><img src="pictures/logos/googlevids.png"></a><a onclick="switcher(-4)"><img src="pictures/logos/googlemaps.png"></a><a href="http://news.google.com" class="cur"><img src="pictures/logos/googlenews.png"></a><a onclick="switcher(-6)"><img src="pictures/logos/googleshop.png"></a><a onclick="switcher(-7)"><img src="pictures/logos/googlefinance.png"></a>';
	sb2.innerHTML=b+'q'+e+'<br><input value="News search" class="sub" type="submit">Sort by:<select name="scoring"><option value="">Relevance</option><option value="n">Date</option><option value="d">Date with duplicates</option></select> Category:<select name="topic"><option value="">Top Stories</option><option value="w">World</option><option value="u">U.S.</option><option value="b">Business</option><option value="t">Sci/Tech</option><option value="e">Entertainment</option><option value="s">Sports</option><option value="m">Health</option><option value="po">Most Popular</option></select>';
	break;
case -6: f.action='http://google.com/products';
	sb1.innerHTML='<a onclick="switcher(-1)"><img src="pictures/logos/google.png"></a><a onclick="switcher(-2)"><img src="pictures/logos/googleimgs.png"></a><a onclick="switcher(-3)"><img src="pictures/logos/googlevids.png"></a><a onclick="switcher(-4)"><img src="pictures/logos/googlemaps.png"></a><a onclick="switcher(-5)"><img src="pictures/logos/googlenews.png"></a><a href="http://google.com/products" class="cur"><img src="pictures/logos/googleshop.png"></a><a onclick="switcher(-7)"><img src="pictures/logos/googlefinance.png"></a>';
	sb2.innerHTML=b+'q'+e+'<br><input value="Shopping search" class="sub" type="submit">Sort by:<select name="scoring"><option value="r">Relevance</option><option value="p">Price:low to high</option><option value="pd">Price:high to low</option><option value="prd">Product Rating</option><option value="mrd">Seller rating</option></select> Price range:$<input type="text" name="price1" class="w" size=1> to $<input type="text" name="price2" class="w" size=1>';
	break;
case -7: f.action='http://google.com/finance';
	sb1.innerHTML='<a onclick="switcher(-1)"><img src="pictures/logos/google.png"></a><a onclick="switcher(-2)"><img src="pictures/logos/googleimgs.png"></a><a onclick="switcher(-3)"><img src="pictures/logos/googlevids.png"></a><a onclick="switcher(-4)"><img src="pictures/logos/googlemaps.png"></a><a onclick="switcher(-5)"><img src="pictures/logos/googlenews.png"></a><a onclick="switcher(-6)"><img src="pictures/logos/googleshop.png"></a><a href="http://google.com/finance" class="cur"><img src="pictures/logos/googlefinance.png"></a>';
	sb2.innerHTML=b+'q'+e+'<br><input value="Finance search" class="sub" type="submit">';
	break;
case -11: f.action='http://search.yahoo.com/search';
	sb1.innerHTML='<a href="http://yahoo.com" class="cur"><img src="pictures/logos/yahoo.png"></a><a onclick="switcher(-12)"><img src="pictures/logos/yahooimgs.png"></a><a onclick="switcher(-13)"><img src="pictures/logos/yahoovids.png"></a><a onclick="switcher(-14)"><img src="pictures/logos/yahooans.png"></a><a onclick="switcher(-15)"><img src="pictures/logos/yahooshop.png"></a><a onclick="switcher(-16)"><img src="pictures/logos/yahoosports.png"></a><a onclick="switcher(-17)"><img src="pictures/logos/yahoonews.png"></a>';
	sb2.innerHTML=b+'q'+e+'<br><input value="Web search" class="sub" type="submit"><input type="hidden" name="n" value="100">File Type:<select name="vf"><option value="">all formats</option><option value="html">HTML (.htm, .html)</option><option value="pdf">Adobe PDF (.pdf)</option><option value="xl">Microsoft Excel (.xls)</option><option value="ppt">Microsoft Powerpoint (.ppt)</option><option value="msword">Microsoft Word (.doc)</option><option value="xml">RSS/XML (.xml)</option><option value="txt">Text Format (.txt)</option></select> Date:<select name="vd"><option value="">Anytime<option value="m3">Within 3 months</option><option value="m6">Within 6 months</option><option value="y">Within 1 year</option></select>';
	break;
case -12: f.action='http://images.search.yahoo.com/search/images';
	sb1.innerHTML='<a onclick="switcher(-11)"><img src="pictures/logos/yahoo.png"></a><a href="http://images.search.yahoo.com" class="cur"><img src="pictures/logos/yahooimgs.png"></a><a onclick="switcher(-13)"><img src="pictures/logos/yahoovids.png"></a><a onclick="switcher(-14)"><img src="pictures/logos/yahooans.png"></a><a onclick="switcher(-15)"><img src="pictures/logos/yahooshop.png"></a><a onclick="switcher(-16)"><img src="pictures/logos/yahoosports.png"></a><a onclick="switcher(-17)"><img src="pictures/logos/yahoonews.png"></a>';
	sb2.innerHTML=b+'q'+e+'<br><input value="Image search" class="sub" type="submit">';
	break;
case -13: f.action='http://video.search.yahoo.com/search/video';
	sb1.innerHTML='<a onclick="switcher(-11)"><img src="pictures/logos/yahoo.png"></a><a onclick="switcher(-12)"><img src="pictures/logos/yahooimgs.png"></a><a href="http://video.search.yahoo.com" class="cur"><img src="pictures/logos/yahoovids.png"></a><a onclick="switcher(-14)"><img src="pictures/logos/yahooans.png"></a><a onclick="switcher(-15)"><img src="pictures/logos/yahooshop.png"></a><a onclick="switcher(-16)"><img src="pictures/logos/yahoosports.png"></a><a onclick="switcher(-17)"><img src="pictures/logos/yahoonews.png"></a>';
	sb2.innerHTML=b+'q'+e+'<br><input value="Video search" class="sub" type="submit"><input type="hidden" name="vw" value="1">Sort by:<select name="sort"><option value="">Relevance</option><option value="new">Newest</option></select> Duration:<select name="dur"><option value="all" selected>All lengths</option><option value="short">Less than 1 min</option><option value="medium">1 to 4 mins</option><option value="long">More than 4 mins</option></select> Format:<select name="vf" multiple size="3" class="mulsel"><option selected>All formats</option><option value="avi">AVI</option><option value="mpeg">MPEG</option><option value="qt">QuickTime</option><option value="msmedia">Windows Media</option><option value="realmedia">Real</option><option value="flash">Flash</option></select>';
	break;
case -14: f.action='http://answers.yahoo.com/search/search_result';
	sb1.innerHTML='<a onclick="switcher(-11)"><img src="pictures/logos/yahoo.png"></a><a onclick="switcher(-12)"><img src="pictures/logos/yahooimgs.png"></a><a onclick="switcher(-13)"><img src="pictures/logos/yahoovids.png"></a><a href="http://answers.yahoo.com" class="cur"><img src="pictures/logos/yahooans.png"></a><a onclick="switcher(-15)"><img src="pictures/logos/yahooshop.png"></a><a onclick="switcher(-16)"><img src="pictures/logos/yahoosports.png"></a><a onclick="switcher(-17)"><img src="pictures/logos/yahoonews.png"></a>';
	sb2.innerHTML=b+'p'+e+'<br><input value="Answers search" class="sub" type="submit">Type:<select name="scope"><option value="" selected>All</option><option value="subject">Questions</option><option value="bestanswer">Best Answers</option></select> Category:<select name="mc"><option value="">All</option><option value="396545012">Arts &amp; Humanities</option><option value="396545144">Beauty &amp; Style</option><option value="396545013">Business &amp; Finance</option><option value="396545311">Cars &amp; Transportation</option><option value="396545660">Computers &amp; Internet</option><option value="396545014">Consumer Electronics</option><option value="396545327">Dining Out</option><option value="396545015">Education &amp; Reference</option><option value="396545016">Entertainment &amp; Music</option><option value="396545451">Environment</option><option value="396545433">Family &amp; Relationships</option><option value="396545367">Food &amp; Drink</option><option value="396545019">Games &amp; Recreation</option><option value="396545018">Health</option><option value="396545394">Home &amp; Garden</option><option value="396545401">Local Businesses</option><option value="396545439">News &amp; Events</option><option value="396545443">Pets</option><option value="396545444">Politics &amp; Government</option><option value="396546046">Pregnancy &amp; Parenting</option><option value="396545122">Science &amp; Mathematics</option><option value="396545301">Social Science</option><option value="396545454">Society &amp; Culture</option><option value="396545213">Sports</option><option value="396545469">Travel</option><option value="396546089">Yahoo! Products</option></select> Filter:<select name="tab"><option value="0" selected>All</option><option value="1">Resolved</option><option value="2">Undecided</option><option value="3">Open</option></select>';
	break;
case -15: f.action='http://shopping.yahoo.com/search';
	sb1.innerHTML='<a onclick="switcher(-11)"><img src="pictures/logos/yahoo.png"></a><a onclick="switcher(-12)"><img src="pictures/logos/yahooimgs.png"></a><a onclick="switcher(-13)"><img src="pictures/logos/yahoovids.png"></a><a onclick="switcher(-14)"><img src="pictures/logos/yahooans.png"></a><a href="http://shopping.yahoo.com" class="cur"><img src="pictures/logos/yahooshop.png"></a><a onclick="switcher(-16)"><img src="pictures/logos/yahoosports.png"></a><a onclick="switcher(-17)"><img src="pictures/logos/yahoonews.png"></a>';
	sb2.innerHTML=b+'p'+e+'<br><input value="Shopping search" class="sub" type="submit">Sort by:<select name="sortby"><option value="0">Top results</option><option value="1" selected="selected">Lowest price</option><option value="2">Highest price</option></select> Category:<select name="did"><option value="" selected>All departments</option><option value="47">Bargains</option><option value="55">Beauty</option><option value="56">Books</option><option value="51">Clothing</option><option value="57">Computers &amp; Office</option><option value="65">Movies &amp; DVDs</option><option value="59">Electronics</option><option value="60">Flowers &amp; Gifts</option><option value="62">Health</option><option value="63">Home &amp; Garden</option><option value="64">Jewelry &amp; Watches</option><option value="66">Music</option><option value="68">Sports &amp; Outdoors</option><option value="69">Toys &amp; Baby</option></select> Price:$<input type="text" name="pf" class="w" size=1>-$<input type="text" name="pt" class="w" size=1><input type="hidden" name="showresults" value="45">';
	break;
case -16: f.action='http://sports.search.yahoo.com/search';
	sb1.innerHTML='<a onclick="switcher(-11)"><img src="pictures/logos/yahoo.png"></a><a onclick="switcher(-12)"><img src="pictures/logos/yahooimgs.png"></a><a onclick="switcher(-13)"><img src="pictures/logos/yahoovids.png"></a><a onclick="switcher(-14)"><img src="pictures/logos/yahooans.png"></a><a onclick="switcher(-15)"><img src="pictures/logos/yahooshop.png"></a><a href="http://sports.yahoo.com" class="cur"><img src="pictures/logos/yahoosports.png"></a><a onclick="switcher(-17)"><img src="pictures/logos/yahoonews.png"></a>';
	sb2.innerHTML=b+'p'+e+'<br><input value="Sports search" class="sub" type="submit">';
	break;
case -17: f.action='http://news.search.yahoo.com/news/search';
	sb1.innerHTML='<a onclick="switcher(-11)"><img src="pictures/logos/yahoo.png"></a><a onclick="switcher(-12)"><img src="pictures/logos/yahooimgs.png"></a><a onclick="switcher(-13)"><img src="pictures/logos/yahoovids.png"></a><a onclick="switcher(-14)"><img src="pictures/logos/yahooans.png"></a><a onclick="switcher(-15)"><img src="pictures/logos/yahooshop.png"></a><a onclick="switcher(-16)"><img src="pictures/logos/yahoosports.png"></a><a href="http://news.search.yahoo.com" class="cur"><img src="pictures/logos/yahoonews.png"></a>';
	sb2.innerHTML=b+'p'+e+'<br><input value="News search" class="sub" type="submit">Sort by: <select name="datesort"><option value="" selected>Relevance</option><option value="1">Date</option></select>Type:<select name="c"><option value="" >All News</option><option value="yahoo_news" >Yahoo! News Only</option><option value="images" >News Photos</option><option value="av" >Video/Audio</option></select> Age:<select name="timeago"><option value="hour">last hour</option><option value="day">last day</option><option value="week">last week</option><option value="twoweeks">last two weeks</option><option value="" selected>last thirty days</option></select><input type="hidden" name="ei" value="UTF-8"><input type="hidden" name="n" value="100">';
	break;
case -21: f.action='http://www.ask.com/web';
	sb1.innerHTML='<a href="http://ask.com" class="cur"><img src="pictures/logos/ask.png"></a><a onclick="switcher(-22)"><img src="pictures/logos/askimgs.png"></a><a onclick="switcher(-23)"><img src="pictures/logos/askvids.png"></a><a onclick="switcher(-24)"><img src="pictures/logos/asknews.png"></a><a onclick="switcher(-25)"><img src="pictures/logos/askblogs.png"></a><a onclick="switcher(-26)"><img src="pictures/logos/askqa.png"></a><a onclick="switcher(-27)"><img src="pictures/logos/askshop.png"></a>';
	sb2.innerHTML=b+'q'+e+'<br><input value="Web search" class="sub" type="submit">Date:<select name="date"><option value="">Anytime<option value="last:week">Within 1 week</option><option value="last:2weeks">Within 2 weeks</option><option value="last:month">Within 1 month</option><option value="last:3months">Within 3 months</option><option value="last:6months">Within 6 months</option><option value="last:year">Within 1 year</option><option value="last:2years">Within 2 years</option></select>';
	break;
case -22: f.action='http://images.ask.com/pictures';
	sb1.innerHTML='<a onclick="switcher(-21)"><img src="pictures/logos/ask.png"></a><a href="http://images.ask.com" class="cur"><img src="pictures/logos/askimgs.png"></a><a onclick="switcher(-23)"><img src="pictures/logos/askvids.png"></a><a onclick="switcher(-24)"><img src="pictures/logos/asknews.png"></a><a onclick="switcher(-25)"><img src="pictures/logos/askblogs.png"></a><a onclick="switcher(-26)"><img src="pictures/logos/askqa.png"></a><a onclick="switcher(-27)"><img src="pictures/logos/askshop.png"></a>';
	sb2.innerHTML=b+'q'+e+'<br><input value="Image search" class="sub" type="submit">Size:<select name="imgs"><option value="">All sizes</option><option value="i">Buddy icon</option><option value="s">Small</option><option value="m">Medium</option><option value="l">Large</option><option value="w">Wallpaper</option></select> Filetype:<select name="imgt"><option value="">All</option><option value="jpg">JPG</option><option value="gif">GIF</option><option value="bmp">BMP</option><option value="png">PNG</option></select> Color:<select name="imgc"><option value="">All colors</option><option value="color">Color</option><option value="bw">Black & White</option></select>';
	break;
case -23: f.action='http://www.ask.com/video';
	sb1.innerHTML='<a onclick="switcher(-21)"><img src="pictures/logos/ask.png"></a><a onclick="switcher(-22)"><img src="pictures/logos/askimgs.png"></a><a href="http://ask.com/video" class="cur"><img src="pictures/logos/askvids.png"></a><a onclick="switcher(-24)"><img src="pictures/logos/asknews.png"></a><a onclick="switcher(-25)"><img src="pictures/logos/askblogs.png"></a><a onclick="switcher(-26)"><img src="pictures/logos/askqa.png"></a><a onclick="switcher(-27)"><img src="pictures/logos/askshop.png"></a>';
	sb2.innerHTML=b+'q'+e+'<br><input value="Video search" class="sub" type="submit">Sort by:<select name="vids"><option value="" selected>Relevance</option><option value="d">Date</option></select> Length:<select name="vidl"><option value="">All lengths</option><option value="short">Less than 1 min</option><option value="medium">1 min to 5 min</option><option value="long">More than 5 min</option></select> Format:<select name="vidt"><option value="">All file types</option><option value="flv">Flash</option><option value="wmv">Windows Media</option><option value="mpg">MPEG</option><option value="rm">Real Media</option><option value="mov">Quicktime</option><option value="video">Unknown</option></select>';
	break;
case -24: f.action='http://news.ask.com/news';
	sb1.innerHTML='<a onclick="switcher(-21)"><img src="pictures/logos/ask.png"></a><a onclick="switcher(-22)"><img src="pictures/logos/askimgs.png"></a><a onclick="switcher(-23)"><img src="pictures/logos/askvids.png"></a><a href="http://news.ask.com/news" class="cur"><img src="pictures/logos/asknews.png"></a><a onclick="switcher(-25)"><img src="pictures/logos/askblogs.png"></a><a onclick="switcher(-26)"><img src="pictures/logos/askqa.png"></a><a onclick="switcher(-27)"><img src="pictures/logos/askshop.png"></a>';
	sb2.innerHTML=b+'q'+e+'<br><input value="News search" class="sub" type="submit">Sort by:<select name="n2o"><option value="" selected>Relevance</option><option value="d">Date</option></select> Category:<select name="n2c"><option value="" selected>All categories</option><option value="2">National</option><option value="3">Politics</option><option value="1">World</option><option value="4">Business</option><option value="6">Entertainment</option><option value="5">Sports</option><option value="7">Science &amp; Tech</option><option value="8">Health</option></select> Region:<select name="n2fid"><option value="" selected>All regions</option><option value="-1">Africa</option><option value="-3">Asia</option><option value="-2">Europe</option><option value="-5">Latin America</option><option value="-4">Middle East</option><option value="-6">Oceania</option></select>';
	break;
case -25: f.action='http://www.ask.com/blogsearch';
	sb1.innerHTML='<a onclick="switcher(-21)"><img src="pictures/logos/ask.png"></a><a onclick="switcher(-22)"><img src="pictures/logos/askimgs.png"></a><a onclick="switcher(-23)"><img src="pictures/logos/askvids.png"></a><a onclick="switcher(-24)"><img src="pictures/logos/asknews.png"></a><a href="http://maps.ask.com/maps" class="cur"><img src="pictures/logos/askblogs.png"></a><a onclick="switcher(-26)"><img src="pictures/logos/askqa.png"></a><a onclick="switcher(-27)"><img src="pictures/logos/askshop.png"></a>';
	sb2.innerHTML=b+'q'+e+'<br><input value="Blog search" class="sub" type="submit"><input type="hidden" name="rpp" value="25"><select name="s"><option value="r">Sort by Relevance</option><option value="f" selected>Sort by Date</option><option value="p">Sort by Popularity</option></select>';
	break;
case -26: f.action='http://www.ask.com/ans';
	sb1.innerHTML='<a onclick="switcher(-21)"><img src="pictures/logos/ask.png"></a><a onclick="switcher(-22)"><img src="pictures/logos/askimgs.png"></a><a onclick="switcher(-23)"><img src="pictures/logos/askvids.png"></a><a onclick="switcher(-24)"><img src="pictures/logos/asknews.png"></a><a onclick="switcher(-25)"><img src="pictures/logos/askblogs.png"></a><a href="http://ask.com/ans" class="cur"><img src="pictures/logos/askqa.png"></a><a onclick="switcher(-27)"><img src="pictures/logos/askshop.png"></a>';
	sb2.innerHTML=b+'q'+e+'<br><input value="Q&A search" class="sub" type="submit">';
	break;
case -27: f.action='http://ask.pronto.com/user/search.do';
	sb1.innerHTML='<a onclick="switcher(-21)"><img src="pictures/logos/ask.png"></a><a onclick="switcher(-22)"><img src="pictures/logos/askimgs.png"></a><a onclick="switcher(-23)"><img src="pictures/logos/askvids.png"></a><a onclick="switcher(-24)"><img src="pictures/logos/asknews.png"></a><a onclick="switcher(-25)"><img src="pictures/logos/askblogs.png"></a><a onclick="switcher(-26)"><img src="pictures/logos/askqa.png"></a><a href="http://ask.pronto.com" class="cur"><img src="pictures/logos/askshop.png"></a>';
	sb2.innerHTML=b+'query'+e+'<br><input value="Shopping search" class="sub" type="submit">';
	break;
case -31: f.action='http://search.live.com/results.aspx';
	sb1.innerHTML='<a href="http://bing.com" class="cur"><img src="pictures/logos/bing.png"></a><a onclick="switcher(-32)"><img src="pictures/logos/bingimgs.png"></a><a onclick="switcher(-33)"><img src="pictures/logos/bingvids.png"></a><a onclick="switcher(-34)"><img src="pictures/logos/bingnews.png"></a><a onclick="switcher(-35)"><img src="pictures/logos/bingxrank.png"></a><a onclick="switcher(-36)"><img src="pictures/logos/bingshop.png"></a><a onclick="switcher(-37)"><img src="pictures/logos/binglocal.png"></a>';
	sb2.innerHTML=b+'q'+e+'<br><input value="Web search" class="sub" type="submit">';
	break;
case -32: f.action='javascript:difsearch(-32)';
	sb1.innerHTML='<a onclick="switcher(-31)"><img src="pictures/logos/bing.png"></a><a href="http://bing.com/images" class="cur"><img src="pictures/logos/bingimgs.png"></a><a onclick="switcher(-33)"><img src="pictures/logos/bingvids.png"></a><a onclick="switcher(-34)"><img src="pictures/logos/bingnews.png"></a><a onclick="switcher(-35)"><img src="pictures/logos/bingxrank.png"></a><a onclick="switcher(-36)"><img src="pictures/logos/bingshop.png"></a><a onclick="switcher(-37)"><img src="pictures/logos/binglocal.png"></a>';
	sb2.innerHTML=b+'q'+e+'<br><input value="Image search" class="sub" type="submit">Size:<select name="f"><option value="" selected>All</option><option value="small">Small</option><option value="medium">Medium</option><option value="large">Large</option></select>';
	break;
case -33: f.action='javascript:difsearch(-33)';
	sb1.innerHTML='<a onclick="switcher(-31)"><img src="pictures/logos/bing.png"></a><a onclick="switcher(-32)"><img src="pictures/logos/bingimgs.png"></a><a href="http://bing.com/video" class="cur"><img src="pictures/logos/bingvids.png"></a><a onclick="switcher(-34)"><img src="pictures/logos/bingnews.png"></a><a onclick="switcher(-35)"><img src="pictures/logos/bingxrank.png"></a><a onclick="switcher(-36)"><img src="pictures/logos/bingshop.png"></a><a onclick="switcher(-37)"><img src="pictures/logos/binglocal.png"></a>';
	sb2.innerHTML=b+'q'+e+'<br><input value="Video search" class="sub" type="submit">Sort by:<select name="sb"><option value="" selected>Best match</option><option value="1">Most recent</option></select> Length:<select name="l"><option value="" selected>All</option><option value="short">0 to 5 min</option><option value="medium">5 to 20 min</option><option value="long">Over 20 min</option></select> Resolution:<select name="r"><option value="" selected>All</option><option value="low">Low</option><option value="medium">Medium</option><option value="high">High</option></select>';
	break;
case -34: f.action='javascript:difsearch(-34)';
	sb1.innerHTML='<a onclick="switcher(-31)"><img src="pictures/logos/bing.png"></a><a onclick="switcher(-32)"><img src="pictures/logos/bingimgs.png"></a><a onclick="switcher(-33)"><img src="pictures/logos/bingvids.png"></a><a href="http://bing.com/news" class="cur"><img src="pictures/logos/bingnews.png"></a><a onclick="switcher(-35)"><img src="pictures/logos/bingxrank.png"></a><a onclick="switcher(-36)"><img src="pictures/logos/bingshop.png"></a><a onclick="switcher(-37)"><img src="pictures/logos/binglocal.png"></a>';
	sb2.innerHTML=b+'q'+e+'<br><input value="News search" class="sub" type="submit">Sort by:<select name="p1"><option value="" selected>Best match</option><option value="[NewsVertical+SortByDate:"1"]">Most recent</option></select>';
	break;
case -35: f.action='http://www.bing.com/xrank/search';
	sb1.innerHTML='<a onclick="switcher(-31)"><img src="pictures/logos/bing.png"></a><a onclick="switcher(-32)"><img src="pictures/logos/bingimgs.png"></a><a onclick="switcher(-33)"><img src="pictures/logos/bingvids.png"></a><a onclick="switcher(-34)"><img src="pictures/logos/bingnews.png"></a><a href="http://bing.com/maps" class="cur"><img src="pictures/logos/bingxrank.png"></a><a onclick="switcher(-36)"><img src="pictures/logos/bingshop.png"></a><a onclick="switcher(-37)"><img src="pictures/logos/binglocal.png"></a>';
	sb2.innerHTML=b+'q'+e+'<br><input value="xRank search" class="sub" type="submit">';
	break;
case -36: f.action='javascript:difsearch(-36)';
	sb1.innerHTML='<a onclick="switcher(-31)"><img src="pictures/logos/bing.png"></a><a onclick="switcher(-32)"><img src="pictures/logos/bingimgs.png"></a><a onclick="switcher(-33)"><img src="pictures/logos/bingvids.png"></a><a onclick="switcher(-34)"><img src="pictures/logos/bingnews.png"></a><a onclick="switcher(-35)"><img src="pictures/logos/bingxrank.png"></a><a href="http://bing.com/shopping" class="cur"><img src="pictures/logos/bingshop.png"></a><a onclick="switcher(-37)"><img src="pictures/logos/binglocal.png"></a>';
	sb2.innerHTML=b+'q'+e+'<br><input value="Shopping search" class="sub" type="submit">Sort by:<select name="s"><option value="" selected>Best match</option><option value="ra">Rating</option><option value="pa">Price</option></select> Price:$<input type="text" name="p1" class="w" size=1> to $<input type="text" name="p2" class="w" size=1>';
	break;
case -37: f.action='http://www.bing.com/local/default.aspx';
	sb1.innerHTML='<a onclick="switcher(-31)"><img src="pictures/logos/bing.png"></a><a onclick="switcher(-32)"><img src="pictures/logos/bingimgs.png"></a><a onclick="switcher(-33)"><img src="pictures/logos/bingvids.png"></a><a onclick="switcher(-34)"><img src="pictures/logos/bingnews.png"></a><a onclick="switcher(-35)"><img src="pictures/logos/bingxrank.png"></a><a onclick="switcher(-36)"><img src="pictures/logos/bingshop.png"></a><a href="http://www.bing.com/local" class="cur"><img src="pictures/logos/binglocal.png"></a>';
	sb2.innerHTML=b+'q'+e+'<br><input value="Local search" class="sub" type="submit">';
	break;
case 1: f.action='http://www.wikipedia.org/search-redirect.php';
	sb1.innerHTML='<a href="http://wikipedia.org" class="cur"><img src="pictures/logos/wiki.png"></a><a onclick="switcher(2)"><img src="pictures/logos/imdb.png"></a><a onclick="switcher(3)"><img src="pictures/logos/dictionary.png"></a><a onclick="switcher(4)"><img src="pictures/logos/answers.png"></a><a onclick="switcher(5)"><img src="pictures/logos/wordreference.png"></a><a onclick="switcher(6)"><img src="pictures/logos/urbandictionary.png"></a><a onclick="switcher(7)"><img src="pictures/logos/webmd.png"></a>';
	sb2.innerHTML='<input type="hidden" name="language" value="en"><input type="text" id="sf" name="search'+e+'<br><input class="sub" type="submit" name="go" value="Wikipedia search">';
	break;
case 2: f.action='http://www.imdb.com/find';
	sb1.innerHTML='<a onclick="switcher(1)"><img src="pictures/logos/wiki.png"></a><a href="http://imdb.com" class="cur"><img src="pictures/logos/imdb.png"></a><a onclick="switcher(3)"><img src="pictures/logos/dictionary.png"></a><a onclick="switcher(4)"><img src="pictures/logos/answers.png"></a><a onclick="switcher(5)"><img src="pictures/logos/wordreference.png"></a><a onclick="switcher(6)"><img src="pictures/logos/urbandictionary.png"></a><a onclick="switcher(7)"><img src="pictures/logos/webmd.png"></a>';
	sb2.innerHTML=b+'q'+e+'<br><input class="sub" type="submit" value="IMDB search">Search for:<select name="s"><option value="all" selected>All</option><option value="tt">Titles</option><option value="ep">TV Episodes</option><option>My Movies</option><option value="nm">Names</option><option value="co">Companies</option><option value="kw">Keywords</option><option value="char">Characters</option></select>';
	break;
case 3: f.action='http://www.dictionary.reference.com/search';
	sb1.innerHTML='<a onclick="switcher(1)"><img src="pictures/logos/wiki.png"></a><a onclick="switcher(2)"><img src="pictures/logos/imdb.png"></a><a href="http://dictionary.reference.com" class="cur"><img src="pictures/logos/dictionary.png"></a><a onclick="switcher(4)"><img src="pictures/logos/answers.png"></a><a onclick="switcher(5)"><img src="pictures/logos/wordreference.png"></a><a onclick="switcher(6)"><img src="pictures/logos/urbandictionary.png"></a><a onclick="switcher(7)"><img src="pictures/logos/webmd.png"></a>';
	sb2.innerHTML=b+'q'+e+'<br><input class="sub" type="submit" value="Dictionary search"><label><input type="radio" name="dic" onchange="difsearch(3)" value="1" checked>Dictionary</label><label><input type="radio" name="dic" value="2" onchange="difsearch(3)">Thesaurus</label><label><input type="radio" name="dic" value="3" onchange="difsearch(3)">Encyclopedia</label><label><input type="radio" name="dic" value="4" onchange="difsearch(3)">Translate</label>';
	break;
case 4: f.action='http://www.answers.com/main/ntquery';
	sb1.innerHTML='<a onclick="switcher(1)"><img src="pictures/logos/wiki.png"></a><a onclick="switcher(2)"><img src="pictures/logos/imdb.png"></a><a onclick="switcher(3)"><img src="pictures/logos/dictionary.png"></a><a href="http://answers.com" class="cur"><img src="pictures/logos/answers.png"></a><a onclick="switcher(5)"><img src="pictures/logos/wordreference.png"></a><a onclick="switcher(6)"><img src="pictures/logos/urbandictionary.png"></a><a onclick="switcher(7)"><img src="pictures/logos/webmd.png"></a>';
	sb2.innerHTML=b+'s'+e+'<br><input class="sub" type="submit" value="Answers.com search">';
	break;
case 5: f.action='http://www.wordreference.com/es/translation.asp';
	sb1.innerHTML='<a onclick="switcher(1)"><img src="pictures/logos/wiki.png"></a><a onclick="switcher(2)"><img src="pictures/logos/imdb.png"></a><a onclick="switcher(3)"><img src="pictures/logos/dictionary.png"></a><a onclick="switcher(4)"><img src="pictures/logos/answers.png"></a><a href="http://wordreference.com" class="cur"><img src="pictures/logos/wordreference.png"></a><a onclick="switcher(6)"><img src="pictures/logos/urbandictionary.png"></a><a onclick="switcher(7)"><img src="pictures/logos/webmd.png"></a>';
	sb2.innerHTML=b+'tranword'+e+'<br><input class="sub" type="submit" value="WordReference translate">Language:<select name="dict"><optgroup label="English to:"><option id="enes" value="enes" selected>English to Spanish</option><option id="enfr" value="enfr">English to French</option><option id="enit" value="enit">English to Italian</option><option id="ende" value="ende">English to German</option><option id="enru" value="enru">English to Russian</option><option id="enpt" value="enpt">English to Portuguese</option><option id="enpo" value="enpl">English to Polish</option><option id="enro" value="enro">English to Romanian</option><option id="encz" value="encz">English to Czech</option><option id="engr" value="engr">English to Greek</option><option id="entr" value="entr">English to Turkish</option><option id="enzh" value="enzh">English to Chinese</option><option id="enja" value="enja">English to Japanese</option><option id="enko" value="enko">English to Korean</option><option id="enar" value="enar">English to Arabic</option><option id="enen" value="enen">English definition</option></optgroup><optgroup label="To English:"><option id="esen" value="esen">Spanish to English</option><option id="fren" value="fren">French to English</option><option id="iten" value="iten">Italian to English</option><option id="deen" value="deen">German to English</option><option id="ruen" value="ruen">Russian to English</option></optgroup><optgroup label="Spanish to:"><option id="esfr" value="esfr">Spanish to French</option><option id="espt" value="espt">Spanish to Portuguese</option><option id="eses" value="eses">Spanish: definition</option><option id="essin" value="essin">Spanish: synonyms</option></optgroup><optgroup label="To Spanish:"><option id="fres" value="fres">French to Spanish</option><option id="ptes" value="ptes">Portuguese to Spanish</option></optgroup></select>';
	break;
case 6: f.action='http://www.urbandictionary.com/define.php';
	sb1.innerHTML='<a onclick="switcher(1)"><img src="pictures/logos/wiki.png"></a><a onclick="switcher(2)"><img src="pictures/logos/imdb.png"></a><a onclick="switcher(3)"><img src="pictures/logos/dictionary.png"></a><a onclick="switcher(4)"><img src="pictures/logos/answers.png"></a><a onclick="switcher(5)"><img src="pictures/logos/wordreference.png"></a><a href="http://urbandictionary.com" class="cur"><img src="pictures/logos/urbandictionary.png"></a><a onclick="switcher(7)"><img src="pictures/logos/webmd.png"></a>';
	sb2.innerHTML=b+'term'+e+'<br><input class="sub" type="submit" value="Urban Dictionary search">';
	break;
case 7: f.action='http://www.webmd.com/search/search_results/default.aspx';
	sb1.innerHTML='<a onclick="switcher(1)"><img src="pictures/logos/wiki.png"></a><a onclick="switcher(2)"><img src="pictures/logos/imdb.png"></a><a onclick="switcher(3)"><img src="pictures/logos/dictionary.png"></a><a onclick="switcher(4)"><img src="pictures/logos/answers.png"></a><a onclick="switcher(5)"><img src="pictures/logos/wordreference.png"></a><a onclick="switcher(6)"><img src="pictures/logos/urbandictionary.png"></a><a href="http://webmd.com" class="cur"><img src="pictures/logos/webmd.png"></a>';
	sb2.innerHTML=b+'query'+e+'<br><input class="sub" type="submit" value="WebMD search"><input type="hidden" name="sourceType" value="CentiSearch">';
	break;
case 11: f.action='http://search.cnn.com/search.jsp';
	sb2.innerHTML=b+'query'+e+'<br><input class="sub" type="submit" value="CNN search">Type:<select name="type"><option value="news">News</option><option value="web">Web</option><option value="video">Videos</option></select> Sort by:<select name="sortBy"><option value="date">Date</option><option value="relevance">Relevance</option></select> <label><input type="checkbox" name="intl">International</label>';
	sb1.innerHTML='<a href="http://cnn.com" class="cur"><img src="pictures/logos/cnn.png"></a><a onclick="switcher(12)"><img src="pictures/logos/msnbc.png"></a><a onclick="switcher(13)"><img src="pictures/logos/espn.png"></a><a onclick="switcher(14)"><img src="pictures/logos/nytimes.png"></a><a onclick="switcher(15)"><img src="pictures/logos/cnet.png"></a><a onclick="switcher(16)"><img src="pictures/logos/bbc.png"></a><a onclick="switcher(17)"><img src="pictures/logos/reuters.png"></a>';
	break;
case 12: f.action='http://www.msnbc.msn.com';
	sb2.innerHTML='<input type="hidden" name="id" value=11881780>'+b+'q'+e+'<br><input class="sub" type="submit" value="MSNBC search">';
	sb1.innerHTML='<a onclick="switcher(11)"><img src="pictures/logos/cnn.png"></a><a href="http://msnbc.msn.com" class="cur"><img src="pictures/logos/msnbc.png"></a><a onclick="switcher(13)"><img src="pictures/logos/espn.png"></a><a onclick="switcher(14)"><img src="pictures/logos/nytimes.png"></a><a onclick="switcher(15)"><img src="pictures/logos/cnet.png"></a><a onclick="switcher(16)"><img src="pictures/logos/bbc.png"></a><a onclick="switcher(17)"><img src="pictures/logos/reuters.png"></a>';
	break;
case 13: f.action='javascript:difsearch(13)';
	sb2.innerHTML=b+"searchString"+e+"<input type='hidden' name='fromForm' value='true'><br><input class='sub' type='submit' name='go' value='ESPN search'>Sport:<select name='sport'><option value=''>All</option><option value='afl&24'>AFL</option><option value='boxing&25'>Boxing</option><option value='college-baseball&26'>College Baseball</option><option value='college-basketball&27'>College Basketball</option><option value='college-football&28'>College Football</option><option value='cricket&30'>Cricket</option><option value='cycling&31'>Cycling</option><option value='figure-skating&37'>Figure Skating</option><option value='golf&38'>Golf</option><option value='gymnastics&39'>Gymnastics</option><option value='high-school-baseball&104'>High School Baseball</option><option value='high-school-football&105'>High School Football</option><option value='high-school-lacrosse&106'>High School Lacrosse</option><option value='high-school-soccer&107'>High School Soccer</option><option value='high-school-softball&108'>High School Softball</option><option value='high-school-sports&109'>High School Sports</option><option value='high-school-volleyball&110'>High School Volleyball</option><option value='lacrosse&41'>Lacrosse</option><option value='mlb&43'>MLB</option><option value='mma&44'>MMA</option><option value='nba&46'>NBA</option><option value='nfl&47'>NFL</option><option value='nhl&48'>NHL</option><option value='racing&49'>Racing</option><option value='rugby&50'>Rugby</option><option value='skiing&51'>Skiing</option><option value='soccer&52'>Soccer</option><option value='surfing&53'>Surfing</option><option value='swimming&54'>Swimming</option><option value='tennis&55'>Tennis</option><option value='track-and-field&56'>Track and Field</option><option value='womens-basketball&57'>Women's Basketball</option></ul></select> Type:<select name='type'><option value='' selected>All</option><option value='stories&5'>Stories</option><option value='photo&8'>Photos</option><option value='videos&6'>Videos</option><option value='audio&7'>Stories</option><option value='gear&116'>Gear</option></select>";
	sb1.innerHTML='<a onclick="switcher(11)"><img src="pictures/logos/cnn.png"></a><a onclick="switcher(12)"><img src="pictures/logos/msnbc.png"></a><a href="http://espn.go.com" class="cur"><img src="pictures/logos/espn.png"></a><a onclick="switcher(14)"><img src="pictures/logos/nytimes.png"></a><a onclick="switcher(15)"><img src="pictures/logos/cnet.png"></a><a onclick="switcher(16)"><img src="pictures/logos/bbc.png"></a><a onclick="switcher(17)"><img src="pictures/logos/reuters.png"></a>';
	break;
case 14: f.action='http://query.nytimes.com/search/sitesearch';
	sb2.innerHTML=b+'query'+e+'<br><input class="sub" type="submit" value="NY Times search">Time range:<select name="daterange"><option value="">Today</option><option value="">Past week</option><option value="">Past month</option><option value="">Past 90 days</option><option value="">Past year</option><option value="">Since 1981</option></select> Sort by:<select name="sort"><option value="closest">Closest</option><option value="newest">Newest</option><option value="oldest">Oldest</option></select>';
	sb1.innerHTML='<a onclick="switcher(11)"><img src="pictures/logos/cnn.png"></a><a onclick="switcher(12)"><img src="pictures/logos/msnbc.png"></a><a onclick="switcher(13)"><img src="pictures/logos/espn.png"></a><a href="http://nytimes.com" class="cur"><img src="pictures/logos/nytimes.png"></a><a onclick="switcher(15)"><img src="pictures/logos/cnet.png"></a><a onclick="switcher(16)"><img src="pictures/logos/bbc.png"></a><a onclick="switcher(17)"><img src="pictures/logos/reuters.png"></a>';
	break;
case 15: f.action='http://news.cnet.com/1770-5_3-0.html';
	sb2.innerHTML=b+'query'+e+'<br><input class="sub" type="submit" value="CNET search"><input type="hidden" name="rpp" value="30">Sort by:<select name="sort"><option value="" selected="selected">Relevance</option><option value="popularity asc" selected="selected">Most popular</option><option value="editorsStarRatingAndReviewDate desc">Editors rating</option><option value="userStarRatingAndReviewDate desc">User rating</option><option value="reviewDateAndPopularity desc">Review date</option><option value="lowPrice9 asc">Lowest price</option></select>';
	sb1.innerHTML='<a onclick="switcher(11)"><img src="pictures/logos/cnn.png"></a><a onclick="switcher(12)"><img src="pictures/logos/msnbc.png"></a><a onclick="switcher(13)"><img src="pictures/logos/espn.png"></a><a onclick="switcher(14)"><img src="pictures/logos/nytimes.png"></a><a href="http://cnet.com" class="cur"><img src="pictures/logos/cnet.png"></a><a onclick="switcher(16)"><img src="pictures/logos/bbc.png"></a><a onclick="switcher(17)"><img src="pictures/logos/reuters.png"></a>';
	break;
case 16: f.action='http://search.bbc.co.uk/search';
	sb2.innerHTML=b+'q'+e+'<br><input class="sub" type="submit" value="BBC search">Show:<select name="tab"><option value="all" checked>All</option><option value="ns">News & Sport</option><option value="tvradio">TV & Radio</option></select>';
	sb1.innerHTML='<a onclick="switcher(11)"><img src="pictures/logos/cnn.png"></a><a onclick="switcher(12)"><img src="pictures/logos/msnbc.png"></a><a onclick="switcher(13)"><img src="pictures/logos/espn.png"></a><a onclick="switcher(14)"><img src="pictures/logos/nytimes.png"></a><a onclick="switcher(15)"><img src="pictures/logos/cnet.png"></a><a href="http://bbc.co.uk" class="cur"><img src="pictures/logos/bbc.png"></a><a onclick="switcher(17)"><img src="pictures/logos/reuters.png"></a>';
	break;
case 17: f.action='http://search.us.reuters.com/query/';
	sb2.innerHTML=b+'q'+e+'<br><input class="sub" type="submit" value="Reuters search">';
	sb1.innerHTML='<a onclick="switcher(11)"><img src="pictures/logos/cnn.png"></a><a onclick="switcher(12)"><img src="pictures/logos/msnbc.png"></a><a onclick="switcher(13)"><img src="pictures/logos/espn.png"></a><a onclick="switcher(14)"><img src="pictures/logos/nytimes.png"></a><a onclick="switcher(15)"><img src="pictures/logos/cnet.png"></a><a onclick="switcher(16)"><img src="pictures/logos/bbc.png"></a><a href="http://search.us.reuters.com" class="cur"><img src="pictures/logos/reuters.png"></a>';
	break;
case 21: f.action='http://www.youtube.com/results';
	sb2.innerHTML=b+'search_query'+e+'<br><input class="sub" type="submit" value="YouTube search">Sort by:<select name="search_sort"><option value="video_date_uploaded">Newest</option><option value="video_date_uploaded_reverse">Oldest</option><option value="video_view_count">View count</option><option value="video_avg_rating">Rating</option><option value="" selected>Relevance</option></select> Type:<select name="search_type"><option value="" selected>All</option><option value="search_users">Users</option><option value="search_playlists">Playlists</option></select> Added:<select name="uploaded"><option value="d">Today</option><option value="w">This week</option><option value="m">This month</option><option value="" selected>Anytime</option></select>';
	sb1.innerHTML='<a href="http://youtube.com" class="cur"><img src="pictures/logos/youtube.png"></a><a onclick="switcher(22)"><img src="pictures/logos/hulu.png"></a><a onclick="switcher(23)"><img src="pictures/logos/veoh.png"></a><a onclick="switcher(24)"><img src="pictures/logos/megavideo.png"></a><a onclick="switcher(25)"><img src="pictures/logos/dailymotion.png"></a><a onclick="switcher(26)"><img src="pictures/logos/metacafe.png"></a><a onclick="switcher(27)"><img src="pictures/logos/watchmovies.png"></a>';
	break;
case 22: f.action='http://www.hulu.com/videos/search';
	sb2.innerHTML=b+'query'+e+'<br><input class="sub" type="submit" value="Hulu search">Sort by:<select name="sort_by"><option value="Relevance">Relevance</option><option value="popularity_today">Most Popular Today</option><option value="popularity_week">Most Popular This Week</option><option value="popularity_month">Most Popular This Month</option><option value="popularity" selected>Most Popular All Time</option><option value="air_date">Air Date</option><option value="pub_date">Date Added</option></select>';
	sb1.innerHTML='<a onclick="switcher(21)"><img src="pictures/logos/youtube.png"></a><a href="http://hulu.com" class="cur"><img src="pictures/logos/hulu.png"></b><a onclick="switcher(23)"><img src="pictures/logos/veoh.png"></a><a onclick="switcher(24)"><img src="pictures/logos/megavideo.png"></a><a onclick="switcher(25)"><img src="pictures/logos/dailymotion.png"></a><a onclick="switcher(26)"><img src="pictures/logos/metacafe.png"></a><a onclick="switcher(27)"><img src="pictures/logos/watchmovies.png"></a>';
	break;
case 23: f.action='javascript:difsearch(23)';
	sb2.innerHTML='<input type="hidden" name="type" value="v">'+b+'search'+e+'<br><input class="sub" type="submit" value="Veoh search">Sort by:<select name="s"><option value="">Relevance</option><option value="most viewed">Most viewed</option><option value="most recent">Most recent</option><option value="run length">Longest</option>';
	sb1.innerHTML='<a onclick="switcher(21)"><img src="pictures/logos/youtube.png"></a><a onclick="switcher(22)"><img src="pictures/logos/hulu.png"></a><a href="http://veoh.com" class="cur"><img src="pictures/logos/veoh.png"></a><a onclick="switcher(24)"><img src="pictures/logos/megavideo.png"></a><a onclick="switcher(25)"><img src="pictures/logos/dailymotion.png"></a><a onclick="switcher(26)"><img src="pictures/logos/metacafe.png"></a><a onclick="switcher(27)"><img src="pictures/logos/watchmovies.png"></a>';
	break;
case 24: f.action='http://www.megavideo.com';
	sb2.innerHTML='<input type="hidden" name="c" value="search">'+b+'s'+e+'<br><input class="sub" type="submit" value="Megavideo search">Sort by:<select name="sort"><option value="date">Date</option><option value="views">Views</option><option value="rating">Rating</option><option value="" selected>Relevance</option></select> Type:<select name="cat"><option value="" selected>All</option><option value="15">Animals</option><option value="1">Animations</option><option value="2">Automobiles</option><option value="23">Comedy</option><option value="24">Entertainment</option><option value="19">Locations</option><option value="10">Music</option><option value="25">News & Blogs</option><option value="22">People</option><option value="26">Science & Tech</option><option value="17">Sports</option><option value="20">Video Games</option></select>';
	sb1.innerHTML='<a onclick="switcher(21)"><img src="pictures/logos/youtube.png"></a><a onclick="switcher(22)"><img src="pictures/logos/hulu.png"></a><a onclick="switcher(23)"><img src="pictures/logos/veoh.png"></a><a href="http://megavideo.com" class="cur"><img src="pictures/logos/megavideo.png"></a><a onclick="switcher(25)"><img src="pictures/logos/dailymotion.png"></a><a onclick="switcher(26)"><img src="pictures/logos/metacafe.png"></a><a onclick="switcher(27)"><img src="pictures/logos/watchmovies.png"></a>';
	break;
case 25: f.action='javascript:difsearch(25)';
	sb2.innerHTML=b+'s'+e+'<br><input class="sub" type="submit" value="Dailymotion search">Sort by:<select name="sort"><option value="/relevance/featured/">Featured Videos</option><option value="/relevance/hd/">HD content</option><option value="/relevance/official/">Official Content</option><option value="/relevance/creative/">Creative Content</option><option value="/">Most Recent</option><option value="/relevance/" selected>By Relevance</option><option value="/commented/">Most Commented</option><option value="/visited/">Most Viewed</option><option value="/rated/">Best Rated</option></select> Type:<select name="type"><option value="">Videos</option><option value="/users">Users</option><option value="/groups">Groups</option></select>';
	sb1.innerHTML='<a onclick="switcher(21)"><img src="pictures/logos/youtube.png"></a><a onclick="switcher(22)"><img src="pictures/logos/hulu.png"></a><a onclick="switcher(23)"><img src="pictures/logos/veoh.png"></a><a onclick="switcher(24)"><img src="pictures/logos/megavideo.png"></a><a href="http://dailymotion.com" class="cur"><img src="pictures/logos/dailymotion.png"></a><a onclick="switcher(26)"><img src="pictures/logos/metacafe.png"></a><a onclick="switcher(27)"><img src="pictures/logos/watchmovies.png"></a>';
	break;
case 26: f.action='javascript:difsearch(26)';
	sb2.innerHTML=b+'s'+e+'<br><input class="sub" type="submit" value="Metacafe search">Sort by:<select name="sort"><option value="">Relevance</option><option value="newest">Newest</option><option value="most_popular">Most Popular</option></select> Category:<select name="cat"><option value="">All Videos</option><option value="art_and_animation">Art &amp; Animation</option><option value="comedy">Comedy</option><option value="cool_commercials">Cool Commercials</option><option value="entertainment">Entertainment</option><option value="how_to">How To</option><option value="music_and_dance">Music &amp; Dance</option><option value="news_and_events">News &amp; Events</option><option value="people_and_stories">People &amp; Stories</option><option value="pets_and_animals">Pets &amp; Animals</option><option value="science_and_tech">Science &amp; Tech</option><option value="sports">Sports</option><option value="travel_and_outdoors">Travel &amp; Outdoors</option><option value="video_games">Video Games</option><option value="wheels_and_wings">Wheels &amp; Wings</option><option value="other">Other</option><option value="adult">18+ Only</option></select>';
	sb1.innerHTML='<a onclick="switcher(21)"><img src="pictures/logos/youtube.png"></a><a onclick="switcher(22)"><img src="pictures/logos/hulu.png"></a><a onclick="switcher(23)"><img src="pictures/logos/veoh.png"></a><a onclick="switcher(24)"><img src="pictures/logos/megavideo.png"></a><a onclick="switcher(25)"><img src="pictures/logos/dailymotion.png"></a><a href="http://metacafe.com" class="cur"><img src="pictures/logos/metacafe.png"></a><a onclick="switcher(27)"><img src="pictures/logos/watchmovies.png"></a>';
	break;
case 27: f.action='javascript:difsearch(27)';
	sb2.innerHTML=b+'s'+e+'<br><input class="sub" type="submit" value="Watch-Movies search"><label><input type="radio" name="t" value="s" checked>Title</label> <label><input type="radio" name="t" value="tags">Tags</label>';
	sb1.innerHTML='<a onclick="switcher(21)"><img src="pictures/logos/youtube.png"></a><a onclick="switcher(22)"><img src="pictures/logos/hulu.png"></a><a onclick="switcher(23)"><img src="pictures/logos/veoh.png"></a><a onclick="switcher(24)"><img src="pictures/logos/megavideo.png"></a><a onclick="switcher(25)"><img src="pictures/logos/dailymotion.png"></a><a onclick="switcher(26)"><img src="pictures/logos/metacafe.png"></a><a href="http://movies-links.tv" class="cur"><img src="pictures/logos/watchmovies.png"></a>';
	break;
case 31: f.action='javascript:difsearch(31)';
	sb2.innerHTML=b+'q'+e+'<br><input class="sub" type="submit" value="Photobucket search">Sort by:<select name="sortby"><option value="popular" selected>Popular</option><option value="sevendaysview">Most viewed</option><option value="totalcomment">Most commented</option></select>';
	sb1.innerHTML='<a href="http://photobucket.com" class="cur"><img src="pictures/logos/photobucket.png"></a><a onclick="switcher(32)"><img src="pictures/logos/flickr.png"></a><a onclick="switcher(33)"><img src="pictures/logos/deviantart.png"></a><a onclick="switcher(34)"><img src="pictures/logos/pixsy.png"></a><a onclick="switcher(35)"><img src="pictures/logos/picasa.png"></a><a onclick="switcher(36)"><img src="pictures/logos/smugmug.png"></a><a onclick="switcher(37)"><img src="pictures/logos/snapixel.png"></a>';
	break;
case 32: f.action='http://www.flickr.com/search/';
	sb2.innerHTML=b+'q'+e+'<br><input class="sub" type="submit" value="Flickr search">Sort by:<select name="s"><option value="">Most relevant</option><option value="rec">Most recent</option><option value="int">Most interesting</option></select> Type:<select name="mt"><option value="">All</option><option value="photos">Photos</option><option value="videos">Videos</option></select><label><input name="z" type="radio" value="" checked>Details view</labe> <label><input name="z" type="radio" value="t">Thumbnail view</label><input type="hidden" name="adv" value="1">';
	sb1.innerHTML='<a onclick="switcher(31)"><img src="pictures/logos/photobucket.png"></a><a href="http://flickr.com" class="cur"><img src="pictures/logos/flickr.png"></a><a onclick="switcher(33)"><img src="pictures/logos/deviantart.png"></a><a onclick="switcher(34)"><img src="pictures/logos/pixsy.png"></a><a onclick="switcher(35)"><img src="pictures/logos/picasa.png"></a><a onclick="switcher(36)"><img src="pictures/logos/smugmug.png"></a><a onclick="switcher(37)"><img src="pictures/logos/snapixel.png"></a>';
	break;
case 33: 
	f.action='http://browse.deviantart.com/';
	sb2.innerHTML='<input type="hidden" name="qh" value="">'+b+'q'+e+'<input type="hidden" name="f" value="1" ><br><input class="sub" type="submit" value="deviantART search">Sort by:<select name="order"><option value="5">Newest</option><option value="9" selected>Popular</option></select>';
	sb1.innerHTML='<a onclick="switcher(31)"><img src="pictures/logos/photobucket.png"></a><a onclick="switcher(32)"><img src="pictures/logos/flickr.png"></a><a href="http://deviantart.com" class="cur"><img src="pictures/logos/deviantart.png"></a><a onclick="switcher(34)"><img src="pictures/logos/pixsy.png"></a><a onclick="switcher(35)"><img src="pictures/logos/picasa.png"></a><a onclick="switcher(36)"><img src="pictures/logos/smugmug.png"></a><a onclick="switcher(37)"><img src="pictures/logos/snapixel.png"></a>';
	break;
case 34: f.action='javascript:difsearch(34)';
	sb2.innerHTML=b+'q'+e+'<br><input class="sub" type="submit" value="pixsy search">Category:<select name="catid"><option value="">All</option><option value="36">Animals</option><option value="40">Animation/CGI</option><option value="2">Arts</option><option value="10">Blogs & Social Networks</option><option value="3">Business News</option><option value="9">Celebrities & Entertainment</option><option value="4">Health News</option><option value="26">Home & Garden</option><option value="15">Humor & Odd</option><option value="28">Life & Human Interest</option><option value="29">Movie Trailers</option><option value="25">Music</option><option value="5">National</option><option value="30">News - Education</option><option value="42">Photo Sharing</option><option value="22">Politics</option><option value="6">Science</option><option value="7">Sports</option><option value="23">Stock Photos</option><option value="8">Tech News</option><option value="37">Television</option><option value="21">Travel</option><option value="39">Viral Videos</option><option value="19">Wheels</option><option value="1">World News</option></select>';
	sb1.innerHTML='<a onclick="switcher(31)"><img src="pictures/logos/photobucket.png"></a><a onclick="switcher(32)"><img src="pictures/logos/flickr.png"></a><a onclick="switcher(33)"><img src="pictures/logos/deviantart.png"></a><a href="http://pixsy.com" class="cur"><img src="pictures/logos/pixsy.png"></a><a onclick="switcher(35)"><img src="pictures/logos/picasa.png"></a><a onclick="switcher(36)"><img src="pictures/logos/smugmug.png"></a><a onclick="switcher(37)"><img src="pictures/logos/snapixel.png"></a>';
	break;
case 35: f.action='http://picasaweb.google.com/lh/view';
	sb2.innerHTML=b+'q'+e+'<br><input class="sub" type="submit" value="Picasa search">Sort by:<select name="orderby"><option value="relevance" selected>Relevance</option><option value="date">Date</option></select> Size:<select name="imgsz"><option value="all" selected>All sizes</option><option value="very_small">Small</option><option value="small">Medium</option><option value="medium">Large</option><option value="large">Extra large</option></select>';
	sb1.innerHTML='<a onclick="switcher(31)"><img src="pictures/logos/photobucket.png"></a><a onclick="switcher(32)"><img src="pictures/logos/flickr.png"></a><a onclick="switcher(33)"><img src="pictures/logos/deviantart.png"></a><a onclick="switcher(34)"><img src="pictures/logos/pixsy.png"></a><a href="http://picasa.google.com" class="cur"><img src="pictures/logos/picasa.png"></a><a onclick="switcher(36)"><img src="pictures/logos/smugmug.png"></a><a onclick="switcher(37)"><img src="pictures/logos/snapixel.png"></a>';
	break;
case 36: f.action='http://smugmug.com/search/index.mg#photos';
	sb2.innerHTML=b+'searchWords'+e+'<br><input class="sub" type="submit" value="Smugmug search"><input type="hidden" name="searchType" value="global">';
	sb1.innerHTML='<a onclick="switcher(31)"><img src="pictures/logos/photobucket.png"></a><a onclick="switcher(32)"><img src="pictures/logos/flickr.png"></a><a onclick="switcher(33)"><img src="pictures/logos/deviantart.png"></a><a onclick="switcher(34)"><img src="pictures/logos/pixsy.png"></a><a onclick="switcher(35)"><img src="pictures/logos/picasa.png"></a><a href="http://smugmug.com" class="cur"><img src="pictures/logos/smugmug.png"></a><a onclick="switcher(37)"><img src="pictures/logos/snapixel.png"></a>';
	break;
case 37: f.action='http://www.snapixel.com/search/images';
	sb2.innerHTML=b+'q'+e+'<br><input class="sub" type="submit" value="Snapixel search"><input type="hidden" name="w" value="fulltext">';
	sb1.innerHTML='<a onclick="switcher(31)"><img src="pictures/logos/photobucket.png"></a><a onclick="switcher(32)"><img src="pictures/logos/flickr.png"></a><a onclick="switcher(33)"><img src="pictures/logos/deviantart.png"></a><a onclick="switcher(34)"><img src="pictures/logos/pixsy.png"></a><a onclick="switcher(35)"><img src="pictures/logos/picasa.png"></a><a onclick="switcher(36)"><img src="pictures/logos/smugmug.png"></a><a href="http://www.snapixel.com" class="cur"><img src="pictures/logos/snapixel.png"></a>';
	break;
case 41: f.action='http://www.kongregate.com/search';
	sb2.innerHTML=b+'q'+e+'<br><input class="sub" type="submit" value="Kongregate search">';
	sb1.innerHTML='<a href="http://kongregate.com" class="cur"><img src="pictures/logos/kongregate.png"></a><a onclick="switcher(42)"><img src="pictures/logos/miniclip.png"></a><a onclick="switcher(43)"><img src="pictures/logos/shockwave.png"></a><a onclick="switcher(44)"><img src="pictures/logos/pogo.png"></a><a onclick="switcher(45)"><img src="pictures/logos/addictinggames.png"></a><a onclick="switcher(46)"><img src="pictures/logos/msngames.png"></a><a onclick="switcher(47)"><img src="pictures/logos/yahoogames.png"></a>';
	break;
case 42: f.action='http://www.miniclip.com/php/en/search_results.php';
	sb2.innerHTML=b+'query'+e+'<br><input class="sub" type="submit" value="Miniclip search">';
	sb1.innerHTML="<a onclick='switcher(41)'><img src='pictures/logos/kongregate.png'></a><a href='http://miniclip.com' class='cur'><img src='pictures/logos/miniclip.png'></a><a onclick='switcher(43)'><img src='pictures/logos/shockwave.png'></a><a onclick='switcher(44)'><img src='pictures/logos/pogo.png'></a><a onclick='switcher(45)'><img src='pictures/logos/addictinggames.png'></a><a onclick='switcher(46)'><img src='pictures/logos/msngames.png'></a><a onclick='switcher(47)'><img src='pictures/logos/yahoogames.png'></a>";
	break;
case 43: f.action='http://www.shockwave.com/search.jsp';
	sb2.innerHTML=b+'q'+e+'<br><input class="sub" type="submit" value="Shockwave search">';
	sb1.innerHTML='<a onclick="switcher(41)"><img src="pictures/logos/kongregate.png"></a><a onclick="switcher(42)"><img src="pictures/logos/miniclip.png"></a><a href="http://shockwave.com" class="cur"><img src="pictures/logos/shockwave.png"></a><a onclick="switcher(44)"><img src="pictures/logos/pogo.png"></a><a onclick="switcher(45)"><img src="pictures/logos/addictinggames.png"></a><a onclick="switcher(46)"><img src="pictures/logos/msngames.png"></a><a onclick="switcher(47)"><img src="pictures/logos/yahoogames.png"></a>';
	break;
case 44: f.action='http://www.pogo.com/misc/gamesearch/gamesearch.do';
	sb2.innerHTML=b+'pogoword'+e+'<br><input class="sub" type="submit" value="Pogo search">';
	sb1.innerHTML='<a onclick="switcher(41)"><img src="pictures/logos/kongregate.png"></a><a onclick="switcher(42)"><img src="pictures/logos/miniclip.png"></a><a onclick="switcher(43)"><img src="pictures/logos/shockwave.png"></a><a href="http://pogo.com" class="cur"><img src="pictures/logos/pogo.png"></a><a onclick="switcher(45)"><img src="pictures/logos/addictinggames.png"></a><a onclick="switcher(46)"><img src="pictures/logos/msngames.png"></a><a onclick="switcher(47)"><img src="pictures/logos/yahoogames.png"></a>';
	break;
case 45: f.action='http://www.addictinggames.com/profile/searchPage.php';
	sb2.innerHTML=b+'text'+e+'<br><input type="hidden" name="pageAction" value="search"><input type="hidden" name="type" value="games"><input class="sub" type="submit" value="AddictingGames search">';
	sb1.innerHTML='<a onclick="switcher(41)"><img src="pictures/logos/kongregate.png"></a><a onclick="switcher(42)"><img src="pictures/logos/miniclip.png"></a><a onclick="switcher(43)"><img src="pictures/logos/shockwave.png"></a><a onclick="switcher(44)"><img src="pictures/logos/pogo.png"></a><a href="http://addictinggames.com" class="cur"><img src="pictures/logos/addictinggames.png"></a><a onclick="switcher(46)"><img src="pictures/logos/msngames.png"></a><a onclick="switcher(47)"><img src="pictures/logos/yahoogames.png"></a>';
	break;
case 46: f.action='http://zone.msn.com/en/utility/SearchGame/GameTextSearch.aspx';
	sb2.innerHTML=b+'q'+e+'<br><input class="sub" type="submit" value="MSN Games search">';
	sb1.innerHTML='<a onclick="switcher(41)"><img src="pictures/logos/kongregate.png"></a><a onclick="switcher(42)"><img src="pictures/logos/miniclip.png"></a><a onclick="switcher(43)"><img src="pictures/logos/shockwave.png"></a><a onclick="switcher(44)"><img src="pictures/logos/pogo.png"></a><a onclick="switcher(45)"><img src="pictures/logos/addictinggames.png"></a><a href="http://games.msn.com" class="cur"><img src="pictures/logos/msngames.png"></a><a onclick="switcher(47)"><img src="pictures/logos/yahoogames.png"></a>';
	break;
case 47: f.action='http://search.yahoo.com/search';
	sb2.innerHTML=b+'q'+e+'<br><input type="hidden" name="vs" value="get.games.yahoo.com"><input class="sub" type="submit" value="Yahoo! Games search">';
	sb1.innerHTML='<a onclick="switcher(41)"><img src="pictures/logos/kongregate.png"></a><a onclick="switcher(42)"><img src="pictures/logos/miniclip.png"></a><a onclick="switcher(43)"><img src="pictures/logos/shockwave.png"></a><a onclick="switcher(44)"><img src="pictures/logos/pogo.png"></a><a onclick="switcher(45)"><img src="pictures/logos/addictinggames.png"></a><a onclick="switcher(46)"><img src="pictures/logos/msngames.png"></a><a href="http://games.yahoo.com" class="cur"><img src="pictures/logos/yahoogames.png"></a>';
	break;
case 51: f.action='http://www.thepiratebay.org/s/';
	sb2.innerHTML=b+'q'+e+'<input type="hidden" name="page" value="0" /><input type="hidden" name="orderby" value="7"><br><input class="sub" type="submit" value="ThePirateBay search"><label><input id="all" name="all" type="checkbox" checked onchange="miscer(1)">All</label> <label><input name="audio" type="checkbox" onchange="document.f.all.checked=false">Audio</label> <label><input name="video" type="checkbox" onchange="document.f.all.checked=false">Video</label> <label><input name="apps" type="checkbox" onchange="document.f.all.checked=false">Apps</label> <label><input name="games" type="checkbox" onchange="document.f.all.checked=false">Games</label> <label><input name="other" id="other" type="checkbox" onchange="document.f.all.checked=false">Other</label>';
	sb1.innerHTML='<a href="http://thepiratebay.org" class="cur"><img src="pictures/logos/tpb.png"></a><a onclick="switcher(52)"><img src="pictures/logos/btjunkie.png"></a><a onclick="switcher(53)"><img src="pictures/logos/torrentreactor.png"></a><a onclick="switcher(54)"><img src="pictures/logos/isohunt.png"></a><a onclick="switcher(55)"><img src="pictures/logos/mininova.png"></a><a onclick="switcher(56)"><img src="pictures/logos/vertor.png"></a><a onclick="switcher(57)"><img src="pictures/logos/torrentroot.png"></a>';
	break;
case 52: f.action='http://www.btjunkie.org/search';
	sb2.innerHTML=b+'q'+e+'<input type="hidden" name="f" value="1"><br><input class="sub" type="submit" value="btjunkie search"><label><input type="checkbox" name="f" checked>File Scan</label>';
	sb1.innerHTML='<a onclick="switcher(51)"><img src="pictures/logos/tpb.png"></a><a href="http://btjunkie.org" class="cur"><img src="pictures/logos/btjunkie.png"></a><a onclick="switcher(53)"><img src="pictures/logos/torrentreactor.png"></a><a onclick="switcher(54)"><img src="pictures/logos/isohunt.png"></a><a onclick="switcher(55)"><img src="pictures/logos/mininova.png"></a><a onclick="switcher(56)"><img src="pictures/logos/vertor.png"></a><a onclick="switcher(57)"><img src="pictures/logos/torrentroot.png"></a>';
	break;
case 53: f.action='http://www.torrentreactor.net/search.php';
	sb2.innerHTML=b+'words'+e+'<input type="hidden" name="search"><input type="hidden" name="cid" value="0"><br><input class="sub" type="submit" value="Torrent Reactor search">Sort by:<select name="orderby"><option value="relevance">Relevance</option><option value="a.id">Date</option><option value="a.name">Name</option><option value="a.sid">Category</option><option value="a.size">Size</option><option value="a.dl">Downloads</option><option value="a.seeds" selected>Seeds</option></select><select name="asc"><option value="1" selected="selected">Descending</option><option value="0" >Ascending</option></select> Category:<select name="cid"><option value="" selected>Any</option><option value="1">Anime</option><option value="2">Software</option><option value="3">Games</option><option value="5">Movies</option><option value="6">Music</option><option value="7">Other</option><option value="8">TV Shows</option></select>';
	sb1.innerHTML='<a onclick="switcher(51)"><img src="pictures/logos/tpb.png"></a><a onclick="switcher(52)"><img src="pictures/logos/btjunkie.png"></a><a href="http://torrentreactor.net" class="cur"><img src="pictures/logos/torrentreactor.png"></a><a onclick="switcher(54)"><img src="pictures/logos/isohunt.png"></a><a onclick="switcher(55)"><img src="pictures/logos/mininova.png"></a><a onclick="switcher(56)"><img src="pictures/logos/vertor.png"></a><a onclick="switcher(57)"><img src="pictures/logos/torrentroot.png"></a>';
	break;
case 54: f.action='http://isohunt.com/torrents/';
	sb2.innerHTML=b+'ihq'+e+'<br><input class="sub" type="submit" value="ISOHunt search">Sort by:<select name="ihs1"><option value=1>Name</option><option value=2 selected>Seeders</option><option value=3>Leechers</option><option value=4>Size</option><option value=5>Category</option><option value=6>Age</option></select> Category:<select name="iht"><option value=-1 selected>All</option><option value=1>Video</option><option value=3>TV</option><option value=2>Audio</option><option value=10>Music Video</option><option value=4>Games</option><option value=5>Applications</option><option value=6>Pictures</option><option value=7>Anime</option><option value=8>Comics</option><option value=9>Books</option><option value=0>Misc.</option><option value=11>Unclassified</option></select> Age:<select name="age"><option value=0>No limit</option><option value=1><1 day</option><option value=7><7 day</option><option value=31><1 month</option><option value=183><6 months</option></select>';
	sb1.innerHTML='<a onclick="switcher(51)"><img src="pictures/logos/tpb.png"></a><a onclick="switcher(52)"><img src="pictures/logos/btjunkie.png"></a><a onclick="switcher(53)"><img src="pictures/logos/torrentreactor.png"></a><a href="http://isohunt.com" class="cur"><img src="pictures/logos/isohunt.png"></a><a onclick="switcher(55)"><img src="pictures/logos/mininova.png"></a><a onclick="switcher(56)"><img src="pictures/logos/vertor.png"></a><a onclick="switcher(57)"><img src="pictures/logos/torrentroot.png"></a>';
	break;
case 55: f.action='http://www.mininova.org/search/';
	sb2.innerHTML=b+'search'+e+'<br><input class="sub" type="submit" value="Mininova search">Sort by:<select id="sort" onchange="javascript:difsearch(55)"><option value="added">Added</option><option value="cat">Category</option><option value="name">Name</option><option value="size">Size</option><option value="seeds">Seeds</option><option value="leech">Leechers</option></select> Category:<select name="cat"><option value="0">All torrents</option><option value="10">Featured</option><option value="1">Anime</option><option value="2">Books</option><option value="3">Games</option><option value="4">Movies</option><option value="5">Music</option><option value="6">Pictures</option><option value="7">Software</option><option value="8">TV Shows</option><option value="9">Other</option></select>';
	sb1.innerHTML='<a onclick="switcher(51)"><img src="pictures/logos/tpb.png"></a><a onclick="switcher(52)"><img src="pictures/logos/btjunkie.png"></a><a onclick="switcher(53)"><img src="pictures/logos/torrentreactor.png"></a><a onclick="switcher(54)"><img src="pictures/logos/isohunt.png"></a><a href="http://mininova.org" class="cur"><img src="pictures/logos/mininova.png"></a><a onclick="switcher(56)"><img src="pictures/logos/vertor.png"></a><a onclick="switcher(57)"><img src="pictures/logos/torrentroot.png"></a>';
	break;
case 56: f.action='http://www.vertor.com/index.php';
	sb2.innerHTML=b+'words'+e+'<br><input type="hidden" name="mod" value="search"><input type="hidden" name="search" value=""><input class="sub" type="submit" value="VerTor search">Sort by:<select name="orderby" ><option value="relevance">Relevance</option><option value="a.cid" >Category</option><option value="a.tid">Date</option><option value="a.name">Name</option><option value="a.size">Size</option><option value="a.dl" >Downloads</option><option value="a.seeds" selected>Seeds</option></select><select name="asc"><option value="1">Ascending</option><option value="0" selected>Descending</option></select> Category:<select name="cid"><option value="" selected>Any</option><option value="1">Anime</option><option value="2">Software</option><option value="3">Games</option><option value="5">Movies</option><option value="6">Music</option><option value="7">Other</option><option value="8">Series/TV&nbsp;Shows</option></select>';
	sb1.innerHTML='<a onclick="switcher(51)"><img src="pictures/logos/tpb.png"></a><a onclick="switcher(52)"><img src="pictures/logos/btjunkie.png"></a><a onclick="switcher(53)"><img src="pictures/logos/torrentreactor.png"></a><a onclick="switcher(54)"><img src="pictures/logos/isohunt.png"></a><a onclick="switcher(55)"><img src="pictures/logos/mininova.png"></a><a href="http://vertor.com" class="cur"><img src="pictures/logos/vertor.png"></a><a onclick="switcher(57)"><img src="pictures/logos/torrentroot.png"></a>';
	break;
case 57: f.action='javascript:difsearch(57);';
	sb2.innerHTML=b+'search'+e+'<br><input class="sub" type="submit" value="Torrent Root search">Site:<select name="site"><option value="Iso Hunt">Iso Hunt</option><option value="BT Junkie">BT Junkie</option><option value="MiniNova">MiniNova</option><option value="Vertor">Vertor</option><option value="GPirate">GPirate</option><option value="Torrent Portal">Torrent Portal</option><option value="Torrent Box">Torrent Box</option><option value="Seed Peer">Seed Peer</option><option value="Full dls">Full dls</option>';
	sb1.innerHTML='<a onclick="switcher(51)"><img src="pictures/logos/tpb.png"></a><a onclick="switcher(52)"><img src="pictures/logos/btjunkie.png"></a><a onclick="switcher(53)"><img src="pictures/logos/torrentreactor.png"></a><a onclick="switcher(54)"><img src="pictures/logos/isohunt.png"></a><a onclick="switcher(55)"><img src="pictures/logos/mininova.png"></a><a onclick="switcher(56)"><img src="pictures/logos/vertor.png"></a><a href="http://torrentroot.com" class="cur"><img src="pictures/logos/torrentroot.png"></a>';
	break;
case 61: f.action='javascript:difsearch(61)';
	sb2.innerHTML=b+"sf"+e+"<input type=hidden name='searchtype' value='downloads'><input type='hidden' name='rpp' value=30><br><input class='sub' type='submit' value='Download.com search'>Sort by:<select name='sort'><option value='' selected>Relevance</option><option value='popularity+asc'>Most popular</option><option value='dateAdded+asc'>Date added</option><option value='productName+asc'>Product name</option><option value='edRating4+asc'>Editors' rating</option><option value='uoRating4+asc'>User rating</option><option value='totallw4+asc'>Downloads last week</option><option value='totaldl4+asc'>Total downloads</option></select> License:<select name='l'><option value=''>Any</option><option value='Free'>Free</option><option value='Free to try'>Free to try</option><option value='Purchase'>Purchase</option><option value='Update'>Update</option></select>";		sb1.innerHTML='<b><img src="pictures/logos/download.png"></b><a onclick="switcher(62)"><img src="pictures/logos/rapidshare.png"></a><a onclick="switcher(63)"><img src="pictures/logos/googlemp3.png"></a>';
	sb1.innerHTML='<a href="http://download.com" class="cur"><img src="pictures/logos/download.png"></a><a onclick="switcher(62)"><img src="pictures/logos/rapidshare.png"></a><a onclick="switcher(63)"><img src="pictures/logos/googlemp3.png"></a><a onclick="switcher(64)"><img src="pictures/logos/filehippo.png"></a><a onclick="switcher(65)"><img src="pictures/logos/sourceforge.png"></a><a onclick="switcher(66)"><img src="pictures/logos/tucows.png"></a><a onclick="switcher(67)"><img src="pictures/logos/zdnet.png"></a>';
	break;
case 62: f.action='http://www.filecrop.com/search.php';
	sb2.innerHTML='<input type=hidden name=opt_t value=1><input type=hidden name=ref value="searchbox">'+b+'w'+e+'<br><input class="sub" type="submit" value="Rapidshare search"><label><input type="checkbox" name="upserver[]" value="mu.com" checked>Megaupload</label> <label><input type="checkbox" name="upserver[]" value="rs.com" checked>Rapidshare</label>';
	sb1.innerHTML='<a onclick="switcher(61)"><img src="pictures/logos/download.png"></a><a href="http://rapidshare.com" class="cur"><img src="pictures/logos/rapidshare.png"></a><a onclick="switcher(63)"><img src="pictures/logos/googlemp3.png"></a><a onclick="switcher(64)"><img src="pictures/logos/filehippo.png"></a><a onclick="switcher(65)"><img src="pictures/logos/sourceforge.png"></a><a onclick="switcher(66)"><img src="pictures/logos/tucows.png"></a><a onclick="switcher(67)"><img src="pictures/logos/zdnet.png"></a>';
	break;
case 63: f.action='javascript:difsearch(63)';
	sb2.innerHTML=b+'q'+e+'<br><input class="sub" type="submit" value="Google file search"><label><input type="radio" name="type" value=1 checked>Music</label> <label><input type="radio" name="type" value=2>Video</label> <label><input type="radio" name="type" value=3>eBook</label> <label><input type="radio" name="type" value=4>RAR/ZIP</label> <label><input type="radio" name="type" value=5>Torrent</label>';
	sb1.innerHTML='<a onclick="switcher(61)"><img src="pictures/logos/download.png"></a><a onclick="switcher(62)"><img src="pictures/logos/rapidshare.png"></a><a href="http://googlemp3.com" class="cur"><img src="pictures/logos/googlemp3.png"></a><a onclick="switcher(64)"><img src="pictures/logos/filehippo.png"></a><a onclick="switcher(65)"><img src="pictures/logos/sourceforge.png"></a><a onclick="switcher(66)"><img src="pictures/logos/tucows.png"></a><a onclick="switcher(67)"><img src="pictures/logos/zdnet.png"></a>';
	break;
case 64: f.action='http://www.filehippo.com/search';
	sb2.innerHTML=b+'q'+e+'<br><input class="sub" type="submit" value="FileHippo search">';
	sb1.innerHTML='<a onclick="switcher(61)"><img src="pictures/logos/download.png"></a><a onclick="switcher(62)"><img src="pictures/logos/rapidshare.png"></a><a onclick="switcher(63)"><img src="pictures/logos/googlemp3.png"></a><a href="http://filehippo.com" class="cur"><img src="pictures/logos/filehippo.png"></a><a onclick="switcher(65)"><img src="pictures/logos/sourceforge.png"></a><a onclick="switcher(66)"><img src="pictures/logos/tucows.png"></a><a onclick="switcher(67)"><img src="pictures/logos/zdnet.png"></a>';
	break;
case 65: f.action='http://sourceforge.net/search/';
	sb2.innerHTML=b+'words'+e+'<br><input class="sub" type="submit" value="SourceForge search"><input type="hidden" name="type_of_search" value="soft"><input type="hidden" name="limit" value="100">';
	sb1.innerHTML='<a onclick="switcher(61)"><img src="pictures/logos/download.png"></a><a onclick="switcher(62)"><img src="pictures/logos/rapidshare.png"></a><a onclick="switcher(63)"><img src="pictures/logos/googlemp3.png"></a><a onclick="switcher(64)"><img src="pictures/logos/filehippo.png"></a><a href="http://sourceforge.net" class="cur"><img src="pictures/logos/sourceforge.png"></a><a onclick="switcher(66)"><img src="pictures/logos/tucows.png"></a><a onclick="switcher(67)"><img src="pictures/logos/zdnet.png"></a>';
	break;
case 66: f.action='http://www.tucows.com/search.html';
	sb2.innerHTML=b+'search_terms'+e+'<br><input class="sub" type="submit" value="Tucows search">Platform:<select name="search_scope"><option value="win">Windows</option><option value="mac">Mac</option><option value="lin">Linux</option><option value="web">Web 2.0</option><option value="pda">Mobile</option></select> Type:<select name="search_type"><option value="all">All</option><option value="soft">Software</option><option value="sol">Tutorial</option></select>';
	sb1.innerHTML='<a onclick="switcher(61)"><img src="pictures/logos/download.png"></a><a onclick="switcher(62)"><img src="pictures/logos/rapidshare.png"></a><a onclick="switcher(63)"><img src="pictures/logos/googlemp3.png"></a><a onclick="switcher(64)"><img src="pictures/logos/filehippo.png"></a><a onclick="switcher(65)"><img src="pictures/logos/sourceforge.png"></a><a href="http://tucows.com" class="cur"><img src="pictures/logos/tucows.png"></a><a onclick="switcher(67)"><img src="pictures/logos/zdnet.png"></a>';
	break;
case 67: f.action='http://downloads.zdnet.com/search.aspx';
	sb2.innerHTML=b+'q'+e+'<br><input class="sub" type="submit" value="ZDNet search">';
	sb1.innerHTML='<a onclick="switcher(61)"><img src="pictures/logos/download.png"></a><a onclick="switcher(62)"><img src="pictures/logos/rapidshare.png"></a><a onclick="switcher(63)"><img src="pictures/logos/googlemp3.png"></a><a onclick="switcher(64)"><img src="pictures/logos/filehippo.png"></a><a onclick="switcher(65)"><img src="pictures/logos/sourceforge.png"></a><a onclick="switcher(66)"><img src="pictures/logos/tucows.png"></a><a href="http://zdnet.com" class="cur"><img src="pictures/logos/zdnet.png"></a>';
	break;
case 71: f.action='http://shop.ebay.com/';
	sb2.innerHTML=b+'_nkw'+e+'<br><input class="sub" type="submit" value="eBay search">Sort by:<select name="_sop"><option value="1">Ending first</option><option value="10">Newest listed</option><option value="15">Lowest price</option><option value="16">Highest price</option><option value="7">Nearest first</option><option value="8">Paypal first</option><option value="12" selected>Best match</option><option value="17">Category</option></select> Category:<select name="_sacat"><option value="0" selected>All Categories</option><option value="20081">Antiques</option><option value="550">Art</option><option value="2984">Baby</option><option value="267">Books</option><option value="12576">Business &amp; Industrial</option><option value="625">Cameras &amp; Photo</option><option value="15032">Cell Phones &amp; PDAs</option><option value="11450">Clothing, Shoes &amp; Accessories</option><option value="11116">Coins &amp; Paper Money</option><option value="1">Collectibles</option><option value="58058">Computers &amp; Networking</option><option value="14339">Crafts</option><option value="237">Dolls &amp; Bears</option><option value="11232">DVDs &amp; Movies</option><option value="6000">eBay Motors</option><option value="293">Electronics</option><option value="45100">Entertainment Memorabilia</option><option value="31411">Gift Certificates</option><option value="26395">Health &amp; Beauty</option><option value="11700">Home &amp; Garden</option><option value="281">Jewelry &amp; Watches</option><option value="11233">Music</option><option value="619">Musical Instruments</option><option value="1281">Pet Supplies</option><option value="870">Pottery &amp; Glass</option><option value="10542">Real Estate</option><option value="316">Specialty Services</option><option value="382">Sporting Goods</option><option value="64482">Sports Mem, Cards &amp; Fan Shop</option><option value="260">Stamps</option><option value="1305">Tickets</option><option value="220">Toys &amp; Hobbies</option><option value="3252">Travel</option><option value="1249">Video Games</option><option value="99">Everything Else</option></select>';
	sb1.innerHTML='<a href="http://ebay.com" class="cur"><img src="pictures/logos/ebay.png"></a><a onclick="switcher(72)"><img src="pictures/logos/amazon.png"></a><a onclick="switcher(73)"><img src="pictures/logos/overstock.png"></a><a onclick="switcher(74)"><img src="pictures/logos/newegg.png"></a><a onclick="switcher(75)"><img src="pictures/logos/dealtime.png"></a><a onclick="switcher(76)"><img src="pictures/logos/pricegrabber.png"></a><a onclick="switcher(77)"><img src="pictures/logos/stubhub.png"></a>';
	break;
case 72: f.action='http://www.amazon.com/s/ref=nb_ss_gw';
	sb2.innerHTML=b+'keywords'+e+'<br><input class="sub" type="submit" value="Amazon search">Category:<select name="url"><option value="search-alias=aps" selected>All Departments</option><option value="search-alias=apparel">Apparel &amp; Accessories</option><option value="search-alias=automotive">Automotive</option><option value="search-alias=baby-products">Baby</option><option value="search-alias=beauty">Beauty</option><option value="search-alias=stripbooks">Books</option><option value="search-alias=wireless-aps">Cell Phones &amp; Service</option><option value="search-alias=electronics">Electronics</option><option value="search-alias=misc">Everything Else</option><option value="search-alias=gourmet">Gourmet Food</option><option value="search-alias=grocery">Grocery</option><option value="search-alias=hpc">Health &amp; Personal Care</option><option value="search-alias=garden">Home &amp; Garden</option><option value="search-alias=industrial">Industrial &amp; Scientific</option><option value="search-alias=jewelry">Jewelry</option><option value="search-alias=digital-text">Kindle Store</option><option value="search-alias=magazines">Magazines</option><option value="search-alias=dvd">Movies &amp; TV</option><option value="search-alias=digital-music">MP3 Downloads</option><option value="search-alias=popular">Music</option><option value="search-alias=mi">Musical Instruments</option><option value="search-alias=office-products">Office Products &amp; Supplies</option><option value="search-alias=shoes">Shoes</option><option value="search-alias=software">Software</option><option value="search-alias=sporting">Sports &amp; Outdoors</option><option value="search-alias=tools">Tools &amp; Home Improvement</option><option value="search-alias=toys-and-games">Toys &amp; Games</option><option value="search-alias=vhs">VHS</option><option value="search-alias=videogames">Video Games</option><option value="search-alias=amazontv">Video On Demand</option><option value="search-alias=watches">Watches</option></select>';
	sb1.innerHTML='<a onclick="switcher(71)"><img src="pictures/logos/ebay.png"></a><a href="http://amazon.com" class="cur"><img src="pictures/logos/amazon.png"></a><a onclick="switcher(73)"><img src="pictures/logos/overstock.png"></a><a onclick="switcher(74)"><img src="pictures/logos/newegg.png"></a><a onclick="switcher(75)"><img src="pictures/logos/dealtime.png"></a><a onclick="switcher(76)"><img src="pictures/logos/pricegrabber.png"></a><a onclick="switcher(77)"><img src="pictures/logos/stubhub.png"></a>';
	break;
case 73: f.action='http://www.overstock.com/search';
	sb2.innerHTML=b+'keywords'+e+'<br><input class="sub" type="submit" value="Overstock.com search">Sort by:<select name="sortOption"><option value="Relevance">Relevance</option><option value="Top Sellers">Top Sellers</option><option value="Review Ratings">Review Ratings</option><option value="Name">Name</option><option value="Lowest Price">Lowest Price</option><option value="Highest Price">Highest Price</option><option value="New Arrivals">New Arrivals</option></select><input type="hidden" name="resultsPerPage" value="120">';
	sb1.innerHTML='<a onclick="switcher(71)"><img src="pictures/logos/ebay.png"></a><a onclick="switcher(72)"><img src="pictures/logos/amazon.png"></a><a href="http://overstock.com" class="cur"><img src="pictures/logos/overstock.png"></a><a onclick="switcher(74)"><img src="pictures/logos/newegg.png"></a><a onclick="switcher(75)"><img src="pictures/logos/dealtime.png"></a><a onclick="switcher(76)"><img src="pictures/logos/pricegrabber.png"></a><a onclick="switcher(77)"><img src="pictures/logos/stubhub.png"></a>';
	break;
case 74: f.action='http://www.newegg.com/Product/ProductList.aspx';
	sb2.innerHTML=b+'Description'+e+'<br><input class="sub" type="submit" value="NewEgg search"><input type="hidden" name="Submit" value="ENE">Sort by:<select name="Order"><option value="1">Best Rating</option><option value="2">Lowest Price</option><option value="3">Highest Price</option><option value="4">Most Reviews</option><option value="8" selected>Best Match</option></select><input type="hidden" name="Pagesize" value="100">';
	sb1.innerHTML='<a onclick="switcher(71)"><img src="pictures/logos/ebay.png"></a><a onclick="switcher(72)"><img src="pictures/logos/amazon.png"></a><a onclick="switcher(73)"><img src="pictures/logos/overstock.png"></a><a href="http://newegg.com" class="cur"><img src="pictures/logos/newegg.png"></a><a onclick="switcher(75)"><img src="pictures/logos/dealtime.png"></a><a onclick="switcher(76)"><img src="pictures/logos/pricegrabber.png"></a><a onclick="switcher(77)"><img src="pictures/logos/stubhub.png"></a>';
	break;
case 75: f.action='http://www.dealtime.com/xCC';
	sb2.innerHTML=b+'SEO'+e+'<br><input class="sub" type="submit" value="DealTime search">Price range: $<input type="text" name="minPrice" class="w" size="1"> to $<input type="text" name="maxPrice" class="w" size="1"><input type="hidden" name="NPP" value="90">';
	sb1.innerHTML='<a onclick="switcher(71)"><img src="pictures/logos/ebay.png"></a><a onclick="switcher(72)"><img src="pictures/logos/amazon.png"></a><a onclick="switcher(73)"><img src="pictures/logos/overstock.png"></a><a onclick="switcher(74)"><img src="pictures/logos/newegg.png"></a><a href="http://dealtime.com" class="cur"><img src="pictures/logos/dealtime.png"></a><a onclick="switcher(76)"><img src="pictures/logos/pricegrabber.png"></a><a onclick="switcher(77)"><img src="pictures/logos/stubhub.png"></a>';
	break;
case 76: f.action='javascript:difsearch(76)';
	sb2.innerHTML=b+'s'+e+'<br><input class="sub" type="submit" value="PriceGrabber search">Category:<select name="cat"><option selected value="99">All Products</option><option value="27">Appliances</option><option value="26">Auto Parts</option><option value="14">Babies & Kids</option><option value="7">Books</option><option value="11">Cameras</option><option value="12">Clothing</option><option value="1">Computers</option><option value="2">Electronics</option><option value="48">Flowers & Gifts</option><option value="29">Furniture</option><option value="17">Grocery & Gourmet</option><option value="16">Health & Beauty</option><option value="30">Indoor Living</option><option value="47">Industrial Supply</option><option value="10">Jewelry & Watches</option><option value="23">Magazines</option><option value="4">Movies</option><option value="5">Music</option><option value="19">Musical Instruments</option><option value="9">Office</option><option value="28">Outdoor Living</option><option value="6">Software</option><option value="18">Sporting Goods</option><option value="8">Toys</option><option value="3">Video Games</option></select>';
	sb1.innerHTML='<a onclick="switcher(71)"><img src="pictures/logos/ebay.png"></a><a onclick="switcher(72)"><img src="pictures/logos/amazon.png"></a><a onclick="switcher(73)"><img src="pictures/logos/overstock.png"></a><a onclick="switcher(74)"><img src="pictures/logos/newegg.png"></a><a onclick="switcher(75)"><img src="pictures/logos/dealtime.png"></a><a href="http://pricegrabber.com" class="cur"><img src="pictures/logos/pricegrabber.png"></a><a onclick="switcher(77)"><img src="pictures/logos/stubhub.png"></a>';
	break;
case 77: f.action='http://www.stubhub.com/search/doSearch';
	sb2.innerHTML=b+'searchStr'+e+'<br><input class="sub" type="submit" value="StubHub search">';
	sb1.innerHTML='<a onclick="switcher(71)"><img src="pictures/logos/ebay.png"></a><a onclick="switcher(72)"><img src="pictures/logos/amazon.png"></a><a onclick="switcher(73)"><img src="pictures/logos/overstock.png"></a><a onclick="switcher(74)"><img src="pictures/logos/newegg.png"></a><a onclick="switcher(75)"><img src="pictures/logos/dealtime.png"></a><a onclick="switcher(77)"><img src="pictures/logos/pricegrabber.png"></a><a href="http://stubhub.com" class="cur"><img src="pictures/logos/stubhub.png"></a>';
	break;
case 81: f.action='javascript:difsearch(81)';
	sb2.innerHTML=b+'query'+e+'<br><input class="sub" type="submit" value="Newgrounds search" onClick="newgroundser()">Search by:<select id="type"><option value="title" selected>Title</option><option value="author">Author</option></select>';
	sb1.innerHTML="<a href='http://newgrounds.com' class='cur'><img src='pictures/logos/newgrounds.png'></a><a onclick='switcher(82)'><img src='pictures/logos/ebaums.png'></a><a onclick='switcher(83)'><img src='pictures/logos/stumbleupon.png'></a><a onclick='switcher(84)'><img src='pictures/logos/digg.png'></a><a onclick='switcher(85)'><img src='pictures/logos/delicious.png'></a><a onclick='switcher(86)'><img src='pictures/logos/twitter.png'></a><a onclick='switcher(87)'><img src='pictures/logos/lastfm.png'></a>";
	break;
case 82: f.action='javascript:difsearch(82)';
	sb2.innerHTML=b+"criteria"+e+"<br><input class='sub' type='submit' value='eBaums World search'>Category:<select name='mediatype'><option value=''>All Media</option><option value='audio'>Audio</option><option value='picture'>Picture</option><option value='flash'>Flash</option><option value='video'>Video</option><option value='soundboard'>Soundboard</option><option value='game'>Game</option><option value='joke'>Joke</option><option value='gallery'>Gallery</option><option value='elink'>Elink</option><option value='blog'>Blog</option><option value='ecard'>Ecard</option></select>";
	sb1.innerHTML="<a onclick='switcher(81)'><img src='pictures/logos/newgrounds.png'></a><a href='http://ebaumsworld.com' class='cur'><img src='pictures/logos/ebaums.png'></a><a onclick='switcher(83)'><img src='pictures/logos/stumbleupon.png'></a><a onclick='switcher(84)'><img src='pictures/logos/digg.png'></a><a onclick='switcher(85)'><img src='pictures/logos/delicious.png'></a><a onclick='switcher(86)'><img src='pictures/logos/twitter.png'></a><a onclick='switcher(87)'><img src='pictures/logos/lastfm.png'></a>";
	break;
case 83: f.action='http://www.stumbleupon.com/search';
	sb2.innerHTML=b+'q'+e+'<br><input class="sub" type="submit" value="StumbleUpon search">';
	sb1.innerHTML="<a onclick='switcher(81)'><img src='pictures/logos/newgrounds.png'></a><a onclick='switcher(82)'><img src='pictures/logos/ebaums.png'></a><a href='http://stumbleupon.com' class='cur'><img src='pictures/logos/stumbleupon.png'></a><a onclick='switcher(84)'><img src='pictures/logos/digg.png'></a><a onclick='switcher(85)'><img src='pictures/logos/delicious.png'></a><a onclick='switcher(86)'><img src='pictures/logos/twitter.png'></a><a onclick='switcher(87)'><img src='pictures/logos/lastfm.png'></a>";
	break;
case 84: f.action='http://digg.com/search';
	sb2.innerHTML=b+'s'+e+'<br><input class="sub" type="submit" value="Digg search">Sort by:<select name="sort"><option value="">Best match</option><option value="digg">Most dugg</option><option value="newest">Newest first</option></select> Digg count:<select name="fltdigg"><option value="">Any</option><option value="o5000">5000+</option><option value="o1000">1000+</option><option value="o500">500+</option><option value="o100">100+</option><option value="o50">50+</option></select> Age:<select name="fltdate"><option value="">All</option><option value="l1">1 day</option><option value="l7">1 week</option><option value="l30">1 month</option><option value="365days">1 year</option></select>';
	sb1.innerHTML="<a onclick='switcher(81)'><img src='pictures/logos/newgrounds.png'></a><a onclick='switcher(82)'><img src='pictures/logos/ebaums.png'></a><a onclick='switcher(83)'><img src='pictures/logos/stumbleupon.png'></a><a href='http://digg.com' class='cur'><img src='pictures/logos/digg.png'></a><a onclick='switcher(85)'><img src='pictures/logos/delicious.png'></a><a onclick='switcher(86)'><img src='pictures/logos/twitter.png'></a><a onclick='switcher(87)'><img src='pictures/logos/lastfm.png'></a>";
	break;
case 85: f.action='http://delicious.com/search';
	sb2.innerHTML=b+'q'+e+'<br><input class="sub" type="submit" value="Delicious search">';
	sb1.innerHTML="<a onclick='switcher(81)'><img src='pictures/logos/newgrounds.png'></a><a onclick='switcher(82)'><img src='pictures/logos/ebaums.png'></a><a onclick='switcher(83)'><img src='pictures/logos/stumbleupon.png'></a><a onclick='switcher(84)'><img src='pictures/logos/digg.png'></a><a href='http://delicious.com' class='cur'><img src='pictures/logos/delicious.png'></a><a onclick='switcher(86)'><img src='pictures/logos/twitter.png'></a><a onclick='switcher(87)'><img src='pictures/logos/lastfm.png'></a>";
	break;
case 86: f.action='http://twitter.com/search';
	sb2.innerHTML=b+'q'+e+'<br><input class="sub" type="submit" value="Twitter search">';
	sb1.innerHTML="<a onclick='switcher(81)'><img src='pictures/logos/newgrounds.png'></a><a onclick='switcher(82)'><img src='pictures/logos/ebaums.png'></a><a onclick='switcher(83)'><img src='pictures/logos/stumbleupon.png'></a><a onclick='switcher(84)'><img src='pictures/logos/digg.png'></a><a onclick='switcher(85)'><img src='pictures/logos/delicious.png'></a><a href='http://twitter.com' class='cur'><img src='pictures/logos/twitter.png'></a><a onclick='switcher(87)'><img src='pictures/logos/lastfm.png'></a>";
	break;
case 87: f.action='http://www.last.fm/search';
	sb2.innerHTML=b+'q'+e+'<br><input class="sub" type="submit" value="Last.fm search">Category:<select name="m"><option value="all">All</option><option value="artists">Artists</option><option value="albums">Albums</option><option value="tracks">Tracks</option><option value="lyrics">Lyrics</option><option value="event">Event</option><option value="tag">Tag</option><option value="user">User</option><option value="group">Group</option><option value="label">Label</option></select>';
	sb1.innerHTML="<a onclick='switcher(81)'><img src='pictures/logos/newgrounds.png'></a><a onclick='switcher(82)'><img src='pictures/logos/ebaums.png'></a><a onclick='switcher(83)'><img src='pictures/logos/stumbleupon.png'></a><a onclick='switcher(84)'><img src='pictures/logos/digg.png'></a><a onclick='switcher(85)'><img src='pictures/logos/delicious.png'></a><a onclick='switcher(86)'><img src='pictures/logos/twitter.png'></a><a href='http://last.fm' class='cur'><img src='pictures/logos/lastfm.png'></a>";
	break;
case 88: f.action='javascript:difsearch(88)';
	sb2.innerHTML=b+'q'+e+'<br><input class="sub" type="submit" value="Playlist search">Category:<select id="type"><option value="tracks">Tracks</option><option value="playlists">Playlists</option></select>';
	sb1.innerHTML="<a href='http://playlist.com' class='cur'><img src='pictures/logos/playlist.png'></a><a onclick='switcher(89)'><img src='pictures/logos/songmeanings.png'></a><a onclick='switcher(90)'><img src='pictures/logos/guitar.png'></a><a onclick='switcher(91)'><img src='pictures/logos/ign.png'></a><a onclick='switcher(92)'><img src='pictures/logos/blogger.png'></a><a onclick='switcher(93)'><img src='pictures/logos/weather.png'></a><a onclick='switcher(94)'><img src='pictures/logos/movies.png'></a>";
	break;
case 89: f.action='http://www.songmeanings.net/query/';
	sb2.innerHTML=b+'q'+e+'<br><input class="sub" type="submit" value="Songmeanings search">Search by:<select name="type"><option value="artists">Artist</option><option value="songs" selected>Song Title</option><option value="lyrics">Lyrics</option></select><input type="hidden" name="page" value="1"><input type="hidden" name="pp" value="50">';
	sb1.innerHTML="<a onclick='switcher(88)'><img src='pictures/logos/playlist.png'></a><a href='http://songmeanings.com' class='cur'><img src='pictures/logos/songmeanings.png'></a><a onclick='switcher(90)'><img src='pictures/logos/guitar.png'></a><a onclick='switcher(91)'><img src='pictures/logos/ign.png'></a><a onclick='switcher(92)'><img src='pictures/logos/blogger.png'></a><a onclick='switcher(93)'><img src='pictures/logos/weather.png'></a><a onclick='switcher(94)'><img src='pictures/logos/movies.png'></a>";
	break;
case 90: f.action='http://www.ultimate-guitar.com/search.php';
	sb2.innerHTML=b+'s'+e+'<input type="hidden" name="w" value="songs"><br><input class="sub" type="submit" name="go" value="Ultimate Guitar search">Category:<select name="w"><option value="songs">Song Names</option><option value="bands">Band Names</option><option>-------</option><option value="news">News</option><option value="reviews">Reviews</option><option value="interviews">Interviews</option><option value="columns">Columns</option><option value="lessons">Lessons</option><option value="tv">Videos</option><option>-------</option><option value="users">Users</option></select> Type:<select name="f"><option value="all">All</option><option value="tabs">Tabs</option><option value="bass">Bass</option><option value="chords">Chords</option><option value="power+tab">Power Tab</option><option value="guitar-pro">Guitar Pro</option><option value="video+lesson">Video Lesson</option></select>';
	sb1.innerHTML="<a onclick='switcher(88)'><img src='pictures/logos/playlist.png'></a><a onclick='switcher(89)'><img src='pictures/logos/songmeanings.png'></a><a href='http://ultimate-guitar.com' class='cur'><img src='pictures/logos/guitar.png'></a><a onclick='switcher(91)'><img src='pictures/logos/ign.png'></a><a onclick='switcher(92)'><img src='pictures/logos/blogger.png'></a><a onclick='switcher(93)'><img src='pictures/logos/weather.png'></a><a onclick='switcher(94)'><img src='pictures/logos/movies.png'></a>";
	break;
case 91: f.action='http://search.ign.com/products';
	sb2.innerHTML=b+'query'+e+'<br><input class="sub" type="submit" value="IGN search">Sort by:<select name="sort"><option value="date">Date</option><option value="relevance" selected>Relevance</option></select> Category:<select name="objtName"><option value="all" selected>All Products</option><option value="Game">Games</option><option value="Movie">Movies</option><option value="DVD">DVDs</option><option value="umd">PSP Movies</option><option value="TV">TV Series</option><option value="Stars">Stars</option><option value="Anime">Anime</option><option value="Music">Music</option><option value="Comics">Comics</option><option value="Car">Cars</option></select>';
	sb1.innerHTML="<a onclick='switcher(88)'><img src='pictures/logos/playlist.png'></a><a onclick='switcher(89)'><img src='pictures/logos/songmeanings.png'></a><a onclick='switcher(90)'><img src='pictures/logos/guitar.png'></a><a href='http://ign.com' class='cur'><img src='pictures/logos/ign.png'></a><a onclick='switcher(92)'><img src='pictures/logos/blogger.png'></a><a onclick='switcher(93)'><img src='pictures/logos/weather.png'></a><a onclick='switcher(94)'><img src='pictures/logos/movies.png'></a>";
	break;
case 92: f.action='http://blogsearch.google.com/blogsearch';
	sb2.innerHTML=b+'as_q'+e+'<br><input class="sub" type="submit" value="Blogger search"><select name="bl_url"><option value="blogspot.com">Blogspot</option><option value="spaces.live.com">MSN Spaces</option><option value="opendiary.com">Open Diary</option><option value="skyrock.com">Skyrock</option><option value="tumblr.com">Tumblr</option><option value="typepad.com">TypePad</option><option value="vox.com">Vox</option><option value="wordpress.com">Wordpress</option><option value="xanga.com">Xanga</option>';
	sb1.innerHTML="<a onclick='switcher(88)'><img src='pictures/logos/playlist.png'></a><a onclick='switcher(89)'><img src='pictures/logos/songmeanings.png'></a><a onclick='switcher(90)'><img src='pictures/logos/guitar.png'></a><a onclick='switcher(91)'><img src='pictures/logos/ign.png'></a><a href='http://blogger.com' class='cur'><img src='pictures/logos/blogger.png'></a><a onclick='switcher(93)'><img src='pictures/logos/weather.png'></a><a onclick='switcher(94)'><img src='pictures/logos/movies.png'></a>";
	break;
case 93: f.action='http://www.wunderground.com/cgi-bin/findweather/getForecast';
	fqvalueold=fqvalue;
	sb2.innerHTML=b+'query" size="50" maxlength="256" class="search" value="Enter zip code"><br><input class="sub" type="submit" value="Find weather">';
	sb1.innerHTML="<a onclick='switcher(88)'><img src='pictures/logos/playlist.png'></a><a onclick='switcher(89)'><img src='pictures/logos/songmeanings.png'></a><a onclick='switcher(90)'><img src='pictures/logos/guitar.png'></a><a onclick='switcher(91)'><img src='pictures/logos/ign.png'></a><a onclick='switcher(92)'><img src='pictures/logos/blogger.png'></a><a href='http://wunderground.com' class='cur'><img src='pictures/logos/weather.png'></a><a onclick='switcher(94)'><img src='pictures/logos/movies.png'></a>";
	changeoff=1;
	break;
case 94: f.action='http://movies.com/default.aspx';
	fqvalueold=fqvalue;
	sb2.innerHTML=b+'GlobalNavControl$SearchControl$GlobalLocationSearchTextBox" size="50" maxlength="256" class="search" value="Enter zip code"><br><input class="sub" type="submit" value="Find movie times">';
	sb1.innerHTML="<a onclick='switcher(88)'><img src='pictures/logos/playlist.png'></a><a onclick='switcher(89)'><img src='pictures/logos/songmeanings.png'></a><a onclick='switcher(90)'><img src='pictures/logos/guitar.png'></a><a onclick='switcher(91)'><img src='pictures/logos/ign.png'></a><a onclick='switcher(92)'><img src='pictures/logos/blogger.png'></a><a onclick='switcher(93)'><img src='pictures/logos/weather.png'></a><a href='http://movies.com' class='cur'><img src='pictures/logos/movies.png'></a>";
	changeoff=1;
	break;
case 95: f.action='http://www.whitepages.com/search/FindPerson';
	fqvalueold=fqvalue;
	sb2.innerHTML='<span id="wpspan"><input type="text" name="name" id="sf" value="Last name" class="sf3"><input type="text" name="firstname" id="l" value="First Name" class="sf3"><input type="text" id="w" name="where" value="State, city, or zip" class="sf3"></span><br><input class="sub" type="submit" value="WhitePages search"><label><input type="radio" name="t" onchange="difsearch(95)" checked>People</label><label><input type="radio" name="t" onchange="difsearch(95)">Business</label><label><input type="radio" name="t" onchange="difsearch(95)">Reverse phone</label><label><input type="radio" name="t" onchange="difsearch(95)">Reverse cell</label><label><input type="radio" name="t" onchange="difsearch(95)">Reverse address</label>';
	sb1.innerHTML="<a href='http://whitepages.com' class='cur'><img src='pictures/logos/whitepages.png'></a><a onclick='switcher(96)'><img src='pictures/logos/mapquest.png'></a><img src='pictures/firefox/blank.gif' width=425 height=1>";
	changeoff=1;
	document.getElementById('l').onkeydown=eraser;
	document.getElementById('w').onkeydown=eraser;
	break;
case 96: f.action='http://www.mapquest.com/maps';
	fqvalueold=fqvalue;
	sb2.innerHTML=b+'cat" size="50" maxlength="256" class="search" value="Enter starting location"><br><input class="sub" type="submit" value="Mapquest search">';
	sb1.innerHTML="<a onclick='switcher(95)'><img src='pictures/logos/whitepages.png'></a><a href='http://mapquest.com' class='cur'><img src='pictures/logos/mapquest.png'></a><img src='pictures/firefox/blank.gif' width=425 height=1>";
	changeoff=1;
	break;
}
	if (num<80 || num>110) {sb1.innerHTML='<img src="pictures/firefox/blank.gif" width=15 height=1 class="i">'+sb1.innerHTML;}
	if (num>80 && num<110) {sb1.innerHTML='<img src="pictures/firefox/left.gif" width=15 height=15 class="l" onclick="mmove(1)">'+sb1.innerHTML+'<img src="pictures/firefox/right.gif" width=15 height=15 class="r" onclick="mmove(2)">';}
	var advanced=sb2.getElementsByTagName('input');
	var advanced2=sb2.getElementsByTagName('option');
	for (var i=0; i<advanced.length; i++) {if (advanced[i].className!='w' && advanced[i].className!='sf2' && advanced[i].className!='sf3' && advanced[i].id!='l' && advanced[i].id!='w') {advanced[i].onclick=sffoc;}}
	for (var i=0; i<advanced2.length; i++) {advanced2[i].onclick=sffoc;}
	if (changeoff!=1) {document.getElementById('sf').value=fqvalue;}
	document.getElementById('sf').focus();
	if (changeoff==1) {document.getElementById('sf').onkeydown=eraser}
	olde=num;
	navstart=num;
	mbacker(num);
	if (uselast==1) {precook(num,5)}
}
function eraser(evar) {
if (!(evar<3)) {evar=this.id};
if (evar==0) {evar='sf'}
if (evar==1) {evar='l'}
if (evar==2) {evar='w'}
if (oldengine!=95) {document.getElementById(evar).value=fqvalue;}
if (oldengine==95) {document.getElementById(evar).value='';}
document.getElementById(evar).onkeydown=null;
changeoff=0;
}
function mmove(mmovevar) {
	oe=olde;
	if (mmovevar==1) {
		if (oe>80 && oe<88) {mmv=95}
		if (oe>87 && oe<95) {mmv=81}
		if (oe==95 || oe==96) {mmv=88}
	}
	if (mmovevar==2) {
		if (oe>80 && oe<88) {mmv=88}
		if (oe>87 && oe<95) {mmv=95}
		if (oe==95 || oe==96) {mmv=81}
	}
	switcher(mmv);
}
function sffoc() {document.getElementById('sf').focus();}
function difsearch(difvar) {
	srcz=document.getElementById('sf').value;
	endv='';
	st=0;
	switch (difvar) {
		case -32: 
			if (document.f.f.value!='') {endv='+filterui:imagesize-'+document.f.f.value}
			location.href='http://www.bing.com/images/search?q='+srcz+endv;
			break;
		case -33: 
			if (document.f.l.value!='') {endv='+filterui:duration-'+document.f.l.value}
			if (document.f.r.value!='') {endv=endv+'+filterui:resolution-'+document.f.r.value}
			if (document.f.sb.value!='') {endv=endv+'&sort=date'}
			location.href='http://www.bing.com/videos/search?q='+srcz+endv;
			break;
		case -34: 
			if (document.f.p1.value!='') {endv='&p1=[NewsVertical+SortByDate%3d"1"]'}
			location.href='http://www.bing.com/news/search?q='+srcz+endv;
			break;
		case -36:
			if (document.f.s.value!='') {endv='&p1=[CommerceService scenario%3d"f" a%3d"'+document.f.s.value+'"]'};
			if (document.f.p1.value!='') {endv='&p1=[CommerceService+scenario%3d\%22f\%22+a%3d\%22'+document.f.s.value+'\%22+r%3d\%22pricelow|'+document.f.p1.value+'%2cpricehigh|'+document.f.p2.value+'\%22]'};
			if (document.f.p1.value!='') {if (document.f.p2.value=='' || !(Math.round(document.f.p2.value)>Math.round(document.f.p1.value))) {alert('Incorrect value for price.'); st=1;}}
			if (st!=1) {location.href='http://www.bing.com/shopping/search?q=sit'+endv;}
			break;
		case 3:
			for (var i=0; i < document.f.dic.length; i++) {if (document.f.dic[i].checked) {dt=i+1;}}
			switch (dt) {
				case 1: f.action='http://www.dictionary.reference.com/search'; break;
				case 2: f.action='http://thesaurus.reference.com/search'; break;
				case 3: f.action='http://reference.com/search'; break;
				case 4: f.action='http://translate.reference.com/search'; break;
			}
			break;
		case 13:
			sportv=''; typev=''; sportv1=''; typev1='';
			if (document.f.sport.value!='') {
				sportv1=document.f.sport.value.split('&');
				sportv='/'+sportv1[0];
				sportv1=sportv1[1];}
			if (document.f.type.value!='') {
				typev1=document.f.type.value.split('&');
				typev='/'+typev1[0];
				typev1=typev1[1];}
			if (srcz!='') {
				ssv1=srcz.split(' ');
				ssv=ssv1[0];
				for (var i=1; i<ssv1.length; i++) {
					ssv=ssv+'-'+ssv1[i];
				}}
			if (sportv1!='' && typev1!='') {typev1='-'+typev1};
			if (sportv1!='' || typev1!='') {endv='/'+sportv1+typev1}
			location.href='http://search.espn.go.com/'+ssv+sportv+typev+endv;
			break;
		case 23: sortv=document.f.s.value;
			if (sortv!='') {endv='/sort/'+sortv}
			location.href="http://veoh.com/search/videos/q/"+srcz+endv;
			break;
		case 25:
			location.href="http://dailymotion.com"+document.f.type.value+document.f.sort.value+"search/"+srcz+"/1";
			break;
		case 26:
			cat=document.f.cat.value;
			if (cat!="") {cat="/"+cat;}
			location.href="http://www.metacafe.com/f/tags"+cat+"/"+srcz+"/"+document.f.sort.value;
			break;
		case 27: 
			for (var i=0; i < document.f.t.length; i++) {if (document.f.t[i].checked) {dt=i}}
			location.href='http://www.movies-links.tv/'+document.f.t[dt].value+'/'+srcz+'.html';
			break;
		case 31: location.href='http://photobucket.com/images/'+srcz+'/?sortby='+document.f.sortby.value; break;
		case 34: catv=document.f.catid.value;
			if (catv!='') {endv='&sf=catid:'+catv};
			location.href='http://www.pixsy.com/search.aspx?q='+srcz+endv; break;
		case 55:
			f.action='javascript:difsearch(551)'
			break;
		case 551:
			location.href='http://www.mininova.org/search/'+srcz+'/'+document.f.cat.value+'/'+document.f.sort.value;
			break;
		case 57:
			location.href='http://www.torrentroot.com/#?site='+document.f.site.value+'&search='+srcz;
			break;
		case 61: location.href='http://download.cnet.com/1770-20_4-0.html?query='+srcz+'&searchtype=downloads&rpp=30&filter=licenseName='+document.f.l.value+'&sort='+document.f.sort.value; break;
		case 63:
			for (var i=0; i < document.f.type.length; i++) {if (document.f.type[i].checked) {typez=i+1}}
			switch (typez) {
				case 1: endv="http://www.google.com/search?q=-inurl%3A(htm%7Chtml%7Cphp)+intitle%3A%22index+of%22+%2B%22last+modified%22+%2B%22parent+directory%22+%2B+"+srcz+"+%2B(wma%7Cmp3%7Cogg)"; break;
				case 2: endv="http://www.google.com/search?q=-inurl%3A(htm%7Chtml%7Cphp)+intitle%3A%22index+of%22+%2B%22last+modified%22+%2B%22parent+directory%22+%2B+"+srcz+"+%2B(avi%7Cwmv)"; break;
				case 3: endv="http://www.google.com/search?q=-inurl%3A(htm%7Chtml%7Cphp)+intitle%3A%22index+of%22+%2B%22last+modified%22+%2B%22parent+directory%22+%2B+"+srcz+"+%2B(pdf%7Cdoc)"; break;
				case 4: endv="http://www.google.com/search?q=-inurl%3A(htm%7Chtml%7Cphp)+intitle%3A%22index+of%22+%2B%22last+modified%22+%2B%22parent+directory%22+%2B+"+srcz+"+%2B(rar%7Czip%7Ciso)"; break;
				case 5: endv="http://www.google.com/search?q=-inurl%3A(htm%7Chtml%7Cphp)+intitle%3A%22index+of%22+%2B%22last+modified%22+%2B%22parent+directory%22+%2B+"+srcz+"+%2B(torrent&7Cmagnet)"; break;
			}
			location.href=endv;
			break;
		case 76:
			location.href='http://www.pricegrabber.com/world/products.html/form_keyword='+srcz+'/topcat_id='+document.f.cat.value;
			break;
		case 81: location.href='http://www.newgrounds.com/portal/search/'+document.getElementById('type').value+'/'+srcz; break;
		case 88: 
			if (document.f.type.value=='tracks') {location.href='http://www.playlist.com/searchbeta/tracks#'+srcz}
			if (document.f.type.value=='playlists') {location.href='http://www.playlist.com/searchbeta/playlists/'+srcz}
			break;
		case 82: location.href='http://www.ebaumsworld.com/search/criteria='+srcz+'/mediatype='+document.f.mediatype.value; break;
		case 95:
			for (var i=0; i < document.f.t.length; i++) {if (document.f.t[i].checked) {typez=i+1}}
			switch (typez) {
				case 1: 
					f.action='http://www.whitepages.com/search/FindPerson';
					typev='<input type="text" name="name" id="sf" value="Last name" class="sf3" onkeydown="eraser(0)"><input type="text" name="firstname" id="l" value="First Name" class="sf3" onkeydown="eraser(1)"><input type="text" id="w" name="where" value="State, city, or zip" class="sf3" onkeydown="eraser(2)">';
					break;
				case 2: 
					f.action='http://yellowpages.superpages.com/listings.jsp';
					typev='<input type="text" name="C" id="sf" value="Name" class="sf2" onkeydown="eraser(0)"><input type="text" name="L" id="l" onkeydown="eraser(1)" value="State, city, or zip" class="sf2">';
					break;
				case 3: 
					f.action='http://www.whitepages.com/search/ReversePhone';
					typev='<input type="text" name="full_phone" id="sf" value="Phone number" onkeydown="eraser(0)">';
					break;
				case 4: 
					f.action='http://www.whitepages.com/carrier_lookup';
					typev='<input type="text" name="number_0" id="sf" value="Cell phone number" class="sf2" style="width:400" onkeydown="eraser(0)"><select name="carrier" class="df"><option value="">Select carrier</option><option value="alltel">Alltel Wireless</option><option value="att">AT&T</option><option value="cellone">Cellular One</option><option value="nextel">Nextel</option><option value="qwest">Qwest</option><option value="sprint">Sprint PCS</option><option value="suncom">Suncom</option><option value="tmobile">T-Mobile</option><option value="verizon">Verizon</option><option value="virgin">Virgin Mobile(US)</option><option value="other">Other</option></select>';
					break;
				case 5: 
					f.action='http://www.whitepages.com/search/ReverseAddress';
					typev='<input type="text" name="street" id="sf" value="Address" class="sf2" onkeydown="eraser(0)"><input type="text" name="where" id="w" value="State, city, or zip" class="sf2" onkeydown="eraser(2)">';
					break;
			}
			document.getElementById('wpspan').innerHTML=typev;
			break;
	}
}
function miscer(miscerv) {
	switch(miscerv) {
		case 1: document.f.audio.checked=false; document.f.video.checked=false; document.f.apps.checked=false; document.f.games.checked=false; document.f.other.checked=false; break;
	}
}
function gadshow(gshowvar) {
	ter='t'+(gshowvar+1);
	gov=offcheck(ter);
	ttv=document.getElementById(ter).innerHTML.split('<a')[0];
	if (gov!='X') {
		document.getElementById(ter).innerHTML=ttv+'<a class="ao" onclick="gadshow('+gshowvar+')">&#9744;</a>';
		document.getElementById(ter+'s').style.display='none';
		document.getElementById('g'+(gshowvar)).style.opacity=0.2;
		if (gshowvar==3) {document.getElementById('ads').style.display='block';}
		precook('0',20+gshowvar);
		//SAVE TO COOKIE
	}
	if (gov=='X') {
		document.getElementById(ter).innerHTML=ttv+'<a onclick="gadshow('+gshowvar+')">X</a>';
		document.getElementById(ter+'s').style.display='block';
		document.getElementById('g'+(gshowvar)).style.opacity=1;
		if (gshowvar==3) {document.getElementById('ads').style.display='none';}
		precook('1',20+gshowvar);
		//SAVE TO COOKIE
	}
}
function offcheck(secv) {
	stupid=document.getElementById(secv).innerHTML.split("X");
	if (stupid[1]) {gov2='&#9744;'}
	if (!stupid[1]) {gov2='X'}
	return gov2;
}
function closegad() {
cg=cg2;
if (cg==1) {
	document.getElementById('g1').style.visibility='hidden';
	document.getElementById('g2').style.visibility='hidden';
	document.getElementById('g3').style.visibility='hidden';
	document.getElementById('cgspan').innerHTML='Open';
	cg2=0;}
if (cg==0) {
	document.getElementById('g1').style.visibility='visible';
	document.getElementById('g2').style.visibility='visible';
	document.getElementById('g3').style.visibility='visible';
	document.getElementById('cgspan').innerHTML='Close';
	cg2=1;}
//SAVE TO COOKIE
}
function updatecheck() {
	var head = document.getElementsByTagName('head')[0];
	var nscript = document.createElement('script');
	nscript.src = 'http://www.centisearch.com/'+'update.js';
	nscript.type = 'text/javascript';
	nscript.id='nscripter';
	head.appendChild(nscript);
	setTimeout('showupdate()',500);
}
function showupdate() {
	if (n>version) {document.getElementById('g3').style.display='block'; document.getElementById('t4s').innerHTML=c; document.getElementById('ads').style.display='none'}
	if (c=='null' || c=='' || c=='undefined') {setTimeout('showupdate()',250);}
}
function customize() {
	covar=getCookie('centisearch');
	document.getElementById('customi').style.display='block';
	document.getElementById('customi').src='';
	if (covar) {
		document.getElementById('customi').src='other/customize.html?start='+
		bgcv+';'+
		logocv+';'+
		bcv+';'+
		tcv+';'+
		fcv+';'+
		ecv+';'+
		sftc+';'+
		ibor+';'+
		ibg+';'+
		g1cv+';'+
		g1cs+';'+
		g2cv+';'+
		g2cs+';'+
		ccv+';'+
		sff+';'+
		uselast+';'+
		mi+';'+
		as+';'+
		g0i+';'+
		g1i+';'+
		g2i;
	}
	if (!covar) {document.getElementById('customi').src='other/customize.html';}
}
function onlinehelp() {
document.getElementById('customi').style.display='block';
document.getElementById('customi').src='other/help.html';
}
function ader() {
ad=document.getElementById('ads');
//if (wwidth-(wwidth-725)/2-725>250) {ad.src='other/ad.html';}
//if (wwidth-(wwidth-725)/2-725<251 && wwidth-(wwidth-725)/2-725>175) {ad.src='other/ads.html';}
//if (wwidth-(wwidth-725)/2-725<175) {ad.src='other/adt.html';}
}
function setter() {
if (!window.location.href.split('black.html')[1]) {
	covar=getCookie('centisearch');
	wwidth=window.innerWidth;
	hheight=window.innerHeight;
	adid=document.getElementById('ads');
	adid.style.top=65;
	if (wwidth-(wwidth-725)/2-725>250) {
		document.getElementById('frame').style.left=(wwidth-725)/2;
		adid.style.top=5;
		adid.style.height=280;
		adid.style.width=336;
	}
	if (wwidth-(wwidth-725)/2-725<251 && wwidth-(wwidth-725)/2-725>175) {
		document.getElementById('frame').style.left=wwidth-960;
		adid.style.height=250;
		adid.style.width=250;
	}
	if (wwidth-(wwidth-725)/2-725<175) {
		document.getElementById('frame').style.left=wwidth-900;
		adid.style.height=200;
		adid.style.width=200;
	}
	document.getElementById('infosec').style.left=(wwidth-320)/2; //set calendar position
	document.getElementById('gad1').style.width=(wwidth-370)/2; //set gadget 1 width (CHANGE WITH GADGET)
	document.getElementById('g1').style.width=(wwidth-370)/2; //set gadget 1 width (CHANGE WITH GADGET)
	document.getElementById('t2s').style.height=(hheight-400); //set gadget 1 height (CHANGE WITH GADGET)
	document.getElementById('gad2').style.width=(wwidth-370)/2; //set gadget 2 width (CHANGE WITH GADGET)
	document.getElementById('t3s').style.height=(hheight-400); //set gadget 2 height (CHANGE WITH GADGET)
	document.getElementById('g2').style.width=(wwidth-370)/2; //set gadget 2 width (CHANGE WITH GADGET)
	document.getElementById('g2').style.left=(wwidth-320)/2+325; //set gadget 2 position

	if (!covar) {covar='#fff 0% 100% repeat-x*pictures/backgrounds/grad.png*4;1;0;#111111;Arial;-1;#666666;#bbbbbb;#f9f9f9;1;News;1.open.gmodules.com/gadgets/ifr?v=8d15a0b9bb6ffb107afba3e7fb563629&up_summaries=300&container=open&up_entries=10&view=home&mid=1&lang=all&url=http%3A%2F%2Figwidgets.com%2Flig%2Fgw%2Ff%2Fislk%2F89%2Fslkm%2Fik%2Fs%2F1329844%2F87%2Fcharles447%2Fgoogle-news.xml&up_subject=Google+News&country=ALL&source=file%3A%2F%2F%2FC%3A%2FDocuments%2520and%2520Settings%2FAdministrator%2FMy%2520Documents%2FDownloads%2Ffirefoxbl4k%2Ffirefox.html&parent=file%3A%2F%2F%2FC%3A%2FDocuments%2520and%2520Settings%2FAdministrator%2FMy%2520Documents%2FDownloads%2Ffirefoxbl4k%2Ffirefox.html&libs=core%3Acore.io%3Arpc#rpctoken=857137094;0;Weather;www.gmodules.com/ig/ifr?url=http://timcwebman.googlepages.com/weather.xml&up_zipCode=33547&up_units=0&up_template=GENX&up_direction=H&synd=open&w=320&h=180&title=Weather+by+Weather.com&border=%23ffffff%7C3px%2C1px+solid+%23999999&source=http%3A%2F%2Fwww.gmodules.com%2Fig%2Fcreator%3Fsynd%3Dopen%26url%3Dhttp%253A%252F%252Ftimcwebman.googlepages.com%252Fweather.xml%26lang%3Den;1;Arial;0;1;1;1;1;1';}
	bgcv=1;
	logocv=1;
	bcv=0;
	tcv='#111111';
	fcv='Arial';
	ecv=-1;
	sftc='#666666';
	ibor='#bbbbbb';
	ibg='#f9f9f9';
	g1cv='News'
	g1cs=''
	g1v=0;
	g2cv=0;
	g2cs='Weather';
	g2v=0;
	ccv=1;
	sff='Arial';
	//ecv=varz[17]; //starting search???
	//sftc=varz[18]; //search box text color???
	uselast=0;
	mi=1;
	as=1;
	g0i=1;
	g1i=1;
	g2i=1;
	varz=covar.split(';');
	bgcv=varz[0]; //background
	logocv=varz[1]; //logo
	bcv=varz[2]; //button style
	tcv=varz[3]; //body text color hex
	fcv=varz[4]; //body font string
	ecv=Math.round(varz[5]); //starting search
	sftc=varz[6]; //search input text color? hex
	ibor=varz[7]; //search input border color hex
	ibg=varz[8]; //search input bg color hex
	g1cv=varz[9]; //left gadget visibility boolean
	g1cs=varz[10]; //left gadget title string
	g1v=varz[11]; //left gadget source string
	g2cv=varz[12]; //right gadget visibility boolean
	g2cs=varz[13]; //right gadget title string
	g2v=varz[14]; //right gadget source string
	ccv=varz[15]; //calendar visibility boolean
	sff=varz[16]; //search input text font string
	//ecv=varz[17]; //starting search???
	//sftc=varz[18]; //search box text color???
	uselast=varz[17]; //???
	mi=varz[18]; //motto showing boolean
	as=varz[19]; //autocomplete on/off boolean
	g0i=varz[20]; //settings showing boolean
	g1i=varz[21]; //left gadget showing boolean
	g2i=varz[22]; //right gadget showing boolean
	
	//Set startup search engine
	if (ecv==0) {uselast=1; ecv=uselast;}
	switcher(ecv);
	changegads();

	//Set logo
	if (logocv==1) {document.getElementById('logo').src='pictures/styles/original.png'; document.getElementById('titlesec').style.backgroundImage='url("pictures/styles/originalbg.png")'}
	if (logocv==2) {document.getElementById('logo').src='pictures/styles/stained.png'; document.getElementById('titlesec').style.backgroundImage='url("pictures/styles/stainedbg.png")'}

	document.getElementById('searchbox2').style.color=tcv; //set font color
	document.getElementById('searchbox2').style.fontFamily=fcv; //set font

	//Set input style
	ibor=ibor.split('#')[1];
	iborr='#'+(Math.round(parseInt(ibor,16))-3355443).toString(16);
	ibor='#'+ibor;
	document.getElementById('searchfadesec').innerHTML='<style>#searchbox2 #sf {color:'+sftc+';font-family:'+sff+';border:1px solid '+ibor+';background:'+ibg+';}#searchbox1 a {border-left:2px solid #ccc;border-right:2px solid #999; border-top:3px solid #ccc;}#searchbox1 a:hover {border-top:5px solid #ccc;border-right:2px solid #aaa;border-bottom:4px solid #ccc;}#searchbox1 a.cur {border:1px solid '+ibor+'; border-bottom:0px; background:'+ibg+'}</style>';

	//Set calendar on or off
	if (ccv=='0') {document.getElementById('infosec').style.display='none';}
	if (ccv=='1') {document.getElementById('infosec').style.display='block';}

	//Set background
	bgu=bgcv.split('*')[1];
	if (bgcv.split('-')[1]) {
		if (bgcv.split('-')[1].split('*')[0]=='repeat') {
		document.getElementById('bg').setAttribute('src', bgu);
		document.getElementById('bg').style.display='block';
		document.getElementById('bg').style.backgroundImage='url("pictures/firefox/blank.gif")';
		} //set and display stretched bg
		if (bgcv.split('-')[1].split('*')[0]!='repeat') {
			document.getElementById('bg').style.backgroundColor=bgcv.split('*')[0].split('#')[1]; //set background color
			document.getElementById('bg').style.backgroundPosition=bgcv.split('*')[0].split(' ')[1]+bgcv.split('*')[0].split(' ')[2]; //set background height
			if (bgcv.split('-')[1].split('*')[0]=='x') {document.getElementById('bg').style.backgroundRepeat='repeat-x';} //
			if (bgcv.split('-')[1].split('*')[0]=='y') {document.getElementById('bg').style.backgroundRepeat='repeat-y';} //set background repeat
			document.body.style.backgroundImage="url('pictures/firefox/blank.gif')"; //turn off background image
			document.getElementById('bg').setAttribute('src', 'pictures/firefox/blank.gif'); //make stretched image invisible
			document.getElementById('bg').style.backgroundImage='url('+bgu+')'; //set background
		}
	}
	if (bgcv.split('*')[0]=='color') {
		document.body.style.backgroundColor=bgu.split('#')[1]; //set background color
		document.body.style.backgroundImage="url('pictures/firefox/blank.gif')"; //turn off background image
		document.getElementById('bg').style.display='none'; //close stretched bg
	}
	//Set button style
	bbor=''; bbg=''; btc='';
	/*Add these
		Button border
		Button bg
		Button text color
	*/

	//Windows closed or open
	if (g0i==0) {gadshow(0);}
	if (g1i==0) {gadshow(1);}
	if (g2i==0) {gadshow(2);}
	
	//Set gadget 1 on or off
	if (g1cv==0) {document.getElementById('g1').style.display='none';}
	if (g1cv==1) {document.getElementById('g1').style.display='block';}

	//Set gadget 2 on or off
	if (g2cv==0) {document.getElementById('g2').style.display='none';}
	if (g2cv==1) {document.getElementById('g2').style.display='block';}

	if (mi==0) {document.getElementById('motto').style.display='none';}
	if (mi==1) {document.getElementById('motto').style.display='block';}

	//Fix the hover state
	if (ecv<0) {navstart=(Math.floor((ecv/10))*-1)-1}
	if (ecv>0) {navstart=(Math.floor((ecv/10))*7)+4}
}
}

function changegads() {
//Set gadget 1
document.getElementById('t2').innerHTML=g1cs+'<a onclick="gadshow(1)">X</a>';
document.getElementById('gad1').src='http://'+g1v;

//Set gadget 2
document.getElementById('t3').innerHTML=g2cs+'<a onclick="gadshow(2)">X</a>';
document.getElementById('gad2').src='http://'+g2v;
}



function getCookie(c_name)
{
if (document.cookie.length>0)
  {
  c_start=document.cookie.indexOf(c_name + "=");
  if (c_start!=-1)
    {
    c_start=c_start + c_name.length+1;
    c_end=document.cookie.indexOf(";",c_start);
    if (c_end==-1) c_end=document.cookie.length;
    return unescape(document.cookie.substring(c_start,c_end));
    }
  }
return "";
}

function precook(value,order) {
covar=getCookie('centisearch');
if (covar) {
	varz=covar.split(';');
	varz[order]=value;
	varz2=varz[0];
	for (var i=1; i < varz.length; i++) {
		varz2=varz2+';'+varz[i];
	}
	setCookie('centisearch',varz2,365);
}
}

function setCookie(c_name,value,expiredays)
{
var exdate=new Date();
exdate.setDate(exdate.getDate()+expiredays);
document.cookie=c_name+ "=" +escape(value)+
((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
}

//function useset() {uselast=0}