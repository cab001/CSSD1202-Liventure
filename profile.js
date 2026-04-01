let longHair = document.getElementById("longHair");
let shortHair = document.getElementById("shortHair");

let longHairBtn = document.getElementById("longHairBtn");
let shortHairBtn = document.getElementById("shortHairBtn");

longHairBtn.addEventListener("click", longHairClicked);
shortHairBtn.addEventListener("click", shortHairClicked);

let hair;

function longHairClicked() {
    shortHair.classList.add("hide");
    longHair.classList.remove("hide");
    hair = "images/liventure-longhair-avatar.png";
}

function shortHairClicked() {
    longHair.classList.add("hide");
    shortHair.classList.remove("hide");
    hair = "images/liventure-shorthair-avatar.png";
}

// saving avatar
export function save(img) {
  img.src = hair;
}

/*
function save() {
    let displayAvatar = document.getElementById("avatarImg");
    displayAvatar.src = hair;
}*/