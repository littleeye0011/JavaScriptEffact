const container = document.getElementById("container");
const imgs = document.querySelectorAll("#container img");

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let idx = 0;

let interval = setInterval(slide, 1500);

function slide() {
  idx++;
  changeImage();
}

function changeImage() {
  if (idx > imgs.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = imgs.length - 1;
  }
  container.style.transform = `translateX(${-idx * 500}px)`;
}

prevBtn.addEventListener("click", () => {
  idx--;
  changeImage();
  resetInterval();
});

nextBtn.addEventListener("click", () => {
  idx++;
  changeImage();
  resetInterval();
});

const resetInterval = () => {
  clearInterval(interval);
  interval = setInterval(slide, 2300);
};
