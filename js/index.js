//import MediaFactory from "./data/mediaFactory.js";
//import MediaFactory from "./data/mediaFactory.js";
import HomePage from "./homePage/homePage.js";
import PhotographerPage from "./photographerPage/photographerPage.js";

const main = async () => {
  const response = await fetch("../api/FishEyeData.json");
  const data = await response.json();

  if (window.location.pathname.includes("/photographer.html")) {
    new PhotographerPage(data);
    //new MediaFactory(data);
  } else {
    const homePage = new HomePage(data);
    document.getElementById("photographers").innerHTML =
      homePage.displayPhotographerItem();
    // new MediaFactory(data);
  }
};

main();
