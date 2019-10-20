var seventyOne = function() {
	"using strict";
	var _container = null;
	var _running = false;

	var _init = function(languages) {
		if (!_running) {
            _running = true;
            _container = document.getElementById("container71");
            _container.classList.add("loading");
            var video = document.getElementById("video71");
            video.play();
            video.currentTime = 0;
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

	return {
		about: "<a href=\"scripts/71.js\">Vanilla JS</a>+<a href=\"styles/71.css\">CSS</a>",
		className: "seventyOne",
		init: _init,
		revert: _revert
	}
}();