const header = function() {
    "using strict";
    let _container = null;
    let _typewriter = null;
    let _running = false;

    const _displayDropdownMenu = function() {
        const menu = document.getElementById("dropdownMenuHeader");
        if (menu.classList.contains("show")) {
            menu.classList.remove("show");
        } else {
            menu.classList.add("show");
        }
    }

    const _init = function(languages) {
        if (!_running) {
            _running = true;
            _container = document.getElementById("containerHeader");
            const containers = document.getElementById("contentContainer").children;
            const headerContainers = document.getElementById("contentContainerHeader").children;
            for (let i = 0; i < containers.length; i++) {
                headerContainers[i+1].innerHTML = containers[i].innerHTML;
            }
            const dropdownMenu = document.getElementById("dropdownMenuHeader");
            const navbar = document.getElementById("navbar");
            const navItems = navbar.getElementsByClassName("navbar-item");
            for (let i = 0; i < navItems.length - 1; i++) {
                dropdownMenu.append(navItems[i].cloneNode(true));
            }
            _container.getElementsByClassName("hamburger")[0].addEventListener("click", _displayDropdownMenu);
            setTimeout(function() {
                _container.getElementsByClassName("navbar-container")[0].classList.add("loaded");
            }, 50);
            setTimeout(function() {
                document.getElementById("headerFooter").classList.add("loaded");
            }, 750);
            _typewriter = new Typewriter(document.getElementById("typingName"));
            const delay = 2000;
            _typewriter.typeString("Hello World!")
                .pauseFor(delay)
                .deleteChars(7)
                .pauseFor(delay/4)
                .typeString("! My name is <span class=\"contrast-color\">Cameron Lattz</span>.")
                .pauseFor(delay*1.25)
                .typeString("<br>I'm a <span class=\"contrast-color\"><span id=\"typingLanguage\">Full Stack</span> developer</span> from Minneapolis.")
                .pauseFor(delay*1.25)
                .callFunction(function() {
                    document.getElementsByClassName("Typewriter__cursor")[0].style.display = "none";
                    _typeWriter2 = new Typewriter(document.getElementById("typingLanguage"), {
                        autoStart: true,
                        loop: true,
                        strings: languages
                    }).start();
                })
                .start();
        }
    }
    const _revert = function() {}

    const _visible = function() {
        document.getElementById("contentContainer").classList.remove("show");
    }

    return {
		about: "<a href=\"https://safi.me.uk/typewriterjs/\">Typewriter</a>, Vanilla JS and CSS.",
        className: "header",
        init: _init,
        revert: _revert,
		visible: _visible
    }
}();