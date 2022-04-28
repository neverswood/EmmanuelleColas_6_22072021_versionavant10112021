export default class ReturnMain {
  constructor() {
    this.returnMain = document.getElementById('return-main');
    this.home = document.getElementById('home');
    this.addEvent();
  }

  /* Display the button to get back to the top of the page */
  launchReturnMain() {
    this.returnMain.style.display = 'block';
  }

  /* Add the event to display the button when the user scroll */
  addEvent() {
    this.home.addEventListener('wheel', () => this.launchReturnMain());
    this.returnMain.addEventListener('click', this.home);
  }
}
