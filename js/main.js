import { galleryItems } from "../app.js";
import Gallery from "./gallery.js";

new Gallery(galleryItems);


/*
const elementsArray = galleryItems.map((item) => {
    const imgElement = document.createElement('img');
    imgElement.classList.add('gallery__image');
    imgElement.src = item.preview;
    imgElement.dataset.source = item.original;
    imgElement.alt = item.description;

    const linkElement = document.createElement('a');
    linkElement.classList.add('gallery__link');
    linkElement.href = item.original;
    linkElement.appendChild(imgElement);

    const listItemElement = document.createElement('li');
    listItemElement.classList.add('gallery__item');
    listItemElement.appendChild(linkElement);

    return listItemElement;
})


const ulElement = document.querySelector('ul.js-gallery');

ulElement.append(...elementsArray);

const closeModalBtn = document.querySelector('button[data-action="close-lightbox"]');
const overlayElement = document.querySelector('div.lightbox__overlay');
const lightboxImageElem = document.querySelector('img.lightbox__image')
const imgArray = [...document.querySelectorAll('img.gallery__image')];
let currentModalImgElem;

ulElement.addEventListener('click', onListItemClick);
closeModalBtn.addEventListener('click', onCloseModal);
overlayElement.addEventListener('click', onOverLayClick);

function onListItemClick(event) {
    if (event.target.nodeName !== 'IMG') return;
    event.preventDefault();

    currentModalImgElem = event.target;

    openModal();
    showImage(event.target.dataset.source, event.target.alt);
}

function showImage(source, alt) {
    lightboxImageElem.src = source;
    lightboxImageElem.alt = alt;
}

function onCloseModal() {
    window.removeEventListener('keydown', onKeyPress);
    document.querySelector('.lightbox').classList.remove('is-open');
    lightboxImageElem.src = '';
    lightboxImageElem.alt = '';
}

function openModal() {
  window.addEventListener('keydown', onKeyPress);
  document.querySelector('.lightbox').classList.add('is-open');
  
}

function onOverLayClick(event) {
  if (event.currentTarget === event.target) onCloseModal();
}

function onKeyPress(event) {
  if(event.code === 'Escape') onCloseModal();
  if(event.code === 'ArrowRight') showNextImage();
  if(event.code === 'ArrowLeft') showPreviousImage();
}

function showNextImage() {
    let idx = imgArray.indexOf(currentModalImgElem);
    idx++;
    if (idx === imgArray.length) idx = 0;
    currentModalImgElem = imgArray[idx];
    showImage(currentModalImgElem.dataset.source, currentModalImgElem.alt);
}

function showPreviousImage() {
    let idx = imgArray.indexOf(currentModalImgElem);
    idx--;
    if (idx < 0) idx = imgArray.length - 1;
    currentModalImgElem = imgArray[idx];
    showImage(currentModalImgElem.dataset.source, currentModalImgElem.alt);
}
*/
