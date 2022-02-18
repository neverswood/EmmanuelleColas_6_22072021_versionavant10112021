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
    this.photographerInfos = new PhotographerInfos(this.photographer);
    this.drawPhotographerPage();
    console.log("oh", this.photographer);
  }

  drawPhotographerPage() {
    const photographerPresentation = document.getElementById(
      "presentation-photographer"
    );
    photographerPresentation.innerHTML =
      this.photographerInfos.renderPhotographerInfos();
  }

  displayPhotographerInfos() {
    return this.photographerInfos.renderPhotographerInfos();
  }
}
