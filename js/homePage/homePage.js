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
    document.getElementById("photographers").innerHTML =
      this.renderPhotographerItems();
    this.bindKeyboardEventListeners();
  }

  renderPhotographerItems() {
    return `${this.photographerItems
      .map((photographerItem) => photographerItem.renderPhotographerItem())
      .join("")}`;
  }

  bindKeyboardEventListeners() {
    window.addEventListener("keydown", (e) => {
      if (e.target.matches("#header-navbar > a")) {
        const filterName = e.target
          .querySelector(".btnTags")
          .getAttribute("data-filter");
        const { key } = e;
        if (key === "Enter") {
          this.barTags.filter(filterName);
        }
      }
    });
  }
}
