var names=new Array();
names[0]="home";
names[1]="about";
names[2]="portfolio";
names[3]="repair";
names[4]="contact";
var navimages=names.length;

if (document.URL.indexOf("?")!=-1) {
	pagen=document.URL.split("?")[1].toLowerCase();
	for (i=0; i<navimages; i++) {
		if (names[i].toLowerCase()==pagen) {
			alert("http://primedesigning.com#"+pagen);
			window.location="http://primedesigning.com#"+pagen;
			break;
		}
	}
	if (pagen=="centisearch") {
		window.location="./centisearch/";
	} else if (pagen=="moot") {
		window.location="./moot/";
	} else if (pagen=="noscript") {
		window.location="./noscript/";
	} else if (pagen=="ikilledsanta") {
		window.location="http://ikilledsanta.tripod.com/";
	} else if (pagen=="movies") {
		window.location="./lists/100movies.html";
	} else if (pagen=="kidsmovies") {
		window.location="./lists/kidsmovies.html";
	} else if (pagen=="books") {
		window.location="./lists/bookslist.html";
	} else if (pagen=="wiki") {
		window.location="./lists/100wiki.html";
	} else if (pagen=="youtube") {
		window.location="./lists/100youtube.html";
	} else if (pagen=="computer") {
		window.location="./lists/computer.html";
	} else {
		window.location=pagen+".html";
	}
}

function contented(pager) {
		htmlcont=new Array() [
			'<div class="center"><h1>Welcome to Prime Designing!</h1></div>',
			'<div id="aboutdiv"><p>I am Computer Science student located in Carbondale, Illinois. I have worked independently as a web developer since 2008. In 2007, I placed 1st in the FBLA Web Design competition for Florida. In 2012, I worked as a Computer Technician, fixing all types of computer problems in person and on the phone.</p><p><b>Web languages:</b><ul><li>HTML</li><li>CSS</li><li>JavaScript</li><li>Java</li><li>PHP</li><li>MYSQL</li></ul><img src="images/blank.gif" height=5px width=1px class="blankpic"></p><p>I am also available for application development. I have extensive experience with programming in Java. My most impressive project spans nearly 10,000 lines of code.</p><p><b>Programming languages:</b><ul><li>C++</li><li>Java</li><li>Multiple BASICs</li></ul></div>',
			'<div class="center"><div class="porttop"><div class="portleft"><span><a href="centisearch/"><img src="images/centisearch.jpg" alt="CentiSearch"><br>CentiSearch</a> &nbsp; &nbsp; CentiSearch was created between 2008 and 2010. It is a portal that includes 100 of the Internet"s most popular search engines, all of which can be accessed with only one click. Users do not have to wait for a different site to load to use that site"s search engine.</span></div><div class="portright"><span><a href="http://robinsonminimall.com"><img src="images/minimall.jpg" alt="Robinson Mini Mall"><br>Robinson Mini Mall</a></span></div></div><div class="porttop"><div class="portleft"><span><a href="evynmerrill/"><img src="images/merill.jpg" alt="Evyn Merrill"><br>Evyn Merrill - Show Production Specialist</a></span></div><div class="portright"><span><a href="http://pennsylvaniacivilrightslawnetwork.com"><img src="images/pcrln.jpg" alt="Pennsylvania Civil Rights Law Network"><br>Pennsylvania Civil Rights Law Network</a></span></div></div><br><a href="projects/">Projects unrelated to web design</a></div>',
			'<div class="center"><h1>UNDER CONSTRUCTION</h1></div>',
			'<div class="center"><div id="contactdiv">Cameron Lattz<br>Cell: (813)-294-0236<br><a href="mailto:cameron@primedesigning.com">cameron@primedesigning.com</a></div></div>'
		];
		contlen=htmlcont.length;
		contreturn='<div class="center"><h1>ERROR 405</h1></div>';
		if (pager==-1) {
			contreturn=new Array();
			for (i=0; i<contlen; i++) {
				tlc=htmlcont[i].toLowercase();
				if (tlc.indexOf("<img")!=-1) {
					imgstring=htmlcont[i].substring(tlc.indexOf("<img"));
					imgstring=imgstring.substring(0, imgstring.indexOf(">"));
					imgstring=imgstring.substring(imgstring.indexOf("src=")+1);
					if (imgstring.indexOf("'")!=-1) {
						imgsrc=imgstring.substring(0, imgstring.indexOf("'"));
					} else if (imgstring.indexOf("'")!=-1) {
						imgsrc=imgstring.substring(0, imgstring.indexOf("'"));
					}
					contreturn[i]=imgsrc;
				}
			}
		} else {
			for (i=1; i<contlen; i++) {
				if (namecompare(pager, i)) {
					contreturn=htmlcont[i];
					break;
				}
			}
		}
		return contreturn;
	
}

