let longHair = document.getElementById("longHair");
let shortHair = document.getElementById("shortHair");

let longHairBtn = document.getElementById("longHairBtn");
let shortHairBtn = document.getElementById("shortHairBtn");

longHairBtn.addEventListener("click", longHairClicked);
shortHairBtn.addEventListener("click", shortHairClicked);

function longHairClicked() {
    shortHair.classList.add("hide");
    longHair.classList.remove("hide");
}

function shortHairClicked() {
    longHair.classList.add("hide");
    shortHair.classList.remove("hide");
}