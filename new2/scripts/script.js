var script = function() {
	"using strict";
	var _containers = [];
	var _languages = ["C#", "Java", "React", "JavaScript", "SQL", "Full Stack"];

	var _topY = function(el) {
		var rect = el.getBoundingClientRect();
		var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return rect.top + scrollTop;
	}

	var _getEra = function(eraId) {
		switch (eraId) {
			case "containerHeader":
				return header;
			case "container87":
				return eightySeven;
			case "container71":
				return seventyOne;
			case "container96":
				return ninetySix;
			default:
				return null;
		}
	}

	var _getContainerIndex = function() {
		var doc = document.documentElement;
		var scrollTop = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
		var scrollBottom = scrollTop + document.documentElement.clientHeight;
		for (var i = _containers.length - 1; i >= 0; i--) {
			var offset = _containers[i].getElementsByClassName("scrolling-content-container")[0].offsetHeight;
			var containerTop = _topY(_containers[i]) + offset;
			var containerBottom = containerTop + _containers[i].scrollHeight + offset;
			if (containerTop + offset <= scrollTop && containerBottom - offset >= scrollBottom) {
				_initContainer(i);
			} else {
				var era = _getEra(_containers[i].getAttribute("id"));
				if (era !== null) {
					var reverted = era.revert();
					if (reverted) {
						_updateContent();
					}
				}
			}
		}
	}

	var _init = function() {
		document.getElementById("contentContainerHeader").children[0].classList.add("show");
		_setupNavbar();
		_containers = document.getElementsByClassName("container");
		var era = _getEra(_containers[0].getAttribute("id"));
		document.getElementById("contentContainer").classList = era.className;
		document.getElementById("aboutThisPage").innerHTML = era.about;
		_initContainer(0);
		_parseURL();
		_loadImages();
	}

	var _initContainer = function(index) {
		var container = _containers[index];
		var era = _getEra(container.getAttribute("id"));
		if (era !== null) {
			_updateContent(era);
			var navbarContainer = container.getElementsByClassName("navbar-container")[0];
			if (navbarContainer && navbarContainer.innerHTML === "") {
				var navbarClone = document.getElementById("navbar").cloneNode(true);
				navbarClone.removeAttribute("id");
				navbarContainer.append(navbarClone);
			}
			era.init(_languages);
		}
	}

	var _loadImages = function() {
		var images = document.getElementsByTagName("img");
		for (var i = 0; i < images.length; i++) {
			var image = images[i];
			image.setAttribute("src", image.getAttribute("data-src"));
			image.removeAttribute("data-src");
		}
	}

	var _parseURL = function() {
		var urlParams = new URLSearchParams(window.location.search);
		var page = "home";
		var hash = "Header";
		if (window.location.hash) {
			hash = window.location.hash.substring(1);
		}
		_scrollToContainer(hash);
		if (urlParams.has("page")) {
			page = urlParams.get("page");
		}
		var contentId = _updatePage(page, false);
		var spans = document.getElementsByClassName("navbar-item");
		for (var i = 0; i < spans.length; i++) {
			var spanTargetId = spans[i].getAttribute("data-target");
			if (contentId === spanTargetId) {
				spans[i].classList.add("active");
			} else {
				spans[i].classList.remove("active");
			}
		}
	}

	var _scroll = function() {
		clearTimeout(this.scrollTimeout);
		this.scrollTimeout = setTimeout(function() {
			_getContainerIndex();
			this.previousScrollY = this.scrollY;
		}, 50);
	}

	var _scrollToContainer = function(hash) {
		setTimeout(function() {
			document.getElementById("container" + hash).scrollIntoView();
			if (hash !== "Header") {
				setTimeout(function() {
					window.scrollBy(0, 60);
				}, 1000);
			}
		}, 50);
	}

	var _setupNavbar = function() {
		document.addEventListener("click",function(e){
			if (e.target && e.target.classList.contains("navbar-item")) {
				var span = e.target;
				if (!span.classList.contains("hamburger")) {
					var menus = document.getElementsByClassName("dropdown-menu");
					for (var i = 0; i < menus.length; i++) {
						menus[i].classList.remove("show");
					}
					var spans = document.getElementsByClassName("navbar-item");
					for (var j = 0; j < spans.length; j++) {
						if (spans[j].getAttribute("data-target") !== span.getAttribute("data-target")) {
							spans[j].classList.remove("active");
						} else {
							spans[j].classList.add("active");
						}
					}
					var contentId = span.getAttribute("data-target") || "";
					_updatePage(contentId, true);
				}
			 }
		 });
	}

	var _updateContent = function(era) {
		if (era === void 0) {
			document.getElementById("contentContainer").removeAttribute("class");
		} else {
			document.getElementById("contentContainer").classList = era.className;
			document.getElementById("aboutThisPage").innerHTML = era.about;
		}
	}

	var _updatePage = function(contentId, updateURL) {
		var contentNodes = document.getElementById("contentContainer").children;
		for (var j = 0; j < contentNodes.length; j++) {
			if (contentNodes[j].id === contentId) {
				contentNodes[j].classList.add("show");
			} else {
				contentNodes[j].classList.remove("show");
			}
		}
		var headerContainers = document.getElementById("contentContainerHeader").children;
		for (var j = 0; j < headerContainers.length; j++) {
			if (headerContainers[j].id === contentId + "Header") {
				if (updateURL) {
					_updateURL(contentId);
				}
				headerContainers[j].classList.add("show");
			} else {
				headerContainers[j].classList.remove("show");
			}
		}
		var tvContainers = document.getElementById("contentContainerTv").children;
		for (var j = 0; j < tvContainers.length; j++) {
			if (tvContainers[j].id === contentId + "Tv") {
				if (updateURL) {
					_updateURL(contentId);
				}
				tvContainers[j].classList.add("show");
			} else {
				tvContainers[j].classList.remove("show");
			}
		}
		return contentId;
	}

	var _updateURL = function(pageName) {
		if (history.pushState) {
			var query = "";
			if (pageName !== "home") {
				query = "?page=" + pageName;
			}
			var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + query;
			window.history.pushState({path:newurl},"",newurl);
		}
	}

	document.addEventListener("DOMContentLoaded", function() {
		_init();
	});
	window.addEventListener("scroll", function(event) {
		_scroll();
	});
	window.addEventListener("popstate", function() {
		_parseURL();
	})
}();