function preload(imgs) {
	var newdiv = document.createElement("div");
	newdiv.style.width="1px";
	newdiv.style.height="1px";
	newdiv.style.position="absolute";
	newdiv.id="hiddenimg2";
	newdiv.style.visibility="hidden";
	newdiv.innerHTML="&nbsp;";
	for (i=0; i<imgs.length; i++) {
		alert(imgs[i]);
		newdiv.innerHTML=newdiv.innerHTML+'<br><img src="'+imgs[i]+'">';
	}
	document.body.appendChild(newdiv);
	setTimeout(function(){document.body.removeChild(newdiv)}, 30000);
}

function loader() {
	document.body.style.visibility='hidden';
	if (!window.location.hash) {changer(names[0]);}
	else {changer(window.location.hash.split("#")[1]);}
	
	var imgdiv=document.createElement('div');
	imgdiv.id='hiddenimg';
	imgdiv.style.visibility="hidden";
	imgdiv.style.height=1;
	imgdiv.style.width=1;
	imgdiv.style.overflow="hidden";
	imgdiv.style.top=1;
	imgdiv.style.left=1;
	imgdiv.style.position="absolute";
	imgdiv.innerHTML="&nbsp;";
	document.body.appendChild(imgdiv);
	for (i=0; i<navimages; i++) {
		imgdiv.innerHTML=imgdiv.innerHTML+'<br><img src="images/'+names[i]+'0.png"><img src="images/'+names[i]+'1.png">';
	}
	setTimeout(function(){document.body.removeChild(imgdiv)}, 30000);
}

function navover(elem) {
	childimg=elem.childNodes[0];
	if (childimg.src.split('images/')[1].indexOf('0')!=-1) {
		imgname=childimg.src.split('images/')[1].split('0')[0];
		childimg.src='images/'+imgname+'1.png';
	}
}

function navout(elem) {
	childimg=elem.childNodes[0];
	if (childimg.src.split('images/')[1].indexOf('1')!=-1) {
		imgname=childimg.src.split('images/')[1].split('1')[0];
		childimg.src='images/'+imgname+'0.png';
	}
}

function changepage(elem) {
	childimg=elem.childNodes[0].src.split('images/')[1];
	if (childimg.indexOf('1')!=-1) {
		changer(names[pagefinder(childimg.split('1')[0])]);
	} else if (childimg.indexOf('0')!=-1) {
		changer(names[pagefinder(childimg.split('0')[0])]);
	}
}

function pagefinder(pagename) {
	for (i=0; i<navimages; i++) {
		if (pagename.toLowerCase()==names[i].toLowerCase()) {
			return i;
		}
	}
	return -1;
}

function changer(pager) {
	if (document.URL.indexOf("?")==-1) {
		if (namecompare(pager, 0)) {
			if (location.hash.length>1) {
				location.hash="";
			}
		} else {location.hash=pager.toLowerCase();}
	}
	imageshtml="";
	if (pager.toLowerCase()!="blank") {
		imageas=document.getElementById("images").getElementsByTagName('a');
		for (i=0; i<navimages; i++) {
			if (namecompare(pager, i)) {
				if (imageas[i].href.length>0) {
					imageas[i].removeAttribute("href");
				}
				imageas[i].getElementsByTagName('img')[0].src='images/'+pager.toLowerCase()+'2.png';
			} else if (imageas[i].href.length==0) {
				imageas[i].setAttribute("href", "#"+names[i].toLowerCase());
				imageas[i].setAttribute("onMouseOver", "navover(this)");
				imageas[i].setAttribute("onMouseOut", "navout(this)");
				imageas[i].setAttribute("onClick", "changepage(this)");
				imageas[i].getElementsByTagName('img')[0].src='images/'+names[i].toLowerCase()+'0.png';
			}
		}
		document.getElementById("content").innerHTML=contented(pager);
		if (document.body.style.visibility!="visible") {
			if (window.screen.availWidth>1001 && window.screen.availWidth<1600) {
				document.getElementById("logo").innerHTML='<img src="images/logo.png">';
			} else if (window.screen.availWidth>630 && window.screen.availWidth<1002) {
				document.getElementById("logo").innerHTML='<img src="images/logo.png">';
			} else if (window.screen.availWidth>1600) {
				document.getElementById("logo").innerHTML='<img src="images/logo.png">';
			} else if (window.screen.availWidth<631) {
				document.getElementById("logo").innerHTML='<img src="images/logo.png">';
			}
		}
		document.title="Prime Designing: "+pager.charAt(0).toUpperCase() + pager.slice(1);
	}
	document.body.style.visibility="visible";
	setTimeout(function(){preload(contented(-1))}, 1234);
}

function namecompare(inname, innum) {
	return (inname.toLowerCase()==names[innum].toLowerCase());
}

function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}
addLoadEvent(loader);