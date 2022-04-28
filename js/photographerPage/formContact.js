export default class FormContact {
  constructor() {
    this.form = document.getElementById('sectionForm');
    this.addEventListener();
  }

  /* Display error message */
  addError(label, message) {
    document.getElementById(label).style.border = '2px solid red';
    document.getElementById(`${label}Error`).textContent = message;
  }

  /* Hide error message */
  removeError(label) {
    document.getElementById(label).style.border = 'none';
    document.getElementById(`${label}Error`).textContent = '';
  }

  /* Display fields in the console */
  logInput() {
    const firstName = document.getElementById('first').value;
    console.log('ValeurInputFirstName', firstName);
    const lastName = document.getElementById('last').value;
    console.log('ValeurInputLastName', lastName);
    const email = document.getElementById('email').value;
    console.log('ValeurInputEmail', email);
  }

  /* Add events related to the contact form and its errors */
  addEventListener() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      const firstName = document.getElementById('first');
      const lastName = document.getElementById('last');
      const email = document.getElementById('email');
      const emailRegex =
        // eslint-disable-next-line no-useless-escape
        /^[^\W][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$/;
      let error = false;

      if (firstName.value.length < 2) {
        this.addError('first', 'Veuillez entrer 2 caractères minimum');
        error = true;
      } else {
        this.removeError('first');
      }

      if (lastName.value.length < 2) {
        this.addError('last', 'Veuillez entrer 2 caractères minimum');
        error = true;
      } else {
        this.removeError('last');
      }

      if (!email.value.match(emailRegex)) {
        this.addError('email', 'Veuillez entrer un email valide');
        error = true;
      } else {
        this.removeError('email');
      }

      if (!error) {
        document.getElementById('modal-name').style.display = 'none';

        document.getElementById('sectionForm').className = 'sectionFormClose';
        document.getElementById('modal-message').style.display = 'block';
        document.getElementById('modal-message').innerHTML =
          'Votre message a bien été envoyé !';
      }
      this.logInput();
    });
  }
}
