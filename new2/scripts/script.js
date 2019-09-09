const script = function() {
	"using strict";
	let _currentContainerIndex = -1;
	let _containers = [];
	const _languages = ["C#", "React", "JavaScript", "T-SQL", "Full Stack"];

	const _topY = function(el) {
		const rect = el.getBoundingClientRect(),
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return rect.top + scrollTop;
	}
	const _getEra = function(eraId) {
		switch (eraId) {
			case "containerHeader":
				return header;
			case "container87":
				return eighties;
			case "container90s":
				return test;
			default:
				return null;
		}
	}
	const _getContainerIndex = function(movingUp) {
		const doc = document.documentElement;
		const scrollTop = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
		const initContainer = function(index) {
			const container = _containers[index];
			const era = _getEra(container.getAttribute("id"));
			if (era !== null && _currentContainerIndex !== index) {
				_currentContainerIndex = index;
				const navbarContainer = container.getElementsByClassName("navbar-container")[0];
				navbarContainer.append(document.getElementById("navbar"));
				era.init(_languages);
				for (let i = 0; i < _containers.length; i++) {
					if (i !== index) {
						const hideEra = _getEra(_containers[i].getAttribute("id"));
						if (hideEra !== null) {
							hideEra.revert();
						}
					}
				}
				return index;
			}
		}
		const offset = 50;
		if (movingUp) {
			for (let i = 0; i < _containers.length; i++) {
				const containerBottom = _topY(_containers[i]) + _containers[i].scrollHeight;
				if (containerBottom - offset*2 >= scrollTop) {
					const era = _getEra(_containers[i].getAttribute("id"));
					document.getElementById("contentContainer").classList = era.className;
					document.getElementById("aboutThisPage").innerHTML = era.about;
					break;
				}
			}
			for (let i = 0; i < _containers.length; i++) {
				const containerBottom = _topY(_containers[i]) + _containers[i].scrollHeight;
				//console.log("container " + i + ": " + (containerBottom - offset) + " >= " + scrollTop);
				// when moving up, we want to revert all on scrollTop being higher than the top, and init i on 
				// scrollTop being higher than the very bottom of a section
				if (containerBottom - offset >= scrollTop) {
					initContainer(i);
					break;
				}
			}
		} else {
			for (let i = _containers.length - 1; i >= 0; i--) {
				const containerTop = _topY(_containers[i]);
				// when moving down, we want to revert all on scrollBottom being lower than the bottom, and init i on 
				// scrollTop being higher than the very top of a section
				if (containerTop + offset <= scrollTop) {
					initContainer(i);
				}
				if (containerTop <= scrollTop) {
					const era = _getEra(_containers[i].getAttribute("id"));
					document.getElementById("contentContainer").classList = era.className;
					document.getElementById("aboutThisPage").innerHTML = era.about;
					break;
				}
			}
		}
	}
	const _parseURL = function() {
		const urlParams = new URLSearchParams(window.location.search);
		let page = "home";
		let hash = "Header";
		if (window.location.hash) {
			hash = window.location.hash.substring(1);
		}
		era = _getEra("container" + hash);
		era.scrollTo();
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
	const _setupNavbar = function() {
		document.addEventListener("click",function(e){
			if (e.target && e.target.classList.contains("navbar-item")) {
				const span = e.target;
				if (span.id !== "hamburger") {
					const menus = document.getElementsByClassName("dropdown-menu");
					for (let i = 0; i < menus.length; i++) {
						menus[i].classList.remove("show");
					}
					const spans = document.getElementsByClassName("navbar-item");
					for (let j = 0; j < spans.length; j++) {
						if (spans[j] !== span) {
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
		document.getElementById("contentContainerHeader").children[0].classList.add("show");
		_setupNavbar();
		_containers = document.getElementsByClassName("container");
		_currentContainerIndex = _getContainerIndex(true);
		_parseURL();
	});
	window.addEventListener("scroll", function(event) {
		clearTimeout(this.scrollTimeout);  
		this.scrollTimeout = setTimeout(function() {
			_getContainerIndex(this.previousScrollY > this.scrollY);
			this.previousScrollY = this.scrollY;
		}, 50);
	});
	window.addEventListener("popstate", function() {
		_parseURL();
	})
}();

const test = function() {
	return {
		about: "",
		className: "nineties",
		init: function() {

		},
		revert: function() {
			
		},
		scrollTo: function() {

		},
		visible: function() {

		}
	}
}();