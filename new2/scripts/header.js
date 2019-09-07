const header = function() {
	"using strict";
    return {
        className: "header",
        init: function() {
            const containers = document.getElementById("contentContainer").children;
            const headerContainers = document.getElementById("contentContainerHeader").children;
            for (let i = 0; i < containers.length; i++) {
                headerContainers[i+1].innerHTML = containers[i].innerHTML;
            }
            setTimeout(function() {
                document.getElementById("containerHeader").getElementsByClassName("navbar-container")[0].classList.add("loaded");
            }, 50);
            setTimeout(function() {
                document.getElementById("headerFooter").classList.add("loaded");
            }, 750);
        },
        move: function() {

        },
        revert: function() {
            const container = document.getElementById("containerHeader");
            container.getElementsByClassName("navbar-container")[0].classList.remove("loaded");
            document.getElementById("headerFooter").classList.remove("loaded");
        },
		visible: function() {
            console.log("hide content");
            document.getElementById("contentContainer").classList.remove("show");
		}
    }
}();