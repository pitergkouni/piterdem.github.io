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
startButtonElm = document.querySelector(".start");

function themeLight() {
  moonButtonElm.classList.replace("none", "block");
  sunButtonElm.classList.add("none");
  headerElm.style.filter = "invert(100%)";
  document.querySelector("main").style.filter = "invert(100%)";
  document.querySelector("header img").style.filter = "opacity(0)";
}
function themeDark() {
  sunButtonElm.classList.replace("none", "block");
  moonButtonElm.classList.replace("block", "none");
  headerElm.style.filter = "invert(0%)";
  document.querySelector("main").style.filter = "invert(0%)";
  document.querySelector("header img").style.filter = "opacity(1)";
}
function quizStart() {
  questionContainer.classList.remove("nonenormal");
  startButtonElm.innerText = "Quizen har startet!";
  document.querySelector("section:first-child").style.height = "800px";
}
function headerClock() {
  document.querySelector(".countdown-header").classList.remove("nonenormal");
}
let sporsmal1 = false;
let sporsmal2 = false;
let sporsmal3 = false;
let sporsmal4 = false;
let sporsmal5 = false;
let sporsmal6 = false;
let sporsmal7 = false;
const sporsmal8Fasit =
  'document.getElementById("tittel").innerHTML = "Velkommen!";';
function sjekkSvar1(x, svar1) {
  const buttons = document.querySelectorAll("button");
  buttons[1].style.backgroundColor = "";
  buttons[2].style.backgroundColor = "";
  buttons[3].style.backgroundColor = "";
  buttons[4].style.backgroundColor = "";
  x.style.backgroundColor = "cyan";
  sporsmal1 = svar1;
}
function sjekkSvar2(x, svar2) {
  const buttons = document.querySelectorAll("button");
  buttons[5].style.backgroundColor = "";
  buttons[6].style.backgroundColor = "";
  buttons[7].style.backgroundColor = "";
  buttons[8].style.backgroundColor = "";
  x.style.backgroundColor = "cyan";
  sporsmal2 = svar2;
}
function sjekkSvar3(x, svar3) {
  const buttons = document.querySelectorAll("button");
  buttons[9].style.backgroundColor = "";
  buttons[10].style.backgroundColor = "";
  buttons[11].style.backgroundColor = "";
  buttons[12].style.backgroundColor = "";
  x.style.backgroundColor = "cyan";
  sporsmal3 = svar3;
}
function sjekkSvar4(x, svar4) {
  const buttons = document.querySelectorAll("button");
  buttons[13].style.backgroundColor = "";
  buttons[14].style.backgroundColor = "";
  buttons[15].style.backgroundColor = "";
  buttons[16].style.backgroundColor = "";
  x.style.backgroundColor = "cyan";
  sporsmal4 = svar4;
}
function sjekkSvar5(x, svar5) {
  const buttons = document.querySelectorAll("button");
  buttons[17].style.backgroundColor = "";
  buttons[18].style.backgroundColor = "";
  buttons[19].style.backgroundColor = "";
  buttons[20].style.backgroundColor = "";
  x.style.backgroundColor = "cyan";
  sporsmal5 = svar5;
}
function sjekkSvar6(x, svar6) {
  const buttons = document.querySelectorAll("button");
  buttons[21].style.backgroundColor = "";
  buttons[22].style.backgroundColor = "";
  buttons[23].style.backgroundColor = "";
  buttons[24].style.backgroundColor = "";
  x.style.backgroundColor = "cyan";
  sporsmal6 = svar6;
}
function sjekkSvar7(x, svar7) {
  const buttons = document.querySelectorAll("button");
  buttons[25].style.backgroundColor = "";
  buttons[26].style.backgroundColor = "";
  buttons[27].style.backgroundColor = "";
  buttons[28].style.backgroundColor = "";
  x.style.backgroundColor = "cyan";
  sporsmal7 = svar7;
}

