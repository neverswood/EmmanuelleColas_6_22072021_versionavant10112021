export default class ImageMedia {
  constructor(media) {
    this.media = media;
  }

  getHtml() {
    return `
      <div id="media-image" class="mediaType" tabindex="0">
        <img
          id="index"
          src="Sample_photos/${this.media.photographerId}/${this.media.image}"
          alt=""
          class="image-photographerBox gallery">
      </div>`;
  }
}
