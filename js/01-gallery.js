import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryElement = document.querySelector(".gallery");
const MarkupGallery = createGallery(galleryItems);
galleryElement.insertAdjacentHTML("beforeend", MarkupGallery);

galleryElement.addEventListener("click", clickGallery);

console.log(createGallery(galleryItems));

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
`;
    })
    .join("");
}

function clickGallery(event) {
  event.preventDefault();
  const target = event.target;
  if (target.classList.contains("gallery__image")) {
    const source = target.dataset.source;
    openImg(source);
  }
}
  // ___ no ESC 
// function openImg(source) {
//   const instance = basicLightbox.create(`<img src="${source}" alt="Image">`);
//   instance.show();
// }


  // ___ ESC
let modalImg = null;

function openImg(source) {
  const imageElement = `<img src="${source}" alt="Image">`;
  modalImg = basicLightbox.create(imageElement, {
    onShow: () => {
      document.addEventListener("keydown", PressEscape);
    },
    onClose: () => {
      document.removeEventListener("keydown", PressEscape);
    },
  });
  modalImg.show();
}

function PressEscape(event) {
  if (event.code === "Escape") {
    closeImg();
  }
}

function closeImg() {
  if (modalImg) {
    modalImg.close();
  }
}

console.log(galleryItems);
