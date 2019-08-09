
var helper = (function () {
	"use strict";
	
	return {
		ajax: function() {
			var xmlhttp = false;
			var xmlhttp = false;
			try {
				xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
			} catch(e) {
				try {
					xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
				} catch(E) {
					xmlhttp = false;
				}
			}
			if (!xmlhttp && typeof XMLHttpRequest !== 'undefined') {
				xmlhttp = new XMLHttpRequest();
			}
			return xmlhttp;
		},
		copyToClipboard: function (text, name) {
			var textArea = document.createElement("textarea");
			textArea.style.position = "fixed";
			textArea.style.top = -999;
			textArea.style.left = -999;
			textArea.style.width = "2em";
			textArea.style.height = "2em";
			textArea.value = text;
			document.body.appendChild(textArea);
			textArea.select();
			var successful = false;
			try {
				successful = document.execCommand("copy");
			} catch (err) {}
			var msg = successful ? "Copied" : "Failed to copy";
			helper.notify({
				text: msg + " " + name + " to clipboard.",
				type: successful ? "success" : "error"
			});
			document.body.removeChild(textArea);
		},
		exists: function(obj) {
			if (obj !== "undefined" && obj !== void(0)) {
				return true;
			}
			return false;
		},
		notify: function(options) {
			options.title = options.title || null;
			options.text = options.text || null;
			options.type = options.type || "notify";
			if (helper.exists(typeof vNotify)) {
				vNotify[options.type](options);
			} else {
				if (options.title !== null) {
					console.log(options.title + ": " + options.text);
				} else {
					console.log(options.text);
				}
			}
		},
		onLoad: function(func) {
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
	}
})();