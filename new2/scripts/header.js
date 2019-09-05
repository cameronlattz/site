const header = function() {
    return {
        init: function() {
            const container = document.getElementById("containerHeader");
            setTimeout(function() {
                container.getElementsByClassName("navbar-container")[0].classList.add("loaded");
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
        }
    }
}();