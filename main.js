const body = document.getElementsByTagName("body")[0];
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";
body.style.justifyContent = "center";
body.style.height = "100vh";
body.style.backgroundColor = "purple";
body.style.margin = "0em 2em 0em"
body.style.borderLeft = "solid";
body.style.borderRight = "solid";
body.style.borderWidth = "2em";
body.style.borderColor = "orange";
const mainBox = document.getElementById("mainBox");
mainBox.style.display = "flex";
mainBox.style.flexDirection = "column";
mainBox.style.alignItems = "center";
mainBox.style.justifyContent = "center";
mainBox.style.height = "20em";
mainBox.style.width = "30em";
// mainBox.style.backgroundColor = "lightblue";
const title = document.getElementsByTagName("h1")[0];
title.style.textShadow = "1px 1px 6px orange"
title.style.color = "lightblue";
title.style.textAlign = "center";
const generatorButton = document.getElementsByTagName("button")[0];
generatorButton.style.backgroundColor = "orange";
generatorButton.style.border = "none";
generatorButton.style.borderRadius = "0.5em"
generatorButton.style.height = "4vh";
generatorButton.style.width = "20vh";
generatorButton.style.color = "purple"
// generatorButton.style.textShadow = "1px 1px 5px lightblue"
generatorButton.style.fontSize = "1.1em"
const showMe = document.querySelector("#showMe");
showMe.style.margin = "1em"
showMe.style.display = "flex";
showMe.style.alignItems = "center";
showMe.style.justifyContent = "center";
showMe.style.borderRadius = "0.5em"
showMe.style.backgroundColor = "lightblue"
showMe.style.color = "purple"
showMe.style.width = "8em"
showMe.style.height = "2.5em"
const randomHex = () => {
  let result = [];
  let numAndStr = "1234567890ABCDEF";
  for (let i = 0; i < 6; i++) {
    result.push(numAndStr[Math.floor(Math.random() * numAndStr.length)]);
  }
  showMe.innerHTML = result.join("");
  return result.join("");
};
