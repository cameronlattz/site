const seventyOne = function() {
	"using strict";
	let _container = null;
	let _running = false;

	const _init = function(languages) {
		if (!_running) {
            _running = true;
            _container = document.getElementById("container71");
            _container.classList.add("loading");
            setTimeout(function() {
                _container.classList.remove("loading");
                _container.classList.add("loaded");
                const containers = document.getElementById("contentContainer").children;
                const tvContainers = _container.querySelector("#contentContainerTv").children;
                for (let i = 0; i < containers.length; i++) {
                    tvContainers[i+1].innerHTML = containers[i].innerHTML;
                }
            }, 500);
            _moveNavbar();
		}
    }

	const _moveNavbar = function() {
        const navbar = _container.getElementsByClassName("navbar-container")[0];
		navbar.classList.add("loaded");
    }

    const _revert = function() {
		if (_running) {
            _running = false;
            _container.classList.remove("loaded");
            const navbar = _container.getElementsByClassName("navbar-container")[0];
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