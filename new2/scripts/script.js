const script = function() {
	let currentContainerIndex = -1;
	let containers = [];
	const bottomY = function(el) {
		const rect = el.getBoundingClientRect(),
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return rect.top + scrollTop;
	}
	const getEra = function(eraId) {
		switch (eraId) {
			case "container80s":
				return eighties(15, 25);
			default:
				return null;
		}
	}
	const getContainerIndex = function() {
		const doc = document.documentElement;
		const scrollTop = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
		for (let i = containers.length - 1; i >= 0; i--) {
			const containerTop = bottomY(containers[i]);
			if (containerTop <= scrollTop) {
				const containerHeight = containers[i].offsetHeight;
				const era = getEra(containers[i].getAttribute("id"));
				if (era !== null && currentContainerIndex !== i) {
					const navbarContainer = containers[i].getElementsByClassName("navbar-container")[0];
					navbarContainer.append(document.getElementById("navbar"));
					document.getElementById("contentContainer").classList = ["eighties"];
					era.move(scrollTop-containerTop);
				}
				return i;
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
		containers = document.getElementsByClassName("container");
		currentContainerIndex = getContainerIndex();
	});
	window.addEventListener("scroll", function(event) {
		getContainerIndex();
	});
}();