const script = function() {
	"using strict";
	let _currentContainerIndex = -1;
	let _containers = [];
	const topY = function(el) {
		const rect = el.getBoundingClientRect(),
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return rect.top + scrollTop;
	}
	const getEra = function(eraId) {
		switch (eraId) {
			case "containerHeader":
				return header;
			case "container80s":
				return eighties;
			case "container90s":
				return test;
			default:
				return null;
		}
	}
	const getContainerIndex = function(movingUp) {
		const doc = document.documentElement;
		const scrollTop = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
		const initContainer = function(index) {
			const container = _containers[index];
			const era = getEra(container.getAttribute("id"));
			if (era !== null && _currentContainerIndex !== index) {
				_currentContainerIndex = index;
				const navbarContainer = container.getElementsByClassName("navbar-container")[0];
				navbarContainer.append(document.getElementById("navbar"));
				era.init();
				for (let i = 0; i < _containers.length; i++) {
					if (i !== index) {
						const hideEra = getEra(_containers[i].getAttribute("id"));
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
				const containerBottom = topY(_containers[i]) + _containers[i].scrollHeight;
				if (containerBottom - offset*2 >= scrollTop) {
					const era = getEra(_containers[i].getAttribute("id"));
					document.getElementById("contentContainer").classList = era.className;
					break;
				}
			}
			for (let i = 0; i < _containers.length; i++) {
				const containerBottom = topY(_containers[i]) + _containers[i].scrollHeight;
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
				const containerTop = topY(_containers[i]);
				// when moving down, we want to revert all on scrollBottom being lower than the bottom, and init i on 
				// scrollTop being higher than the very top of a section
				if (containerTop + offset <= scrollTop) {
					initContainer(i);
				}
				if (containerTop <= scrollTop) {
					const era = getEra(_containers[i].getAttribute("id"));
					document.getElementById("contentContainer").classList = era.className;
					break;
				}
			}
		}
	}
	const setupNavbar = function() {
		const spans = document.getElementsByClassName("navbar-item");
		for (let i = 0; i < spans.length; i++) {
			spans[i].addEventListener("click", function() {
				for (let j = 0; j < spans.length; j++) {
					if (spans[j] !== this) {
						spans[j].classList.remove("active");
					} else {
						spans[j].classList.add("active");
					}
				}
				const contentId = this.getAttribute("data-target") || "";
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
						headerContainers[j].classList.add("show");
					} else {
						headerContainers[j].classList.remove("show");
					}
				}
			})
		}
	}

	document.addEventListener("DOMContentLoaded", function() {
		document.getElementById("contentContainerHeader").children[0].classList.add("show");
		setupNavbar();
		_containers = document.getElementsByClassName("container");
		_currentContainerIndex = getContainerIndex(true);
	});
	window.addEventListener("scroll", function(event) {
		clearTimeout(this.scrollTimeout);  
		this.scrollTimeout = setTimeout(function() {
			getContainerIndex(this.previousScrollY > this.scrollY);
			this.previousScrollY = this.scrollY;
		}, 50);
	});
}();

const test = function() {
	return {
		className: "nineties",
		init: function() {

		},
		move: function() {

		},
		revert: function() {
			
		},
		visible: function() {

		}
	}
}();