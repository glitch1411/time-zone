let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".ulheader");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".aheader").forEach((e) => {
    e.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});

let icflot = document.querySelectorAll(".tabs li i");
let bor = document.querySelectorAll(".sliders .tabs li")
icflot.forEach((ele) => {
    ele.addEventListener("click", (e) => {
        e.currentTarget.classList.toggle("flot");
    });
});
