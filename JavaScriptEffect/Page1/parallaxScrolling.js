const parallaxScroll = document.getElementById("parallaxScrolling");
const moonElem = document.querySelector(".moon");
const wishElem = document.querySelector(".wish");
function onScroll() {
  moonElem.style.transform = `translate(${
    parallaxScroll.scrollTop * -1 * 1.3
  }%, ${parallaxScroll.scrollTop * 1.2 * -0.7}%)`;
  wishElem.style.transform = `translateY(${
    parallaxScroll.scrollTop * 1.2 * -1.2
  }%)`;
}

function parallaxScrolling() {
  parallaxScroll.addEventListener("scroll", onScroll);
}
parallaxScrolling();
