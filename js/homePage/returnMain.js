export default class ReturnMain {
  constructor() {
    this.returnMain = document.getElementById("return-main");
    this.home = document.getElementById("home");
    this.addEvent();
  }

  launchReturnMain() {
    this.returnMain.style.display = "block";
  }

  addEvent() {
    this.home.addEventListener("wheel", () => this.launchReturnMain());
    this.returnMain.addEventListener("click", this.home);
  }
}
