let form = document.querySelector("form");
let password = document.getElementById("password");
let username = document.getElementById("username");
let pronouns = document.getElementById("pronouns");
let birthday = document.getElementById("birthday");
let getToKnow = document.getElementById("getToKnow");
let goals = document.getElementById("goals");

let sizeMinus = document.getElementById("sizeminus");
let sizePlus = document.getElementById("sizeplus");
let highlight = document.getElementById("highlight");
let arial = document.getElementById("Arial");
let roboto = document.getElementById("roboto");

let highlighted = false;

function showError(input, message, type = "error") {
    removeError(input);
    let output = document.createElement("p");
    output.className = "error-message";
    output.textContent = message;
    output.style.setProperty("color", type === "error" ? "red" : "orange");
    output.style.setProperty("text-shadow", `0px 6px 12px ${type === "error" ? "red" : "orange"}`);
    output.style.margin = "5px 0";
    output.style.fontSize = "0.9em";
    input.insertAdjacentElement("afterend", output);
    input.style.borderColor = type === "error" ? "red" : "orange";
}

function removeError(input) {
    let next = input.nextElementSibling;
    if (next && next.classList.contains("error-message")) {
        next.remove();
    }
    input.style.borderColor = "";
}

function setValid(input) {
    removeError(input);
    input.style.borderColor = "green";
}

username.addEventListener("input", function() {
    if (username.value.trim() === "") {
        showError(username, "Username cannot be empty");
    } else {
        setValid(username);
    }
});

password.addEventListener("input", function() {
    if (password.value.length === 0) {
        showError(password, "This field is required");
    } else if (password.value.length < 8) {
        showError(password, "Password must be at least 8 characters long", "warning");
    } else {
        setValid(password);
    }
});

pronouns.addEventListener("input", function() {
    let reForPronouns = /^[a-z]+(\/[a-z]+)?$/i;
    if (pronouns.value.trim() === "") {
        showError(pronouns, "This field is required");
    } else if (!reForPronouns.test(pronouns.value.trim())) {
        showError(pronouns, "Enter pronouns like she/her or he/him", "warning");
    } else {
        setValid(pronouns);
    }
});

birthday.addEventListener("input", function() {
    let reForBirthday = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
    if (birthday.value === "") {
        showError(birthday, "This field is required");
    } else if (!reForBirthday.test(birthday.value)) {
        showError(birthday, "Enter birthday in YYYY-MM-DD format", "warning");
    } else {
        setValid(birthday);
    }
});

getToKnow.addEventListener("input", function() {
    if (getToKnow.value.trim() === "") {
        showError(getToKnow, "This field cannot be empty");
    } else {
        setValid(getToKnow);
    }
});

goals.addEventListener("input", function() {
    if (goals.value.trim() === "") {
        showError(goals, "This field cannot be empty");
    } else {
        setValid(goals);
    }
});

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let valid = true;

    let inputs = [username, password, pronouns, birthday, getToKnow, goals];
    
    inputs.forEach(input => {
        if (input.value.trim() === "" || input.style.borderColor === "orange" || input.style.borderColor === "red") {
            if (input.value.trim() === "") showError(input, "This field is required");
            valid = false;
        }
    });

    if (valid) {
        if (window.confirm("Are you sure you want to submit the form?")) {
            alert("Form Submitted Successfully!");
            form.submit();
        }
    }
});

function updateFontSize(adjustment) {
    let size = window.getComputedStyle(getToKnow).fontSize;
    let newSize = parseInt(size) + adjustment;
    if (newSize >= 10 && newSize <= 40) {
        getToKnow.style.fontSize = newSize + "px";
    }
}

sizeMinus.addEventListener("click", () => updateFontSize(-2));
sizePlus.addEventListener("click", () => updateFontSize(2));

highlight.addEventListener("click", function() {
    highlighted = !highlighted;
    getToKnow.style.backgroundColor = highlighted ? "yellow" : "white";
});

arial.addEventListener("click", () => getToKnow.style.fontFamily = "Arial");
roboto.addEventListener("click", () => getToKnow.style.fontFamily = "Roboto");

function createCounter(target) {
    let counter = document.createElement("p");
    counter.style.fontSize = "0.8em";
    target.insertAdjacentElement("afterend", counter);
    target.addEventListener("input", () => {
        counter.textContent = `Characters: ${target.value.length}`;
    });
}

createCounter(getToKnow);
createCounter(goals);

document.addEventListener("keydown", function(event) {
    let activeBox = document.activeElement;

    if (activeBox === getToKnow || activeBox === goals) {
        if (event.key === "=") {
            event.preventDefault();
            let size = parseInt(window.getComputedStyle(activeBox).fontSize);
            if (size < 40) {
                activeBox.style.fontSize = (size + 2) + "px";
            }
        }

        if (event.key === "-") {
            event.preventDefault();
            let size = parseInt(window.getComputedStyle(activeBox).fontSize);
            if (size > 10) {
                activeBox.style.fontSize = (size - 2) + "px";
            }
        }

        if (event.key.toLowerCase() === "h") {
            event.preventDefault();
            activeBox.style.backgroundColor =
                activeBox.style.backgroundColor === "yellow" ? "white" : "yellow";
        }

        if (event.key.toLowerCase() === "m") {
            event.preventDefault();
            activeBox.style.fontFamily = "Arial";
        }

        if (event.key.toLowerCase() === "r") {
            event.preventDefault();
            activeBox.style.fontFamily = "Roboto";
        }

        if (event.key === "0") {
            event.preventDefault();
            activeBox.style.fontSize = "16px";
            activeBox.style.fontFamily = "";
            activeBox.style.backgroundColor = "white";
        }
    }
});