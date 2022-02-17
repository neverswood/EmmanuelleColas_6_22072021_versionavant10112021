import HomePage from "./homePage/homePage.js";

const main = async () => {
  const response = await fetch("../api/FishEyeData.json");
  const data = await response.json();

  if (window.location.pathname.includes("/photographer.html")) {
    //
  } else {
    const homePage = new HomePage(data);
    document.getElementById("photographers").innerHTML =
      homePage.displayPhotographerItem();
  }
};

main();
