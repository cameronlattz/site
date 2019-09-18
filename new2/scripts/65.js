const sixtyFive = function() {
	"using strict";
	let _container = null;
	let _running = false;

	const _init = function(languages) {
		if (!_running) {
			_container = document.getElementById("container65");
            _running = true;
            _moveNavbar();
		}
    }
	
	const _moveNavbar = function() {
        const navbar = _container.getElementsByClassName("navbar-container")[0];
		navbar.classList.add("loaded");
    }
    
    const _revert = function(force) {
		if (_running || force) {
            _running = false;
            const navbar = _container.getElementsByClassName("navbar-container")[0];
            navbar.classList.remove("loaded");
            if (!force) {
                setTimeout(function() {
                    _revert(true);
                }, 1000);
            }
            return true;
        }
    }
    
    const _visible = function() {}

	return {
		about: "<a href=\"scripts/65.js\">Vanilla JS</a>+<a href=\"styles/65.css\">CSS</a>",
		className: "sixtyFive",
		init: _init,
		revert: _revert,
		visible: _visible
	}
}();