// -------- Scroll function --------

const navLinkEls = document.querySelectorAll(".nav_link");
const sectionEls = document.querySelectorAll(".section");
const mainEl = document.querySelector("main");
const bodyEl = document.querySelector("body");

let currentSection = "home";
window.addEventListener("scroll", () => {
    sectionEls.forEach((sectionEl) => {
        if (window.scrollY >= sectionEl.offsetTop - 500) {
            currentSection = sectionEl.id;
        }
    });

    navLinkEls.forEach((navLinkEl) => {
        if (navLinkEl.href.includes(currentSection)) {
            document.querySelector(".active").classList.remove("active");
            navLinkEl.classList.add("active");
        }
    });
});