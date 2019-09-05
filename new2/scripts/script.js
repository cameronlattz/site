const script = function() {
	let _currentContainerIndex = -1;
	let _containers = [];
	const bottomY = function(el) {
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
				document.getElementById("contentContainer").classList = ["eighties"];
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
		if (movingUp) {
			for (let i = 0; i < _containers.length; i++) {
				const containerTop = bottomY(_containers[i]);
				if (containerTop >= scrollTop) {
					return initContainer(i);
				}
			}
		} else {
			for (let i = _containers.length - 1; i >= 0; i--) {
				const containerTop = bottomY(_containers[i]);
				if (containerTop + 50 <= scrollTop) {
					return initContainer(i);
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
			})
		}
	}

	document.addEventListener("DOMContentLoaded", function() {
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
		init: function() {

		},
		move: function() {

		},
		revert: function() {
			
		}
	}
}();