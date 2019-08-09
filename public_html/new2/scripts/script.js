const script = function() {
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
	document.addEventListener("DOMContentLoaded", function() {
		containers = document.getElementsByClassName("container");
	});
	window.addEventListener("scroll", function(event) {
		const doc = document.documentElement;
		const scrollTop = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
		for (let i = containers.length - 1; i >= 0; i--) {
			const containerTop = bottomY(containers[i]);
			if (containerTop < scrollTop) {
				const containerHeight = containers[i].offsetHeight;
				const scrollPercent = (scrollTop - containerTop)/containerHeight;
				const era = getEra(containers[i].getAttribute("id"));
				if (era !== null) {
					era.move(scrollTop-containerTop);
				}
				break;
			}
		}
	});
}();