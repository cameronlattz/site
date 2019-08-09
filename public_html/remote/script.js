
var remote = (function () {
	"use strict";
	
	var optiplex = {name: "optiplex", state: -1}; // -1 = unknown, 0 = off, 1 = booting, 2 = on
	var phantom = {name: "phantom", state: -1};
	var toshiba = {name: "toshiba", state: -1};
	var computers = [optiplex, phantom, toshiba];
	
	function click(buttonDiv) {
		for (var i = 0; i < computers.length; i++) {
			if (buttonDiv.parentElement.classList.contains(computers[i].name)) {
				if (computers[i].state < 1) {
					//changeState(computers[i]);
				};
				var booting = callWolPage(computers[i], true);
				if (booting === 1) {
					computers[i].state = 1;
					changeState(computers[i]);
					checkState(computers[i]);
				};
				break;
			};
		};
	};

	function checkState(computer) {
		callWolPage(computer, false);
	}

	function callWolPage(computer, stateKnown) {
		var url = "http://cameronlattz.dynu.com:85/wol.php?computer=" + computer.name;
		if (stateKnown) url += "?boot=true";
		var ajax = helper.ajax(); 
		ajax.open("GET", url, true); 
		ajax.onreadystatechange = function() {
			if (ajax.readyState === 4) {
				if (ajax.status === 200) {
					var response = ajax.responseText === "1" ? "2" : "0";
					computer.state = Number(response);
					changeState(computer);
				};
			};
		};
		ajax.send(null);
	};

	function changeState(computer) {
		var states = ["unknown", "off", "booting", "on"];
		var computerDiv = document.getElementsByClassName(computer.name)[0];
		for (var i = 0; i < states.length; i++) {
			var powerButtons = computerDiv.querySelectorAll("." + states[i]);
			if (powerButtons.length > 0) {
				powerButtons[0].src = powerButtons[0].src.split("-")[0] + "-" + states[computer.state+1] + ".png";
				return true;
			};
		};
		return false;
	};
	
	return {
		init: function() {
			for (var i = 0; i < computers.length; i++) {
				callWolPage(computers[i], false);
			};
			var powerButtons = document.querySelectorAll(".power-button");
			for (var i = 0; i < powerButtons.length; i++) {
				powerButtons[i].addEventListener("click", function(event) {
					click(this);
				});
			};
			var clipboardButtons = document.querySelectorAll(".clipboard-button");
			for (var i = 0; i <clipboardButtons.length; i++) {
				clipboardButtons[i].addEventListener("click", function(event) {
					var html = this.parentNode.innerHTML;
					var code = html.split("</b>")[1].split("<input")[0].trim();
					helper.copyToClipboard(code, "alias");
				});
			};
		}
	}
})();

helper.onLoad(remote.init);