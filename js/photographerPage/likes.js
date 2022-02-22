export default class Likes {
  constructor(medias, photographer) {
    this.medias = medias;
    this.photographer = photographer;
    this.sumLike = this.medias.reduce((currentSumLike, medium) => {
      return medium.likes + currentSumLike;
    }, 0);
    console.log(this.medias);
  }

  displayLikesAndPrice() {
    return `
      <span class="totalLike">${this.sumLike} <i class="fas fa-heart"></i></span>
      <span class="price">${this.photographer.price} €/jour</span>
      `;
  }

  incrementLikes() {
    const like = document.querySelectorAll(".likeHeart");
    for (let index = 0; index < like.length; index++) {
      like[index].addEventListener("click", () => {
        this.resetLikes(this.sumLike++);
      });
    }
  }

  resetLikes() {
    this.displaySumLikes(this.sumLike);
  }

  displaySumLikes(val) {
    document.querySelector(
      ".likes-price"
    ).innerHTML = `<span class="totalLikes">${val} <i class="fas fa-heart"></i></span>
    <span class="price">${this.photographer.price} €/jour</span>
    `;
  }

  //Likes under the medias
  displayLikesMedias() {
    this.medias.map((media) => {
      return `<span class"ilike">${media.likes} <i class="fas fa-heart likeHeart"  id="like"></i></span>`;
    });
  }

  incrementLikesMedias() {
    const like = document.querySelectorAll(".ilike");

    for (let index = 0; index < like.length; index++) {
      like[index].addEventListener("click", (e) => {
        let currentLike = e.currentTarget.firstElementChild.textContent;
        e.currentTarget.firstElementChild.innerHTML = Number(currentLike) + 1;
      });
    }
  }
}
