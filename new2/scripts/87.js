const eightySeven = function() {
	"using strict";
	let _container = null;
	const _color = "#888";
	let _svg = null;
	const _delay = 15;
	const _timeout = 500;
	const _lineSpacing = 25;
	let _horizontalLineCount = 0;
	let _maxHorizontalLineCount = null;
	let _verticalLineCount = 0;
	let _maxVerticalLineCount = null;
	let _horizontalRainbowCount = 0;
	let _verticalRainbowCount = 0;
	let _running = false;
	let _interval = null;
	
	const _drawVerticalLine = function(x) {
		var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
		line.setAttributeNS(null, 'x1', x);
		line.setAttributeNS(null, 'y1', 0);
		line.setAttributeNS(null, 'x2', x);
		line.setAttributeNS(null, 'y2', 2160);
		line.setAttributeNS(null, 'stroke', _color);
		line.setAttributeNS(null, 'stroke-width', "1");
		_svg.appendChild(line);
    }
    
	const _drawVerticalLines = function (ms) {
		if (_verticalLineCount < 2160/_lineSpacing) {
			_drawVerticalLine(_verticalLineCount * _lineSpacing);
			setTimeout(function() {
				if (_running) {
					_verticalLineCount++;
					_drawVerticalLines(_delay);
				}
			}, ms);
		}
		if (_verticalLineCount === _maxVerticalLineCount){
			const windowHeight = window.innerHeight;
			_maxHorizontalLineCount = Math.ceil((windowHeight + 1) / _lineSpacing);
			_moveNavbar();
			_drawHorizontalLines(_delay);
		}
	}
	
	const _drawHorizontalLines = function (ms) {
		if (_horizontalLineCount < 3840/_lineSpacing) {
			_drawHorizontalLine(_horizontalLineCount * _lineSpacing);
			setTimeout(function() {
				if (_running) {
					_horizontalLineCount++;
					_drawHorizontalLines(_delay);
				}
			}, ms);
		}
		if (_horizontalLineCount === _maxHorizontalLineCount) {
			setTimeout(function() {
				if (_running) {
					_moveHorizontalRainbowBeams();
				}
			}, _timeout);
		}
	}
	
	const _drawHorizontalLine = function(y) {
		const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
		line.setAttributeNS(null, 'x1', 0);
		line.setAttributeNS(null, 'y1', y);
		line.setAttributeNS(null, 'x2', 3840);
		line.setAttributeNS(null, 'y2', y);
		line.setAttributeNS(null, 'stroke', _color);
		line.setAttributeNS(null, 'stroke-width', "1");
		_svg.appendChild(line);
	}
	
	const _init = function(languages) {
		if (!_running) {
			_container = document.getElementById("container87");
			_running = true;
			var windowWidth = window.innerWidth;
			_maxVerticalLineCount = Math.ceil((windowWidth + 1) / _lineSpacing);
			_svg = _container.querySelector("#grid");
			_showCutout(_delay);
			_container.querySelector("#languages87").innerHTML = "";
			for (let i = 0; i < languages.length - 1; i++) {
				const span = document.createElement("span");
				span.innerHTML = languages[i] === "JavaScript" ? "JS" : languages[i];
				_container.querySelector("#languages87").append(span);
			}
		}
	}
	
	const _moveNavbar = function() {
		const navbar = _container.getElementsByClassName("navbar")[0];
		navbar.parentNode.classList.add("loaded");
	}
	
	const _moveHorizontalRainbowBeams = function (ms) {
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
	
	const _moveHorizontalRainbowBeam = function(i) {
		const topRainbowContainer = _container.querySelector("#topRainbow");
		const beam = topRainbowContainer.children[i];
		beam.classList.add("loaded");
	}

	const _moveVerticalRainbowBeams = function (ms) {
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
	
	const _moveVerticalRainbowBeam = function(i) {
		const bottomRainbowContainer = _container.querySelector("#bottomRainbow");
		var beam = bottomRainbowContainer.children[i];
		beam.classList.add("loaded");
	}
	
	const _revert = function() {
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
			const topRainbowChildren = _container.querySelector("#topRainbow").children;
			for (let i = 0; i < topRainbowChildren.length; i++) {
				topRainbowChildren[i].classList.remove("loaded");
			}
			const bottomRainbowChildren = _container.querySelector("#bottomRainbow").children;
			for (let i = 0; i < bottomRainbowChildren.length; i++) {
				bottomRainbowChildren[i].classList.remove("loaded");
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
	
	const _showText = function() {
		const vhs = _container.querySelector("#vhs");
		vhs.classList.add("opacity-1");
		vhs.classList.remove("opacity-0");
		setTimeout(function() {
			if (_running) {
				const name = _container.querySelector("#name87");
				name.classList.add("opacity-1");
				name.classList.remove("opacity-0");
			}
		}, _timeout);
		setTimeout(function() {
			if (_running) {
				const title = _container.querySelector("#title87");
				title.classList.add("opacity-1");
				title.classList.remove("opacity-0");
			}
		}, _timeout*2);
		setTimeout(function() {
			if (_running) {
				const info = _container.querySelector("#info87");
				info.classList.add("opacity-1");
				info.classList.remove("opacity-0");
			}
		}, _timeout*3);
		setTimeout(function() {
			if (_running && _interval === null) {
				_interval = setInterval(function() {
					const languages = _container.querySelector("#languages87").children;
					let activeIndex = -1;
					for (let i = 0; i < languages.length; i++) {
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

	const _showCutout = function(delay) {
		_container.querySelector("#cutOut").classList.remove("opacity-0");
		_container.querySelector("#cutOut").classList.add("opacity-1");
		setTimeout(function() {
			if (_running) {
				_drawVerticalLines(delay);
			}
		}, _timeout);
	}

	const _visible = function() {
		_container.querySelector("#aboutThisPage").innerHTML = "Vanilla JavaScript+CSS.";
		_container.querySelector("#contentContainer").classList.add("show");
	}

    return {
		about: "<a href=\"scripts/87.js\">Vanilla JS</a> and <a href=\"styles/87.css\">CSS</a>.",
		className: "eightySeven",
        init: _init,
		revert: _revert,
		visible: _visible
    }
}();