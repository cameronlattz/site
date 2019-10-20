var sixtyFive = function() {
	"using strict";
	var _container = null;
	var _running = false;

	var _init = function(languages) {
		if (!_running) {
            _running = true;
            _container = document.getElementById("container65");
            _container.classList.add("loading");
            setTimeout(function() {
                _container.classList.remove("loading");
                _container.classList.add("loaded");
                var containers = document.getElementById("contentContainer").children;
                var tvContainers = _container.querySelector("#contentContainerTv").children;
                for (var i = 0; i < containers.length; i++) {
                    tvContainers[i+1].innerHTML = containers[i].innerHTML;
                }
            }, 500);
            _moveNavbar();
		}
    }

	var _moveNavbar = function() {
        var navbar = _container.getElementsByClassName("navbar-container")[0];
		navbar.classList.add("loaded");
    }

    var _revert = function() {
		if (_running) {
            _running = false;
            _container.classList.remove("loaded");
            var navbar = _container.getElementsByClassName("navbar-container")[0];
            navbar.classList.remove("loaded");
            return true;
        }
    }

    var _visible = function() {}

	return {
		about: "<a href=\"scripts/65.js\">Vanilla JS</a>+<a href=\"styles/65.css\">CSS</a>",
		className: "sixtyFive",
		init: _init,
		revert: _revert,
		visible: _visible
	}
}();