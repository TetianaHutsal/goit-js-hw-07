import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryElement = document.querySelector(".gallery");
const MarkupGallery = createGallery(galleryItems);
galleryElement.insertAdjacentHTML("beforeend", MarkupGallery);

galleryElement.addEventListener("click", clickGallery);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}"/>
        </a>
     </li>
  `;
    })
    .join("");
}

function clickGallery(event) {
  event.preventDefault();
}

const lightbox = new SimpleLightbox(".gallery a", {
  //   captions: true,
  captionsData: "alt",
  //   captionPosition: 'bottom',
  captionDelay: 250,
});

console.log(galleryItems);
