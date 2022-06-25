const scrollContainer = document.querySelector(".container");

theH = window.innerHeight;

function onScroll() {
  const sectionElems = Array.from(
    document.querySelectorAll(".text-reval-content")
  );
  sectionElems.forEach((sectionElem) => {
    const imgElem = sectionElem.querySelector("img");
    const textElem = sectionElem.querySelector(".text");

    const scrollPosition = scrollContainer.scrollTop + theH * 4.1;
    const revealPosition = imgElem.offsetTop + imgElem.offsetHeight / 8;

    if (scrollPosition >= revealPosition) {
      textElem.classList.add("reveal");
    }
    if (scrollPosition <= revealPosition) {
      textElem.classList.remove("reveal");
    }
  });
}

function textReval() {
  scrollContainer.addEventListener("scroll", onScroll);
}

textReval();
