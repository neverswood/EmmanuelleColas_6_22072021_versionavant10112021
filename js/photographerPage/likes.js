export default class Likes {
  constructor(medias, photographer) {
    this.medias = medias;
    this.photographer = photographer;
    this.sumLike = this.medias.reduce((currentSumLike, medium) => {
      return medium.likes + currentSumLike;
    }, 0);
  }

  /* Compute the html for likes and price.
     #todo rename this function to renderLikesAndPrice */
  displayLikesAndPrice() {
    return `
        <span class="totalLike">${this.sumLike} <i class="fas fa-heart"></i></span>
        <span class="price">${this.photographer.price} €/jour</span>
        `;
  }

  /* Add click events to increment total likes media */
  incrementLikes() {
    const like = document.querySelectorAll('.likeHeart');
    for (let index = 0; index < like.length; index++) {
      like[index].addEventListener('click', () => {
        this.resetLikes(this.sumLike++);
      });
    }
  }

  /* Reset the display of likes */
  resetLikes() {
    this.displaySumLikes(this.sumLike);
  }

  /* Display likes and price in the document */
  displaySumLikes(val) {
    document.querySelector(
      '.likes-price'
    ).innerHTML = `<span class="totalLikes">${val} <i class="fas fa-heart"></i></span>
      <span class="price">${this.photographer.price} €/jour</span>
      `;
  }

  /* Display likes.
     #todo this function seems unused, remove it */
  displayLikesMedias() {
    this.medias.map((media) => {
      return `<span class"ilike">${media.likes} <i class="fas fa-heart likeHeart"  id="like"></i></span>`;
    });
  }

  /* Add click events to increment likes under the medias */
  incrementLikesMedias() {
    const like = document.querySelectorAll('.ilike');

    for (let index = 0; index < like.length; index++) {
      like[index].addEventListener('click', (e) => {
        let currentLike = e.currentTarget.firstElementChild.textContent;
        e.currentTarget.firstElementChild.innerHTML = Number(currentLike) + 1;
      });
    }
  }

  /* Add keyboard events to increment likes under the medias */
  bindKeyboardEventListeners() {
    const like = document.querySelector('.ilike');
    like.addEventListener('keydown', (e) => {
      const { key } = e;
      if (key === 'Enter') {
        let currentLike = e.target.previousElementSibling.textContent;
        e.target.previousElementSibling.innerHTML = Number(currentLike) + 1;
        this.resetLikes(this.sumLike++);
      }
    });
  }
}