const resultat = document.querySelector("#antallriktig .resultat");
function fasitSetup() {
  let z = 0;
  let w = 0;
  /*
  if (sporsmal1 == true) z += 1;
  if (sporsmal2 == true) z += 1;
  if (sporsmal3 == true) z += 1;
  if (sporsmal4 == true) z += 1;
  if (sporsmal5 == true) z += 1;
  if (sporsmal6 == true) z += 1;
  if (sporsmal7 == true) z += 1;
  if (inputElm.value == sporsmal8Fasit) z += 1;
  */
  clearInterval(interval);
  document.getElementById("minutes").innerHTML = "00";
  document.getElementById("seconds").innerHTML = "00";
  document.getElementById("minutes-header").innerHTML = "00";
  document.getElementById("seconds-header").innerHTML = "00";
  document.getElementById("faq").innerText = "Scroll ned";
  document.querySelector("section:last-of-type").classList.remove("nonenormal");
  if (sporsmal1 == true) {
    z += 1;
  } else {
    w += 1;
    document.querySelector(".feilene").innerHTML += "Spørsmål 1 ";
  }
  if (sporsmal2 == true) {
    z += 1;
  } else {
    w += 1;
    document.querySelector(".feilene").innerHTML += "<br>Spørsmål 2 ";
  }
  if (sporsmal3 == true) {
    z += 1;
  } else {
    w += 1;
    document.querySelector(".feilene").innerHTML += "<br>Spørsmål 3 ";
  }
  if (sporsmal4 == true) {
    z += 1;
  } else {
    w += 1;
    document.querySelector(".feilene").innerHTML += "<br>Spørsmål 4 ";
  }
  if (sporsmal5 == true) {
    z += 1;
  } else {
    w += 1;
    document.querySelector(".feilene").innerHTML += "<br>Spørsmål 5 ";
  }
  if (sporsmal6 == true) {
    z += 1;
  } else {
    w += 1;
    document.querySelector(".feilene").innerHTML += "<br>Spørsmål 6 ";
  }
  if (sporsmal7 == true) {
    z += 1;
  } else {
    w += 1;
    document.querySelector(".feilene").innerHTML += "<br>Spørsmål 7 ";
  }
  if (inputElm.value == sporsmal8Fasit) {
    z += 1;
  } else {
    w += 1;
    document.querySelector(".feilene").innerHTML += "<br>Spørsmål 8";
  }
  if (z == 8) {
    document.querySelector(".feilPa").style.display = "none";
    document.querySelector("#antallriktig > div").style.gap = "0"
  }
  resultat.innerHTML = (z / 8) * 100 + "%";
}
function fasit() {
  document.querySelector(".resultat").innerHTML = "";
  document.querySelector(".feilene").innerHTML = "";
  fasitSetup();
}

let minutesElm = document.getElementById("minutes");
let secondsElm = document.getElementById("seconds");
let minutesHeaderElm = document.getElementById("minutes-header");
let secondsHeaderElm = document.getElementById("seconds-header");
separatorElm = document.querySelector(".separator");

let timeLeft = 120;
let interval;
function start() {
  if (!interval) {
    interval = setInterval(countDown, 1000);
  }
}
function countDown() {
  timeLeft -= 1;
  const minutes = Math.floor(timeLeft / 60);
  const seconds = Math.floor(timeLeft % 60);
  if (minutes < 10) {
    minutesElm.textContent = "0" + minutes;
    minutesHeaderElm.textContent = "0" + minutes;
  } else {
    minutesElm.textContent = minutes;
    minutesHeaderElm.textContent = minutes;
  }
  if (seconds < 10) {
    secondsElm.textContent = "0" + seconds;
    secondsHeaderElm.textContent = "0" + seconds;
  } else {
    secondsElm.textContent = seconds;
    secondsHeaderElm.textContent = seconds;
  }
  if (timeLeft == 0) {
    clearInterval(interval);
    alert("Tiden har gått ut! Sjekk resultatene nederst");
  }
  console.log(timeLeft);
}
