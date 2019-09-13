const eightySeven = function() {
	"using strict";
	const _color = "#888";
	let _svg = null;
	const _delay = 15;
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
			}, 500);
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
			_running = true;
			var windowWidth = window.innerWidth;
			_maxVerticalLineCount = Math.ceil((windowWidth + 1) / _lineSpacing);
			_svg = document.getElementById("grid");
			_showCutout(_delay);
			document.getElementById("languages87").innerHTML = "";
			for (let i = 0; i < languages.length - 1; i++) {
				const span = document.createElement("span");
				span.innerHTML = languages[i] === "JavaScript" ? "JS" : languages[i];
				document.getElementById("languages87").append(span);
			}
		}
	}
	
	const _moveNavbar = function(i) {
		const navbar = document.getElementById("navbar");
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
			}, 250);
		}
	}
	
	const _moveHorizontalRainbowBeam = function(i) {
		const topRainbowContainer = document.getElementById("topRainbow");
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
				_showText();
			}, 500);
		}
	}
	
	const _moveVerticalRainbowBeam = function(i) {
		const bottomRainbowContainer = document.getElementById("bottomRainbow");
		var beam = bottomRainbowContainer.children[i];
		beam.classList.add("loaded");
	}
	
	const _revert = function() {
		if (_running) {
			_running = false;
			clearInterval(_interval);
			_svg.innerHTML = "";
			document.getElementById("cutOut").classList.remove("opacity-1");
			document.getElementById("cutOut").classList.add("opacity-0");
			document.getElementById("vhs").classList.remove("opacity-1");
			document.getElementById("vhs").classList.add("opacity-0");
			document.getElementById("name87").classList.remove("opacity-1");
			document.getElementById("name87").classList.add("opacity-0");
			document.getElementById("title87").classList.remove("opacity-1");
			document.getElementById("title87").classList.add("opacity-0");
			document.getElementById("info87").classList.remove("opacity-1");
			document.getElementById("info87").classList.add("opacity-0");
			document.getElementById("backgroundContainer87").getElementsByClassName("navbar-container")[0].classList.remove("loaded");
			const topRainbowChildren = document.getElementById("topRainbow").children;
			for (let i = 0; i < topRainbowChildren.length; i++) {
				topRainbowChildren[i].classList.remove("loaded");
			}
			const bottomRainbowChildren = document.getElementById("bottomRainbow").children;
			for (let i = 0; i < bottomRainbowChildren.length; i++) {
				bottomRainbowChildren[i].classList.remove("loaded");
			}
			_horizontalLineCount = 0;
			_maxHorizontalLineCount = null;
			_verticalLineCount = 0;
			_maxVerticalLineCount = null;
			_horizontalRainbowCount = 0;
			_verticalRainbowCount = 0;
		}
	}
	
	const _showText = function() {
		const vhs = document.getElementById("vhs");
		vhs.classList.add("opacity-1");
		vhs.classList.remove("opacity-0");
		setTimeout(function() {
			if (_running) {
				const name = document.getElementById("name87");
				name.classList.add("opacity-1");
				name.classList.remove("opacity-0");
			}
		}, 500);
		setTimeout(function() {
			if (_running) {
				const title = document.getElementById("title87");
				title.classList.add("opacity-1");
				title.classList.remove("opacity-0");
			}
		}, 1000);
		setTimeout(function() {
			if (_running) {
				const info = document.getElementById("info87");
				info.classList.add("opacity-1");
				info.classList.remove("opacity-0");
			}
		}, 1500);
		_interval = setInterval(function() {
			const languages = document.getElementById("languages87").children;
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
		}, 2000);
	}

	const _showCutout = function(delay) {
		document.getElementById("cutOut").classList.remove("opacity-0");
		document.getElementById("cutOut").classList.add("opacity-1");
		setTimeout(function() {
			if (_running) {
				_drawVerticalLines(delay);
			}
		}, 500);
	}

	const _visible = function() {
		document.getElementById("aboutThisPage").innerHTML = "Vanilla JavaScript+CSS.";
		document.getElementById("contentContainer").classList.add("show");
	}

    return {
		about: "Vanilla JS and CSS.",
		className: "eighties",
        init: _init,
		revert: _revert,
		visible: _visible
    }
}();