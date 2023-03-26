export default class ImageMedia {
  constructor(media) {
    this.media = media;
  }

  getHtml() {
    console.log('rout', this.media.alt);
    return `
      <div id="media-image" class="mediaType" tabindex="0">
        <img
          id="index"
          src="Sample_Photos/${this.media.photographerId}/${this.media.image}"
          alt="${this.media.alt}"
          class="image-photographerBox gallery">
      </div>`;
  }
}
