const KEY = "6rB425MBqM5tEtRUMVn8j-tcQcGueFo1FLGPrlBoUXs";
const scrollImg = document.querySelector(".infiniteScroll-container");
const loaderElem = document.querySelector(".loader");
let page = 1;

function showLoader() {
  loaderElem.classList.add("visible");
}

function hideLoader() {
  loaderElem.classList.remove("visible");
}

async function displayImages() {
  showLoader();
  const result = await fetch(
    `http://api.unsplash.com/photos/?client_id=${KEY}&page=${page}`
  );
  const images = await result.json();

  const galleryElem = document.querySelector(".gallery");

  images.forEach((image) => {
    const imgElem = document.createElement("img");
    imgElem.src = image.urls.small;

    galleryElem.appendChild(imgElem);
  });

  hideLoader();

  page += 1;
}

function onScroll() {
  const { clientHeight } = document.documentElement;
  const scrollTop = scrollImg.scrollTop;
  const scrollHeight = scrollImg.scrollHeight;

  if (scrollTop + clientHeight >= scrollHeight - 20) {
    showLoader();
    setTimeout(displayImages, 3000);
  }
}

function infiniteScrollAPI() {
  scrollImg.addEventListener("scroll", onScroll);
  showLoader();
  setTimeout(displayImages, 3000);
}

infiniteScrollAPI();
