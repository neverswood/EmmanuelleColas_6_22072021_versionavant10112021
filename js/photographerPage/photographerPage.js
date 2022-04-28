import Carousel from './carousel.js';
import Dropdown from './dropdown.js';
import Gallery from './gallery.js';
import Likes from './likes.js';
import ModalContact from './modalContact.js';
import PhotographerInfos from './photographerInfos.js';

export default class PhotographerPage {
  constructor(data) {
    //
    const url = new URLSearchParams(window.location.search);
    this.id = url.get('id');
    this.photographer = data.photographers.find((photographer) => {
      return photographer.id === Number(this.id);
    });
    //
    this.mediaPhotographerList = data.medias.filter((media) => {
      return media.photographerId === Number(this.id);
    });
    //
    this.photographerInfos = new PhotographerInfos(this.photographer);
    this.modalContact = new ModalContact(this.photographer);
    this.dropdown = new Dropdown(this.mediaPhotographerList, this);
    this.gallery = new Gallery(this.mediaPhotographerList);
    this.likes = new Likes(this.mediaPhotographerList, this.photographer);
    this.carousel = new Carousel(this.mediaPhotographerList);
    this.drawPhotographerPage();
    this.drawGallery();
    this.bindKeyboardEventListeners();
  }

  /* Display the photographer page */
  drawPhotographerPage() {
    const photographerPresentation = document.getElementById(
      'presentation-photographer'
    );
    photographerPresentation.innerHTML =
      this.photographerInfos.renderPhotographerInfos();
    const modalContact = document.getElementById('header-form');
    modalContact.innerHTML = this.modalContact.renderModalContact();
    this.modalContact.bindModalContactEventListeners();
    document.querySelector('.likes-price').innerHTML =
      this.likes.displayLikesAndPrice();
  }

  /* Display the gallery of the photographer */
  drawGallery() {
    const gallery = document.getElementById('box-list');
    gallery.innerHTML = this.gallery.renderGallery();
    this.likes.incrementLikesMedias();
    this.likes.incrementLikes();
    this.likes.bindKeyboardEventListeners();

    document.getElementById('carousel').innerHTML =
      this.carousel.displayCarousel();
    this.carousel.bindCarouselEventListener();
    this.carousel.bindKeyboardEventListeners();
  }

  /* Add keyboard events related to the photographer page*/
  bindKeyboardEventListeners() {
    window.addEventListener('keydown', (e) => {
      const { key } = e;
      if (key === 'Escape') {
        document.getElementById('bground').style.display = 'none';
        document.getElementById('listOption').style.display = 'none';
      }
    });
  }
}
