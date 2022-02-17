import BarTags from "./barTags.js";
import PhotographerItem from "./photographerItem.js";
import ReturnMain from "./returnMain.js";

export default class HomePage {
  constructor(data) {
    this.photographerItems = data.photographers.map((photographer) => {
      return new PhotographerItem(photographer);
    });
    this.returnMain = new ReturnMain();
    this.barTags = new BarTags(data);
  }

  displayPhotographerItem() {
    return `${this.photographerItems
      .map((photographerItem) => photographerItem.renderPhotographerItem())
      .join("")}`;
  }
}
