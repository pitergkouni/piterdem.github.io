sunButtonElm = document.getElementById("sun-button");
moonButtonElm = document.getElementById("moon-button");
imgSixElm = document.getElementById("question6");
imgSevenElm = document.getElementById("question7");
headerElm = document.querySelector("header");
paragraphElm = document.querySelector("p");
buttonElm = document.querySelector("button");
questionContainer = document.querySelector(".questionContainer");
inputElm = document.querySelector("input");
h1Elm = document.querySelector("h1");

function themeLight() {
  moonButtonElm.classList.replace("none", "block");
  sunButtonElm.classList.add("none");
  document.body.style.backgroundColor = "black";
  imgSixElm.style.filter = "invert(0%)";
  imgSevenElm.style.filter = "invert(0%)";
  headerElm.style.backgroundColor = "black";
  questionContainer.style.color = "white";
  inputElm.style.backgroundColor = "#2c2c2c";
  inputElm.style.color = "white";
}
function themeDark() {
  sunButtonElm.classList.replace("none", "block");
  moonButtonElm.classList.replace("block", "none");
  document.body.style.backgroundColor = "white";
  imgSixElm.style.filter = "invert(100%)";
  imgSevenElm.style.filter = "invert(100%)";
  headerElm.style.backgroundColor = "white";
  questionContainer.style.color = "black";
  inputElm.style.backgroundColor = "inherit";
  inputElm.style.color = "black";
}

antallMinutter = 1;
antallSekunder = 30;
sekundTelling = 1;
function countDown() {
    
}
