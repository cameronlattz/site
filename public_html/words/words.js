var dictionary=new Array();
var guesses=new Array();
var guesscount=0;
var lastword="";
var score=0;
var potcount=0;
var playercount=1;
var currentplayer=1;
var yourturn=true;
var yournumber=0;
var yourip="";
var potdiv=1;
var scorediv=2;
var turndiv=3;
var playerdiv=4;

function checkserver() {
	var result = "";
	$.ajax({
		url: 'wordsdown.php',
		type: 'get',
		dataType: 'text',
		success: function (data) {
			result = data;
		},
		async: false
	});
	resultarray=result.split('@@@');
	if (resultarray.length>1) {
		var readword=resultarray[resultarray.length-2];
		for (i=0; i<resultarray.length; i++) {
		}
		if (readword!=lastword) {
			currentplayer=(currentplayer+1)%playercount;
			lastword=readword;
			update(readword);
			if (yournumber==currentplayer) {
				yourturn=true;
				update(turndiv);
			} else {
				yourturn=false;
				update(turndiv);
			}
		};
	}
	var result2 = "";
	$.ajax({
		url: "listplayers.php",
		type: 'get',
		dataType: 'text',
		success: function (data) {
			result2 = data;
		},
		async: false
	});
	result2array=result2.split('@@@');
	if (result2array.length>playercount) {
		playercount=result2array.length;
		update(playerdiv);
	}
	setTimeout(function(){checkserver()},100);
}

function start() {
	loaddictionary();
	//clear();
	addplayer();
	checkserver();
}

function addplayer() {
	var result = "";
	$.ajax({
		url: "addplayer.php",
		type: 'post',
		dataType: 'text',
		success: function (data) {
		
		},
		async: false
	});
	var result2 = "";
	$.ajax({
		url: "listplayers.php",
		type: 'get',
		dataType: 'text',
		success: function (data) {
			result2 = data;
		},
		async: false
	});
	result2array=result2.split(' ');
	yournumber=result2array.length;
	playercount=yournumber;
	update(playerdiv);
}

function dictloaded() {
	display("Choose a word to start!");
}

function display(outstr) {
	document.getElementById("messages").innerHTML=outstr;
}

function guesser() {
	yourturn=true;
	if (yourturn) {
		g=document.f.guess.value;
		if (g.indexOf(" ")<2 && g.indexOf(" ")!=-1) {
			display("One word only.")
		} else {
			g=document.f.guess.value.toLowerCase().split(" ")[0];
		}
		if (g.length>0) {
			if (islegal(g)) {
				lastword=g;
				$.ajax({
					url: 'wordsup.php',
					type: 'post',
					data: { 'word':  g},
					cache: false,
					success: function (data) {
					
					},
					async: false
				});
				update(g);
				guesses[guesscount]=g;
				guesscount++;
				potcount=guesscount;
				update(potdiv);
				update(turndiv);
				document.f.guess.value="";
			}
		}
	} else {
		display("It's not your turn!");
	}
}

function update() {
	update(0);
}

function update(option) {
	if (option>=0 && option<=4) {
		if (option==0 || option==1) {
			document.getElementById("pot").innerHTML="POT: "+potcount;
		};
		if (option==0 || option==2) {
			document.getElementById("score").innerHTML="SCORE: "+score;
		};
		if (option==0 || option==3) {
			if (yourturn) {
				document.getElementById("turn").innerHTML="Your turn!";
			} else {
				document.getElementById("turn").innerHTML="Your turn!";
			};
		};
		if (option==0 || option==4) {
			//document.getElementById("players").innerHTML=playercount;
		};
	} else {
		if (document.getElementById("history").value.length>1) {
			document.getElementById("history").value=document.getElementById("history").value+option+"\n";
		} else {
			document.getElementById("history").value=option+"\n";
		}
		document.getElementById("history").scrollTop=document.getElementById("history").scrollHeight;
	}
}

