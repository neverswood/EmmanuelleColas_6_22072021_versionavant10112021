import HomePage from "./homePage/homePage.js";
import PhotographerPage from "./photographerPage/photographerPage.js";

const main = async () => {
  const response = await fetch("../api/FishEyeData.json");
  const data = await response.json();

  if (window.location.pathname.includes("/photographer.html")) {
    new PhotographerPage(data);
  } else {
    new HomePage(data);
  }
};

main();
