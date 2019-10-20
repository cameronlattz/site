var eightySeven = function() {
	"using strict";
	var _container = null;
	var _color = "#888";
	var _svg = null;
	var _delay = 15;
	var _timeout = 500;
	var _lineSpacing = 25;
	var _horizontalLineCount = 0;
	var _maxHorizontalLineCount = null;
	var _verticalLineCount = 0;
	var _maxVerticalLineCount = null;
	var _horizontalRainbowCount = 0;
	var _verticalRainbowCount = 0;
	var _running = false;
	var _interval = null;

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

	var _drawVerticalLines = function (ms) {
		var delay = (_timeout)/_maxVerticalLineCount;
		if (_verticalLineCount < _maxVerticalLineCount) {
			_drawVerticalLine(_verticalLineCount * _lineSpacing);
			setTimeout(function() {
				if (_running) {
					_verticalLineCount++;
					_drawVerticalLines(delay);
				}
			}, ms);
		}
		if (_verticalLineCount === _maxVerticalLineCount){
			var windowHeight = window.innerHeight;
			_maxHorizontalLineCount = Math.ceil((windowHeight + 1) / _lineSpacing);
			_moveNavbar();
			_drawHorizontalLines(delay);
		}
	}

	var _drawHorizontalLines = function (ms) {
		var delay = (_timeout)/_maxHorizontalLineCount;
		if (_horizontalLineCount < _maxHorizontalLineCount) {
			_drawHorizontalLine(_horizontalLineCount * _lineSpacing);
			setTimeout(function() {
				if (_running) {
					_horizontalLineCount++;
					_drawHorizontalLines(delay);
				}
			}, ms);
		}
		if (_horizontalLineCount === _maxHorizontalLineCount) {
			setTimeout(function() {
				if (_running) {
					_moveHorizontalRainbowBeams(delay);
				}
			}, _timeout);
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

	var _init = function(languages) {
		if (!_running) {
			_container = document.getElementById("container87");
			_running = true;
			var windowWidth = window.innerWidth;
			_maxVerticalLineCount = Math.ceil((windowWidth + 1) / _lineSpacing);
			_svg = _container.querySelector("#grid");
			_showCutout();
			_container.querySelector("#languages87").innerHTML = "";
			for (var i = 0; i < languages.length - 1; i++) {
				var span = document.createElement("span");
				span.innerHTML = languages[i] === "JavaScript" ? "JS" : languages[i];
				_container.querySelector("#languages87").append(span);
			}
		}
	}

	var _moveNavbar = function() {
		var navbar = _container.getElementsByClassName("navbar")[0];
		navbar.parentNode.classList.add("loaded");
	}

	var _moveHorizontalRainbowBeams = function (ms) {
		if (_horizontalRainbowCount < 5) {
			_moveHorizontalRainbowBeam(_horizontalRainbowCount);
			setTimeout(function() {
				if (_running) {
					_horizontalRainbowCount++;
					_moveHorizontalRainbowBeams(_delay);
				}
			}, ms*5);
		} else {
			setTimeout(function() {
				if (_running) {
					_moveVerticalRainbowBeams();
				}
			}, _timeout/2);
		}
	}

	var _moveHorizontalRainbowBeam = function(i) {
		var topRainbowContainer = _container.querySelector("#topRainbow");
		var beam = topRainbowContainer.children[i];
		beam.classList.add("loaded");
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
				if (_running) {
					_showText();
				}
			}, _timeout);
		}
	}

	var _moveVerticalRainbowBeam = function(i) {
		var bottomRainbowContainer = _container.querySelector("#bottomRainbow");
		var beam = bottomRainbowContainer.children[i];
		beam.classList.add("loaded");
	}

	var _revert = function() {
		if (_running) {
			_running = false;
			clearInterval(_interval);
			_interval = null;
			_svg.innerHTML = "";
			_container.querySelector("#cutOut").classList.add("opacity-0");
			_container.querySelector("#cutOut").classList.remove("opacity-1");
			_container.querySelector("#vhs").classList.remove("opacity-1");
			_container.querySelector("#vhs").classList.add("opacity-0");
			_container.querySelector("#name87").classList.remove("opacity-1");
			_container.querySelector("#name87").classList.add("opacity-0");
			_container.querySelector("#title87").classList.remove("opacity-1");
			_container.querySelector("#title87").classList.add("opacity-0");
			_container.querySelector("#info87").classList.remove("opacity-1");
			_container.querySelector("#info87").classList.add("opacity-0");
			_container.querySelector("#backgroundContainer87").getElementsByClassName("navbar-container")[0].classList.remove("loaded");
			var topRainbowChildren = _container.querySelector("#topRainbow").children;
			for (var i = 0; i < topRainbowChildren.length; i++) {
				topRainbowChildren[i].classList.remove("loaded");
			}
			var bottomRainbowChildren = _container.querySelector("#bottomRainbow").children;
			for (var i = 0; i < bottomRainbowChildren.length; i++) {
				bottomRainbowChildren[i].classList.remove("loaded");
				setTimeout(function() {
					bottomRainbowChildren[i].classList.remove("loaded");
				}, _timeout);
			}
			_horizontalLineCount = 0;
			_maxHorizontalLineCount = null;
			_verticalLineCount = 0;
			_maxVerticalLineCount = null;
			_horizontalRainbowCount = 0;
			_verticalRainbowCount = 0;
			return true;
		}
	}

	var _showText = function() {
		var vhs = _container.querySelector("#vhs");
		vhs.classList.add("opacity-1");
		vhs.classList.remove("opacity-0");
		setTimeout(function() {
			if (_running) {
				var name = _container.querySelector("#name87");
				name.classList.add("opacity-1");
				name.classList.remove("opacity-0");
			}
		}, _timeout);
		setTimeout(function() {
			if (_running) {
				var title = _container.querySelector("#title87");
				title.classList.add("opacity-1");
				title.classList.remove("opacity-0");
			}
		}, _timeout*2);
		setTimeout(function() {
			if (_running) {
				var info = _container.querySelector("#info87");
				info.classList.add("opacity-1");
				info.classList.remove("opacity-0");
			}
		}, _timeout*3);
		setTimeout(function() {
			if (_running && _interval === null) {
				_interval = setInterval(function() {
					var languages = _container.querySelector("#languages87").children;
					var activeIndex = -1;
					for (var i = 0; i < languages.length; i++) {
						if (languages[i].classList.contains("active")) {
							languages[i].classList.remove("active");
							activeIndex = i;
							break;
						}
					}
					if (activeIndex === languages.length - 1) {
						activeIndex = -1;
					}
					languages[activeIndex + 1].classList.add("active");
				}, _timeout*4);
			}
		}, _timeout*2);
	}

	var _showCutout = function() {
		_container.querySelector("#cutOut").classList.remove("opacity-0");
		_container.querySelector("#cutOut").classList.add("opacity-1");
		setTimeout(function() {
			if (_running) {
				_drawVerticalLines(0);
			}
		}, _timeout);
	}

    return {
		about: "<a href=\"scripts/87.js\">Vanilla JS</a> and <a href=\"styles/87.css\">CSS</a>.",
		className: "eightySeven",
        init: _init,
		revert: _revert
    }
}();