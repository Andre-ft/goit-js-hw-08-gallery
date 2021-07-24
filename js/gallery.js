export default class Gallery {
    _ulElement;
    _currentModalImgElem;
    _closeModalBtn;
    _overlayElement;
    _lightboxImageElem;
    _imgArray;

    constructor(galleryItems) {
        this.makeMarkUp(galleryItems);
        this.makeRefs();
        this.bindEvents();
    }

    makeMarkUp(array) {
        this._elementsArray = array.map((item) => {
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

        this._ulElement = document.querySelector('ul.js-gallery');

        this._ulElement.append(...this._elementsArray);
    }

    makeRefs() {
        this._closeModalBtn = document.querySelector('button[data-action="close-lightbox"]');
        this._overlayElement = document.querySelector('div.lightbox__overlay');
        this._lightboxImageElem = document.querySelector('img.lightbox__image')
        this._imgArray = [...document.querySelectorAll('img.gallery__image')];
    }

    bindEvents() {
        this._ulElement.addEventListener('click', this.onListItemClick.bind(this));
        this._closeModalBtn.addEventListener('click', this.onCloseModal.bind(this));
        this._overlayElement.addEventListener('click', this.onOverLayClick.bind(this));
    }

    onListItemClick(event) {
        if (event.target.nodeName !== 'IMG') return;
        event.preventDefault();
        
        this._currentModalImgElem = event.target;

        this.openModal();
        this.showImage(event.target.dataset.source, event.target.alt);
    }
    
    openModal() {
        window.addEventListener('keydown', this.onKeyPress.bind(this));
        document.querySelector('.lightbox').classList.add('is-open');    
    }

    showImage(source, alt) {
        this._lightboxImageElem.src = source;
        this._lightboxImageElem.alt = alt;
    }

    onCloseModal() {
        window.removeEventListener('keydown', this.onKeyPress);
        document.querySelector('.lightbox').classList.remove('is-open');
        this._lightboxImageElem.src = '';
        this._lightboxImageElem.alt = '';
    }


    onOverLayClick(event) {
        if (event.currentTarget === event.target) this.onCloseModal();
    }

    onKeyPress(event) {
        if(event.code === 'Escape') this.onCloseModal();
        if(event.code === 'ArrowRight') this.showNextImage();
        if(event.code === 'ArrowLeft') this.showPreviousImage();
    }

    showNextImage() {
        let idx = this._imgArray.indexOf(this._currentModalImgElem);
        idx++;
        if (idx === this._imgArray.length) idx = 0;
        this._currentModalImgElem = this._imgArray[idx];
        this.showImage(this._currentModalImgElem.dataset.source, this._currentModalImgElem.alt);
    }

    showPreviousImage() {
        let idx = this._imgArray.indexOf(this._currentModalImgElem);
        idx--;
        if (idx < 0) idx = this._imgArray.length - 1;
        this._currentModalImgElem = this._imgArray[idx];
        this.showImage(this._currentModalImgElem.dataset.source, this._currentModalImgElem.alt);
    }
 }
