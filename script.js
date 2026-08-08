document.addEventListener("DOMContentLoaded", () => {

    // ==============================
    // MOBILE MENU TOGGLE
    // ==============================
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });

        // Close menu upon clicking any nav link
        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
            });
        });
    }

    // ==============================
    // NAVBAR SHADOW ON SCROLL
    // ==============================
    const header = document.querySelector("header");

    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                header.style.boxShadow = "0 8px 25px rgba(0,0,0,.12)";
            } else {
                header.style.boxShadow = "0 2px 20px rgba(0,0,0,.08)";
            }
        });
    }

    // ==============================
    // BACK TO TOP BUTTON LOGIC
    // ==============================
    const backToTop = document.getElementById("backToTop");

    if (backToTop) {
        window.addEventListener("scroll", () => {
            // Displays button after 150px of scroll
            if (window.scrollY > 150) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }
        });

        backToTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

});