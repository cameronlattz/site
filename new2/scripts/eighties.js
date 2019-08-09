const eighties = function(delay, lineSpacing) {
	const _color = "#888";
	let _svg = null;
	var _delay = delay;
	var _lineSpacing = lineSpacing;
	let _verticalLineCount = 0;
	let _maxVerticalLineCount = null;
	
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
		if (_verticalLineCount < 2160/_lineSpacing) {
			_drawVerticalLine(_verticalLineCount * _lineSpacing);
			setTimeout(function() {
				_verticalLineCount++;
				_drawVerticalLines(_delay);
			}, ms);
		}
	}
	
	const _init = function() {
		var windowWidth = window.innerWidth;
		_maxVerticalLineCount = Math.ceil((windowWidth + 1) / _lineSpacing);
		_svg = document.getElementById("grid");
		_topRainbowContainer = document.getElementById("topRainbow");
		_bottomRainbowContainer = document.getElementById("bottomRainbow");
		_drawVerticalLines(_delay);
    }
    _init();

    return {
        move: function(top) {
            document.getElementById("vhsLogo").style.top = top * 0.9 + "px";
        }
    }
};