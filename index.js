// when mouse hovers over button, make it have blue shadow (add blueShadow class maybe)
teleportBtns = document.querySelectorAll(".tBtn");

for (i = 0; i < teleportBtns.length; i++) {
    teleportBtns[i].addEventListener("mouseover", mouseoverBtnHandler);
    teleportBtns[i].addEventListener("mouseout", mouseoutBtnHandler);
}

function mouseoverBtnHandler(event) {
    event.target.classList.add("blueShadow");
}

function mouseoutBtnHandler(event) {
    event.target.classList.remove("blueShadow");
}

let habitStreakP = document.getElementById("habitStreakP");
habitStreakP.textContent = "Habit Streak: " + 0;


// if have time, can make customizable avatar, and when hover over a hair option of the user's choice, replace the current choice with the one being hovered
// ex. if they have short hair equipped but their mouse is hovering over the long hair, show the long hair and hide the short hair
// otherwise just add a picture for a default avatar in the html

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