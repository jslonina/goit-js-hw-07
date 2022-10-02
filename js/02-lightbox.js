import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
function imgGall(items) { 
    return items
  .map(({preview, original, description}) => {
    return `<li><a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a></li>`;
  })
  .join("");
}

gallery.insertAdjacentHTML("beforeend", imgGall(galleryItems));

let lightbox = new SimpleLightbox(".gallery a", { 
    captionsData: "alt",
    captionDelay: 250,
});