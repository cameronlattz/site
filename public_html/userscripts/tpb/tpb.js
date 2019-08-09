// ==UserScript==
// @name           ThePirateBay Optimizer
// @namespace      http://www.primedesigning.com
// @description    Order searches by seeds, adds Seeder/Leecher ratio, resizes search table, and removes ads
// @include        http://*thepiratebay.*
// @include        https://*thepiratebay.*
// @grant          none
// @thanks         Dan Taylor SEO, http://www.dantaylorseo.com
// ==/UserScript==

//Dan Taylor SEO's code
var hidden_param = document.getElementsByName("orderby").item(0);
hidden_param.setAttribute("value", "7")
//End of Dan Taylor SEO's code

for (i=0; i<document.getElementsByTagName("iframe").length; i++) {
    document.getElementsByTagName("iframe")[i].style.display="none";
}

if (window.location.href.indexOf("/99/")!=-1) {
    window.location=window.location.href.split("/99/")[0]+"/7/"+window.location.href.split("/99/")[1];
}

if (window.location.href.indexOf("/search/")!=-1) {
    document.getElementById("main-content").style.margin=0;
    document.getElementById("main-content").style.padding="auto 0px auto 0px";
    document.getElementById("content").style.margin=0;
    document.getElementById("sky-right").style.display="none";
    document.getElementById("content").style.maxWidth="999999px";
    var table=document.getElementById('searchResult');
    var tr=table.tHead.children[0];
    var th1=document.createElement('th');
    th1.innerHTML='<abbr title="Seeder/Leecher Ratio">Ratio</abbr>';
    tr.appendChild(th1);
    var th2=document.createElement('th');
    th2.innerHTML='<abbr title="Seeder/Leecher Score">Score</abbr>';
    tr.appendChild(th2);
    for (i=0; i<table.children[1].children.length; i++) {
        var td1=document.createElement('td');
        td1.style.textAlign="right";
        var td2=document.createElement('td');
        td2.style.textAlign="right";
		var se=Number(table.children[1].children[i].children[2].innerHTML);
		var le=Number(table.children[1].children[i].children[3].innerHTML);
		var se1=1;
		var le1=1;
		if (se!=0) {se1=se;}
		if (le!=0) {le1=le;}
		td1.innerHTML=Math.round(se1/le1*100)/100;
		if (se==0) {
		     percent=0;
		} else if (le==0) {
		     percent=1;
		} else {
		     percent=se/(se+le1);
		}
		td2.innerHTML=Math.round(((se*10+le*2)*percent)*10)/100;
        table.children[1].children[i].appendChild(td1);
        table.children[1].children[i].appendChild(td2);
    }
}