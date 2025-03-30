document.addEventListener("DOMContentLoaded", function () { 
    const navLinks = document.querySelectorAll("nav ul li a"); 
    const sections = document.querySelectorAll(".liga");

    function showLiga(liga) {
        sections.forEach(section => {
            if (liga === "all" || section.dataset.liga === liga) {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const liga = this.getAttribute("data-liga");
            showLiga(liga);
        });
    });

    showLiga("all");
});
