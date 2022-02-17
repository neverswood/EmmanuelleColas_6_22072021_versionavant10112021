const main = async () => {
  const response = await fetch("../api/FishEyeData.json");
  const data = await response.json();

  if (window.location.pathname.includes("/photographer.html")) {
  } else {
  }
};

main();
