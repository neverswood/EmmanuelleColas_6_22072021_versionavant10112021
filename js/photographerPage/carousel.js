import MediaFactory from '../data/mediaFactory.js';

export default class Carousel {
  mediaIndex;
  constructor(medias) {
    this.medias = medias;
    this.mediaFactory = new MediaFactory();
  }

  displayCarousel() {
    return `
          <div id="carousel__div">
          <span  class="closeCarousel" id="closeCarousel"></span>
          <a href="#" id="left-btn" class="btn-arrow" aria-label="Previous-image"><i class="arrow"></i></a>
          <div class="carousel__div--container">
          <div class="media-carousel"></div>
          <span class="title-media"></span>
          </div>
          <a href="#" id="right-btn" class="right-arrow" aria-label="Previous-image"><i class="arrow"></i></a>
          </div>`;
  }

  bindCarouselEventListener() {
    const medias = document.querySelectorAll('.mediaType');
    const close = document.querySelector('.closeCarousel');

    close.addEventListener('click', () => {
      document.getElementById('carousel').style.display = 'none';
      document.getElementById('photographer-page').style.position = 'initial';
    });

    medias.forEach((media) => {
      media.addEventListener('click', (e) => {
        document.getElementById('carousel').style.display = 'block';
        document.getElementById('photographer-page').style.position = 'fixed';
        const mediaItem = e.target.parentElement.closest('.media-item');
        console.log('p', mediaItem, e);

        const mediaCurrent = this.medias.find(
          (m) => Number(m.id) === Number(mediaItem.dataset.id)
        );
        this.mediaIndex = this.medias.findIndex(
          (m) => Number(m.id) === Number(mediaItem.dataset.id)
        );
        document.querySelector('.media-carousel').innerHTML =
          this.mediaFactory.render(mediaCurrent);
        document.querySelector('.title-media').innerHTML = mediaCurrent.title;
        this.changeMedia();
      });
    });
  }

  changeMedia() {
    const moveRight = () => {
      if (this.mediaIndex === this.medias.length - 1) {
        this.mediaIndex = 0;
        document.querySelector('.media-carousel').innerHTML =
          this.mediaFactory.render(this.medias[this.mediaIndex + 1]);
        document.querySelector('.title-media').innerHTML =
          this.medias[this.mediaIndex + 1].title;
        return;
      }
      document.querySelector('.media-carousel').innerHTML =
        this.mediaFactory.render(this.medias[this.mediaIndex + 1]);
      document.querySelector('.title-media').innerHTML =
        this.medias[this.mediaIndex + 1].title;

      this.mediaIndex++;
    };

    const moveLeft = () => {
      if (this.mediaIndex < 1) {
        this.mediaIndex = this.medias.length;
        document.querySelector('.media-carousel').innerHTML =
          this.mediaFactory.render(this.medias[this.mediaIndex - 1]);
        document.querySelector('.title-media').innerHTML =
          this.medias[this.mediaIndex - 1].title;
        return;
      }
      document.querySelector('.media-carousel').innerHTML =
        this.mediaFactory.render(this.medias[this.mediaIndex - 1]);
      document.querySelector('.title-media').innerHTML =
        this.medias[this.mediaIndex - 1].title;

      this.mediaIndex--;
    };

    document.getElementById('right-btn').addEventListener('click', moveRight);
    document.getElementById('left-btn').addEventListener('click', moveLeft);
  }

  bindKeyboardEventListeners() {
    const medias = document.querySelectorAll('.mediaType');
    console.log('m', medias);

    medias.forEach((media) => {
      media.addEventListener('keydown', (e) => {
        console.log('lp', media);
        const { key } = e;

        if (key === 'Enter') {
          //if (e.target) {
          document.getElementById('carousel').style.display = 'block';
          const mediaItem = e.target.parentElement;
          const mediaCurrent = this.medias.find(
            (m) => Number(m.id) === Number(mediaItem.dataset.id)
          );
          console.log('r3', this.medias);

          this.mediaIndex = this.medias.findIndex(
            (m) => Number(m.id) === Number(mediaItem.dataset.id)
          );
          document.querySelector('.media-carousel').innerHTML =
            this.mediaFactory.render(mediaCurrent);
          console.log('r', mediaCurrent);

          document.querySelector('.title-media').innerHTML = mediaCurrent.title;
          //}
        }
      });
    });

    window.addEventListener('keydown', (e) => {
      const { key } = e;
      if (key === 'Escape') {
        document.getElementById('carousel').style.display = 'none';
      }
      if (key === 'ArrowRight') {
        if (this.mediaIndex === this.medias.length - 1) {
          this.mediaIndex = 0;
          document.querySelector('.media-carousel').innerHTML =
            this.mediaFactory.render(this.medias[this.mediaIndex + 1]);
          document.querySelector('.title-media').innerHTML =
            this.medias[this.mediaIndex + 1].title;
          return;
        }
        document.querySelector('.media-carousel').innerHTML =
          this.mediaFactory.render(this.medias[this.mediaIndex + 1]);
        document.querySelector('.title-media').innerHTML =
          this.medias[this.mediaIndex + 1].title;

        this.mediaIndex++;
      }
      if (key === 'ArrowLeft') {
        if (this.mediaIndex < 1) {
          this.mediaIndex = this.medias.length;
          document.querySelector('.media-carousel').innerHTML =
            this.mediaFactory.render(this.medias[this.mediaIndex - 1]);
          document.querySelector('.title-media').innerHTML =
            this.medias[this.mediaIndex - 1].title;
          return;
        }
        document.querySelector('.media-carousel').innerHTML =
          this.mediaFactory.render(this.medias[this.mediaIndex - 1]);
        document.querySelector('.title-media').innerHTML =
          this.medias[this.mediaIndex - 1].title;

        this.mediaIndex--;
      }
    });
  }
}
