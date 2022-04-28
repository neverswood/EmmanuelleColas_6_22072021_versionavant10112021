export default class BarTags {
  constructor(data) {
    this.photographers = data.photographers;
    this.addEventListener();
  }

  /* Filter of photographers at the click of a tag */
  addEventListener() {
    const tags = document.querySelectorAll('.btnTags');
    tags.forEach((tag) => {
      const filterName = tag.getAttribute('data-filter');
      tag.addEventListener('click', () => this.filter(filterName));
    });
  }

  /* Display of photographers according to their tags */
  filter(tag) {
    this.photographers.map((photographer) => {
      const photographerElement = document.getElementById(photographer.id);
      const isFiltered = photographer.tags.includes(tag);

      if (!isFiltered) {
        photographerElement.style.display = 'none';
      } else {
        photographerElement.style.display = 'block';
      }
    });
  }
}