function islegal(newword) {
	if (lastword=="") {
		return isword(newword);
	} else {
		if ( ((lastword.length-newword.length)<-1 || (lastword.length-newword.length)>1) && lastword.length>0 ) {
			return false;
		} else {
			if (lastword.length>0) {
				return checkword(lastword, newword, 0);
			};
		}
	}
}

function checkword(lastword, newword, passes) {
	if (passes<2) {
		if (lastword.length>newword.length) {
			for (i=0; i<lastword.length; i++) {
				if (lastword.charAt(i)!=newword.charAt(i)) {
					temp=newword.substring(0,i)+"_"+newword.substring(i,newword.length);
					i=lastword.length+1;
				}
			}
			return checkword(lastword, temp, passes+1);
		} else if (lastword.length<newword.length) {
			for (i=0; i<newword.length; i++) {
				if (lastword.charAt(i)!=newword.charAt(i)) {
					temp=lastword.substring(0,i)+"_"+lastword.substring(i,lastword.length);
					i=lastword.length+1;
				}
			}
			return checkword(temp, newword, passes+1);
		} else {
			strike=false;
			for (i=0; i<lastword.length; i++) {
				if (lastword.charAt(i)!=newword.charAt(i)) {
					if (strike) {
						display("Words are more than 1 letter in difference.");
						return false;
					}
					strike=true;
				}
			}
			if (strike) {
				if (newword.indexOf('_')!=-1) {
					if (newword.indexOf('_')==newword.length-1) {
						newword=newword.split('_')[0];
					} else {
						newword=newword.split('_')[0]+newword.split('_')[1];
					}
				}
				return notguessed(newword);
			} else {
				display("Words are the same.");
				return false;
			}
		}
	}
	//display("Words are more than 1 letter in difference.");
	return false;
}

function notguessed(newword) {
	for (i=0; i<guesscount; i++) {
		if (guesses[i]==newword) {
			alert(guesses[i]+" vs "+newword);
			display("'"+newword+"' has already been played.");
			return false;
		}
	}
	return isword(newword);
}

function isword(newword) {
	for (i=0; i<dictionary.length; i++) {
		if (newword==dictionary[i]) {
			display("'"+newword+"' found!");
			return true;
		}
	}
	display("'"+newword+"' not found.");
	return false;
}

function loaddictionary() {
	nopre=document.getElementById("dictionary").contentWindow.document.body.innerHTML.split("<pre>")[1];
	nopre=nopre.split("</pre>")[0];
	dictionary=nopre.split("\n");
	document.getElementById("iframediv").innerHTML="&nbsp;";
}

function buy() {
	yourturn=true;
	if (yourturn) {
		if (score>9) {
			var answer=new Array();
			answercount=0;
			for (k=0; k<dictionary.length; k++) {
				if ( (dictionary[k].length-lastword.length)<2 && (dictionary[k].length-lastword.length)>-2 ) {
					if (checkword(lastword,dictionary[k],0)) {
						answer[answercount]=dictionary[k];
						answercount++;
					}
				}
			}
			if (answercount>0) {
				rand=Math.floor((Math.random()*answercount)+1)-1;
				ans=answer[rand];
				score=score-10;
				potcount=potcount+10;
				display("You bought the answer: "+ans+".");
				lastword=ans;
				update(ans);
				update(scorediv);
			}
		} else if (lastword=="") {
			display("You can't buy the starting word.");
		} else {
			display("You don't have enough points.");
		}
	} else {
		display("It's not your turn!");
	}
}

function giveup() {
	yourturn=true;
	if (yourturn) {
		if (lastword!="") {
			score=score+guesscount;
			display(lastword+" wins with a score of "+score+"!");
			document.getElementById("score").innerHTML="SCORE: "+score;
			clear();
		} else {
			display("You can't give up before the first word.");
		}
	} else {
		display("It's not your turn!");
	}
}

function clear() {
	lastword="";
	guesscount=0;
	document.getElementById('history').value='';
	document.getElementById("pot").innerHTML="POT: "+potcount;
	display("Choose a word to start!");
}