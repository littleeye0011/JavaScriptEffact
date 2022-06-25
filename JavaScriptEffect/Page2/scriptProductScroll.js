const categories = document.querySelectorAll(".category");
const scrollProduct = document.querySelector(
  ".productScrollAnimation-container"
);

scrollProduct.addEventListener("scroll", showCategory, false);

function showCategory() {
  const calculateHeight = window.innerHeight - 200;

  categories.forEach((category) => {
    const topPosition = category.getBoundingClientRect().top;
    if (topPosition < calculateHeight) {
      category.classList.add("active");
    } else {
      category.classList.remove("active");
    }
  });
}
