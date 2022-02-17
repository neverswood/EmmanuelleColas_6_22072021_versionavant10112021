import PhotographerItem from "./photographerItem.js";

export default class HomePage {
  constructor(data) {
    this.photographerItems = data.photographers.map((photographer) => {
      return new PhotographerItem(photographer);
    });
  }

  displayPhotographerItem() {
    return `${this.photographerItems
      .map((photographerItem) => photographerItem.renderPhotographerItem())
      .join("")}`;
  }
}
