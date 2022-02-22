import Dropdown from "./dropdown.js";
import Gallery from "./gallery.js";
import Likes from "./likes.js";
import ModalContact from "./modalContact.js";
import PhotographerInfos from "./photographerInfos.js";

export default class PhotographerPage {
  constructor(data) {
    //
    const url = new URLSearchParams(window.location.search);
    this.id = url.get("id");
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
    this.likes = new Likes(this.mediaPhotographerList);
    this.drawPhotographerPage();
    this.drawGallery();
  }

  drawPhotographerPage() {
    const photographerPresentation = document.getElementById(
      "presentation-photographer"
    );
    photographerPresentation.innerHTML =
      this.photographerInfos.renderPhotographerInfos();
    const modalContact = document.getElementById("header-form");
    modalContact.innerHTML = this.modalContact.renderModalContact();
    this.modalContact.bindModalContactEventListeners();
    document.querySelector(".likes-price").innerHTML =
      this.likes.displayLikesAndPrice();
  }

  drawGallery() {
    const gallery = document.getElementById("box-list");
    gallery.innerHTML = this.gallery.renderGallery();
    this.likes.incrementLikesMedias();
    this.likes.incrementLikes();
  }
}
