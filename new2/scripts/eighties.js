const eighties = function(delay, lineSpacing) {
	const _color = "#888";
	let _svg = null;
	const _delay = delay;
	const _lineSpacing = lineSpacing;
	let _horizontalLineCount = 0;
	let _maxHorizontalLineCount = null;
	let _verticalLineCount = 0;
	let _maxVerticalLineCount = null;
	let _horizontalRainbowCount = 0;
	let _verticalRainbowCount = 0;
	let running = false;
	
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
				_verticalLineCount++;
				_drawVerticalLines(_delay);
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
	
	const _moveNavbar = function(i) {
		const navbar = document.getElementById("navbar");
		navbar.parentNode.classList.add("loaded");
	}
	
	const _moveHorizontalRainbowBeams = function (ms) {
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
	
	const _showText = function() {
		const vhs = document.getElementById("vhs");
		vhs.classList.add("opacity-1");
		vhs.classList.remove("opacity-0");
		setTimeout(function() {
			const name = document.getElementById("name80s");
			name.classList.add("opacity-1");
			name.classList.remove("opacity-0");
		}, 500);
		setTimeout(function() {
			const title = document.getElementById("title80s");
			title.classList.add("opacity-1");
			title.classList.remove("opacity-0");
		}, 1000);
		setTimeout(function() {
			const info = document.getElementById("info80s");
			info.classList.add("opacity-1");
			info.classList.remove("opacity-0");
		}, 1500);
		setTimeout(function() {
			const ratingContainer = document.getElementById("ratingContainer");
			ratingContainer.classList.add("opacity-1");
			ratingContainer.classList.remove("opacity-0");
		}, 2500);
	}
	
	const _init = function() {
		var windowWidth = window.innerWidth;
		_maxVerticalLineCount = Math.ceil((windowWidth + 1) / _lineSpacing);
		_svg = document.getElementById("grid");
		_drawVerticalLines(_delay);
    }

    return {
        move: function(top) {
			if (!running) {
				_init();
				running = true;
			}
        }
    }
};