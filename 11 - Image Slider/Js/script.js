const nextE1 = document.querySelector(".next");
const prevE1 = document.querySelector(".prev");
const imgE1 = document.querySelectorAll("img");
const imageContainerE1 = document.querySelector(".image-container");
let currentImg = 1;

nextE1.addEventListener("click", () => {
    currentImg++;
    updateImg();
});

prevE1.addEventListener("click", () => {
    currentImg--;
    updateImg();
});

function updateImg() {
    if (currentImg > imgE1.length) {
        currentImg = 1;
    } else if (currentImg < 1) {
        currentImg = imgE1.length;
    }
    imageContainerE1.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
}
