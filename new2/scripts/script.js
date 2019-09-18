const script = function() {
	"using strict";
	let _currentContainerIndex = -1;
	let _containers = [];
	const _languages = ["C#", "Java", "React", "JavaScript", "SQL", "Full Stack"];

	const _topY = function(el) {
		const rect = el.getBoundingClientRect();
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return rect.top + scrollTop;
	}

	const _getEra = function(eraId) {
		switch (eraId) {
			case "containerHeader":
				return header;
			case "container87":
				return eightySeven;
			case "container65":
				return sixtyFive;
			case "container40":
				return test;
			default:
				return null;
		}
	}

	const _getContainerIndex = function(movingUp) {
		const doc = document.documentElement;
		const scrollTop = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
		const scrollBottom = scrollTop + document.documentElement.clientHeight;
		const revertContainer = function(index) {
			const era = _getEra(_containers[index].getAttribute("id"));
			if (era !== null) {
				const reverted = era.revert();
				if (reverted) {
					_updateContent();
				}
			}
		}
		const getTopBottomY = function(index, offset) {
			const containerTop = _topY(_containers[index]) + offset;
			const containerBottom = containerTop + _containers[index].scrollHeight + offset;
			return [containerTop, containerBottom];
		}
		if (movingUp) {
			for (let i = 0; i < _containers.length; i++) {
				const offset = _containers[i].getElementsByClassName("scrolling-content-container")[0].offsetHeight;
				const [containerTop, containerBottom] = getTopBottomY(i, 0);
				if (containerTop + offset >= scrollTop) {
					revertContainer(i);
				}
				if (containerBottom >= scrollBottom && containerTop <= scrollTop) {
					_initContainer(i);
				}
			}
		} else {
			for (let i = _containers.length - 1; i >= 0; i--) {
				const offset = _containers[i].getElementsByClassName("scrolling-content-container")[0].offsetHeight;
				const [containerTop, containerBottom] = getTopBottomY(i, 0);
				if (containerBottom <= scrollBottom) {
					revertContainer(i);
				}
				if (containerTop + offset <= scrollTop && containerBottom + offset >= scrollTop) {
					_initContainer(i);
				}
			}
		}
	}

	const _init = function() {
		document.getElementById("contentContainerHeader").children[0].classList.add("show");
		_setupNavbar();
		_containers = document.getElementsByClassName("container");
		const era = _getEra(_containers[0].getAttribute("id"));
		document.getElementById("contentContainer").classList = era.className;
		document.getElementById("aboutThisPage").innerHTML = era.about;
		_initContainer(0);
		_parseURL();
	}

	const _initContainer = function(index) {
		const container = _containers[index];
		const era = _getEra(container.getAttribute("id"));
		if (era !== null && _currentContainerIndex !== index) {
			_updateContent(era);
			_currentContainerIndex = index;
			const navbarContainer = container.getElementsByClassName("navbar-container")[0];
			if (navbarContainer && navbarContainer.innerHTML === "") {
				const navbarClone = document.getElementById("navbar").cloneNode(true);
				navbarClone.removeAttribute("id");
				navbarContainer.append(navbarClone);
			}
			era.init(_languages);
		}
	}

	const _parseURL = function() {
		const urlParams = new URLSearchParams(window.location.search);
		let page = "home";
		let hash = "Header";
		if (window.location.hash) {
			hash = window.location.hash.substring(1);
		}
		_scrollToContainer(hash);
		if (urlParams.has("page")) {
			page = urlParams.get("page");
		}
		const contentId = _updatePage(page, false);
		const spans = document.getElementsByClassName("navbar-item");
		for (let i = 0; i < spans.length; i++) {
			const spanTargetId = spans[i].getAttribute("data-target");
			if (contentId === spanTargetId) {
				spans[i].classList.add("active");
			} else {
				spans[i].classList.remove("active");
			}
		}
	}

	const _scroll = function() {
		clearTimeout(this.scrollTimeout);  
		this.scrollTimeout = setTimeout(function() {
			_getContainerIndex(this.previousScrollY > this.scrollY);
			this.previousScrollY = this.scrollY;
		}, 50);
	}

	const _scrollToContainer = function(hash) {
		setTimeout(function() {
			document.getElementById("container" + hash).scrollIntoView();
			if (hash !== "Header") {
				setTimeout(function() {
					window.scrollBy(0, 60);
				}, 1000);
			}
		}, 50);
	}

	const _setupNavbar = function() {
		document.addEventListener("click",function(e){
			if (e.target && e.target.classList.contains("navbar-item")) {
				const span = e.target;
				if (!span.classList.contains("hamburger")) {
					const menus = document.getElementsByClassName("dropdown-menu");
					for (let i = 0; i < menus.length; i++) {
						menus[i].classList.remove("show");
					}
					const spans = document.getElementsByClassName("navbar-item");
					for (let j = 0; j < spans.length; j++) {
						if (spans[j].getAttribute("data-target") !== span.getAttribute("data-target")) {
							spans[j].classList.remove("active");
						} else {
							spans[j].classList.add("active");
						}
					}
					const contentId = span.getAttribute("data-target") || "";
					_updatePage(contentId, true);
				}
			 }
		 });
	}

	const _updateContent = function(era) {
		if (era === void 0) {
			document.getElementById("contentContainer").removeAttribute("class");
		} else {
			document.getElementById("contentContainer").classList = era.className;
			document.getElementById("aboutThisPage").innerHTML = era.about;
		}
	}

	const _updatePage = function(contentId, updateURL) {
		const contentNodes = document.getElementById("contentContainer").children;
		for (let j = 0; j < contentNodes.length; j++) {
			if (contentNodes[j].id === contentId) {
				contentNodes[j].classList.add("show");
			} else {
				contentNodes[j].classList.remove("show");
			}
		}
		const headerContainers = document.getElementById("contentContainerHeader").children;
		for (let j = 0; j < headerContainers.length; j++) {
			if (headerContainers[j].id === contentId + "Header") {
				if (updateURL) {
					_updateURL(contentId);
				}
				headerContainers[j].classList.add("show");
			} else {
				headerContainers[j].classList.remove("show");
			}
		}
		return contentId;
	}

	const _updateURL = function(pageName) {
		if (history.pushState) {
			let query = "";
			if (pageName !== "home") {
				query = "?page=" + pageName;
			}
			const newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + query;
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

const test = function() {
	return {
		about: "",
		className: "test",
		init: function() {},
		revert: function() {},
		visible: function() {},
	}
}();