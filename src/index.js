const containers = document.querySelectorAll(".card-container");
const cards = document.querySelectorAll(".card");

let scrollY = 0;

window.addEventListener("scroll", () => {
    scrollY = document.documentElement.scrollTop;
});

for (let i = 0; i < cards.length; i++) {


    containers[i].addEventListener("mousemove", e => {
        const innerX = e.clientX + containers[i].offsetLeft;
        const innerY = (e.clientY + containers[i].offsetTop);


        const x = cards[i].offsetWidth / 2;
        const y = cards[i].offsetHeight / 2;

        const intensityX = 5;
        const intensityY = 3;

        let convertX = ((innerX - x) * intensityX) / x;
        let convertY = ((innerY - y) * intensityY) / y;

        cards[i].style.transform = `rotateY(${convertX * -1}deg) rotateX(${convertY}deg)`;
    });

    containers[i].addEventListener("mouseout", () => {

        cards[i].style.transform = `rotateY(0deg)`;
    });
}