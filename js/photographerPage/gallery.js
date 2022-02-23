import MediaFactory from "../data/mediaFactory.js";

export default class Gallery {
  constructor(medias) {
    this.medias = medias;
    this.options = document.querySelectorAll(".btn-option");
    this.mediaFactory = new MediaFactory();
    console.log("moun", this.medias);
  }

  renderGallery() {
    return this.medias
      .map((media) => {
        return `
        <div class="box-list-item media-item" id="item-${media.id}"
        data-id="${media.id}">
        ${this.mediaFactory.render(media)}
        <div class="box-list-presentation">
        <div class="box-list-presentation__titleDate">
        <p>${media.title}</p>
        <span class="date">${media.date}</span>
        </div>
        <div class="box-list-presentation__priceLike">
        <span class="price">${media.price}€</span>
        <span class="ilike">
        <span class="numberLike">${
          media.likes
        }</span> <i class="fas fa-heart likeHeart"  id="like"></i></span>
        </div>
        </div>
        </div>`;
      })
      .join("");
  }
}
