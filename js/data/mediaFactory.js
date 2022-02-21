/* eslint-disable no-prototype-builtins */
import ImageMedia from "./imageMedia.js";
import VideoMedia from "./videoMedia.js";

export default class MediaFactory {
  render(media) {
    let mediaFactory = null;
    if (media.hasOwnProperty("image")) {
      mediaFactory = new ImageMedia(media);
    } else {
      mediaFactory = new VideoMedia(media);
    }
    return mediaFactory.getHtml();
  }
}
