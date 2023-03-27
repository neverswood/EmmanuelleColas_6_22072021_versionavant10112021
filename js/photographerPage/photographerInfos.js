export default class PhotographerInfos {
  constructor(photographers) {
    this.photographers = photographers;
  }

  /* Compute the html for the information of a single photographer */
  renderPhotographerInfos() {
    return `
          <div>
          <h1 class="photographer-name">${this.photographers.name}</h1>
          <h2>${(this.photographers.city, this.photographers.country)}</h2>
          <p>${this.photographers.tagline}</p>
          <div class="photographerPage-tag">
          ${this.photographers.tags
            .map(
              (tag) => `<a href="#"><span data-filter=${tag}>#${tag}</span></a>`
            )
            .join('')}
          </div>
          </div>
          <button id="open" class="open" type="button">Contactez-moi</button>
          <img  src="Sample_Photos/Photographers_ID_Photos/${
            this.photographers.portrait
          }" alt="" />
          `;
  }
}
