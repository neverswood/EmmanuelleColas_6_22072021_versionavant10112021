export default class Dropdown {
  constructor(medias, photographerPage) {
    this.medias = medias;
    this.photographerPage = photographerPage;
    this.listbox = document.querySelector('[role="listbox"]');
    //   this.addSelectOptionEventListener();
    //this.keydownEvent();
    this.event();
    this.dropdownIsClosed = true;
  }

  /* addSelectOptionEventListener() {
    const characters = [...this.listbox.children];

    this.listbox.addEventListener("click", (event) => {
      const option = event.target.closest("li");
      if (!option) return;
      this.listbox.setAttribute("aria-activedescendant", option.id);
      characters.forEach((element) => element.classList.remove("is-selected"));
      option.classList.add("is-selected");
    });
  }*/

  event() {
    const buttonSort = document.querySelector(".btn-sort");
    const listOption = document.querySelector(".listOption");

    buttonSort.addEventListener("click", () => {
      if (listOption.style.display == "none") {
        listOption.style.display = "block";
        document.querySelector(".fa-chevron-up").style.display = "none";
        document.querySelector(".fa-chevron-down").style.display = "block";
      } else if (listOption.style.display === "block") {
        listOption.style.display = "none";
        document.querySelector(".fa-chevron-up").style.display = "block";
        document.querySelector(".fa-chevron-down").style.display = "none";
      }
    });

    listOption.addEventListener("click", (e) => {
      this.sortMedias(e.target.dataset.value);
      this.photographerPage.drawGallery();
    });

    window.addEventListener("click", (e) => {
      if (!e.target.matches("#select-option *")) {
        listOption.style.display = "none";
      }
    });
  }

  sortMedias(sort) {
    console.log("sort");
    switch (sort) {
      case "popularity":
        this.medias.sort(function (a, b) {
          if (a.likes < b.likes) {
            return 1;
          } else if (b.likes < a.likes) {
            return -1;
          }
          return 0;
        });
        break;
      case "date":
        this.medias.sort(function (a, b) {
          if (a.date < b.date) {
            return 1;
          } else if (b.date < a.date) {
            return -1;
          }
          return 0;
        });
        break;
      case "title":
        this.medias.sort(function (a, b) {
          if (a.title < b.title) {
            return -1;
          } else if (b.title < a.title) {
            return 1;
          }
          return 0;
        });
        break;
    }
  }
}
