var script = function() {
	var year = "Eighties";
	window.addEventListener("load", function() {
		document.getElementById("homeContent" + year).style.display = "block";
		var spans = document.getElementsByClassName("navbar-item");
		for (var i = 0; i < spans.length; i++) {
			spans[i].addEventListener("click", function() {
				var spans = document.getElementsByClassName("navbar-item");
				for (var j = 0; j < spans.length; j++) {
					if (spans[j] !== this) {
						spans[j].classList.remove("active");
					} else {
						spans[j].classList.add("active");
					}
				}
				var target = this.attributes["data-target"].value + "Content";
				if (target === "homeContent") {
					target = target + year;
				}
				var navbarItems = ["homeContent"+year, "aboutContent", "projectsContent", "contactContent"];
				for (var j = 0; j < navbarItems.length; j++) {
					if (navbarItems[j] === target) {
						document.getElementById(target).style.display = "block";
					} else {
						document.getElementById(navbarItems[j]).style.display = "none";
					}
				}
			});
		}
		eighties(15, 25);
	});
}();

var eighties = function(delay, lineSpacing) {
	var _color = "#888";
	var _delay = delay;
	var _lineSpacing = lineSpacing;
	var _svg = null;
	var _topRainbowContainer = null;
	var _bottomRainbowContainer = null;
	var _verticalLineCount = 0;
	var _maxVerticalLineCount = null;
	var _horizontalLineCount = 0;
	var _maxHorizontalLineCount = null;
	var _horizontalRainbowCount = 0;
	var _verticalRainbowCount = 0;
	
	var _init = function() {
		var windowWidth = window.innerWidth;
		_maxVerticalLineCount = Math.ceil((windowWidth + 1) / _lineSpacing);
		_svg = document.getElementById("grid");
		_topRainbowContainer = document.getElementById("topRainbow");
		_bottomRainbowContainer = document.getElementById("bottomRainbow");
		_drawVerticalLines(_delay);
	}
	
	var _drawVerticalLines = function (ms) {
		if (_verticalLineCount < 2160/_lineSpacing) {
			_drawVerticalLine(_verticalLineCount * _lineSpacing);
			setTimeout(function() {
				_verticalLineCount++;
				_drawVerticalLines(_delay);
			}, ms);
		}
		if (_verticalLineCount === _maxVerticalLineCount){
			var windowHeight = window.innerHeight;
			_maxHorizontalLineCount = Math.ceil((windowHeight + 1) / _lineSpacing);
			_moveNavbar();
			_drawHorizontalLines(_delay);
		}
	}
	
	var _drawVerticalLine = function(x) {
		var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
		line.setAttributeNS(null, 'x1', x);
		line.setAttributeNS(null, 'y1', 0);
		line.setAttributeNS(null, 'x2', x);
		line.setAttributeNS(null, 'y2', 2160);
		line.setAttributeNS(null, 'stroke', _color);
		line.setAttributeNS(null, 'stroke-width', "1");
		_svg.appendChild(line);
	}
	
	var _drawHorizontalLines = function (ms) {
		if (_horizontalLineCount < 3840/_lineSpacing) {
			_drawHorizontalLine(_horizontalLineCount * _lineSpacing);
			setTimeout(function() {
				_horizontalLineCount++;
				_drawHorizontalLines(_delay);
			}, ms);
		}
		if (_horizontalLineCount === _maxHorizontalLineCount) {
			setTimeout(function() {
				_moveHorizontalRainbowBeams();
			}, 500);
		}
	}
	
	var _drawHorizontalLine = function(y) {
		var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
		line.setAttributeNS(null, 'x1', 0);
		line.setAttributeNS(null, 'y1', y);
		line.setAttributeNS(null, 'x2', 3840);
		line.setAttributeNS(null, 'y2', y);
		line.setAttributeNS(null, 'stroke', _color);
		line.setAttributeNS(null, 'stroke-width', "1");
		_svg.appendChild(line);
	}
	
	var _moveHorizontalRainbowBeams = function (ms) {
		if (_horizontalRainbowCount < 5) {
			_moveHorizontalRainbowBeam(_horizontalRainbowCount);
			setTimeout(function() {
				_horizontalRainbowCount++;
				_moveHorizontalRainbowBeams(_delay);
			}, ms*5);
		} else {
			setTimeout(function() {
				_moveVerticalRainbowBeams();
			}, 250);
		}
	}
	
	var _moveNavbar = function(i) {
		var navbar = document.getElementById("navbarContainer");
		navbar.classList.add("left-13");
	}
	
	var _moveHorizontalRainbowBeam = function(i) {
		var beam = _topRainbowContainer.children[i];
		beam.classList.add("margin-left-0");
	}
	
	var _moveVerticalRainbowBeams = function (ms) {
		if (_verticalRainbowCount < 6) {
			_moveVerticalRainbowBeam(_verticalRainbowCount);
			setTimeout(function() {
				_verticalRainbowCount++;
				_moveVerticalRainbowBeams(_delay);
			}, ms*5);
		} else {
			setTimeout(function() {
				_showText();
			}, 500);
		}
	}
	
	var _moveVerticalRainbowBeam = function(i) {
		var beam = _bottomRainbowContainer.children[i];
		beam.classList.add("bottom-0");
	}
	
	var _showText = function() {
		var vhs = document.getElementById("vhs");
		vhs.classList.add("opacity-100");
		vhs.classList.remove("opacity-0");
		setTimeout(function() {
			var name = document.getElementById("name");
			name.classList.add("opacity-100");
			name.classList.remove("opacity-0");
		}, 500);
		setTimeout(function() {
			var title = document.getElementById("title");
			title.classList.add("opacity-100");
			title.classList.remove("opacity-0");
		}, 1000);
		setTimeout(function() {
			var info = document.getElementById("info");
			info.classList.add("opacity-100");
			info.classList.remove("opacity-0");
		}, 1500);
		setTimeout(function() {
			var ratingContainer = document.getElementById("ratingContainer");
			ratingContainer.classList.add("opacity-100");
			ratingContainer.classList.remove("opacity-0");
		}, 2500);
	}
	
	_init();
};