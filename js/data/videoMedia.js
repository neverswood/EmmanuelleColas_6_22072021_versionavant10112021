export default class VideoMedia {
  constructor(media) {
    this.media = media;
  }

  getHtml() {
    return `
      <div id="media-video" class="mediaType" tabindex="0">
      <video id="video">
      <source type="video/mp4" src="Sample_Photos/${this.media.photographerId}/${this.media.video}" alt="${this.media.alt}">
      </video>
      </div>`;
  }
}
