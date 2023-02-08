window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    const textBox = document.querySelector(".text-box");
    const bg = document.querySelector(".bg");
    const overlay = document.querySelector(".overlay");

    loader.className += " hidden"; // class "loader hidden"
    this.setTimeout(() => {
        textBox.className += " fadeInTextClass"
        bg.className += " scaleUpBgClass"
        overlay.className += " scaleDownOverlayClass"
    }, 500)
});

let burger = document.getElementById("burger");
let menu = document.getElementById("menu-nav");
let navToIntro = document.getElementById("nav-to-intro");

burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    menu.classList.toggle("show");
})