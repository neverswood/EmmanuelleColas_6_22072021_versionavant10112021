import FormContact from './formContact.js';

export default class ModalContact {
  constructor(photographer) {
    this.modalbg = document.getElementById('bground');
    this.sectionForm = document.getElementById('sectionForm');
    this.photographer = photographer;
    this.formContact = new FormContact();
  }

  /* Compute the html for the top of the modal contact in order to include the name of the photographer*/
  renderModalContact() {
    return `
      <div id="modal-name">
      <p>Contactez-moi</p>
      <span>${this.photographer.name}</span>
      </div>
      `;
  }

  /* Display the modal contact */
  displayOpenModal() {
    this.modalbg.style.display = 'block';
    document.getElementById('modal-message').style.display = 'none';
    document.getElementById('modal-name').style.display = 'block';
    document.getElementById('sectionForm').className = 'sectionFormOpen';
    this.renderModalContact();
    console.log(this.renderModalContact);
    document.getElementById('first').focus();
  }

  /* Close the modal contact */
  displayCloseModal() {
    this.modalbg.style.display = 'none';
  }

  /* Add event related to the opening and closing of the modal contact*/
  bindModalContactEventListeners() {
    const buttonContact = document.getElementById('open');
    const modalClose = document.querySelectorAll('.close');
    buttonContact.addEventListener('click', () => {
      this.displayOpenModal();
    });
    modalClose.forEach((btn) => {
      btn.addEventListener('click', () => {
        this.displayCloseModal();
      });
    });
  }
}
