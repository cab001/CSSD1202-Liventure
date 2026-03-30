let form = document.querySelector("form");
let emailAdd = document.getElementById("emailaddr");
let phoneNum = document.getElementById("phonenum");
let date = document.getElementById("datesent");
let inquiry = document.getElementById("inquiry");

let sizeMinus = document.getElementById("sizeminus");
let sizePlus = document.getElementById("sizeplus");
let highlight = document.getElementById("highlight");
let arial = document.getElementById("Arial");
let roboto = document.getElementById("roboto");

let highlighted = false;

function clearError(input) {
    let next = input.nextElementSibling;
    if (next && next.classList.contains("error-msg")) {
        next.remove();
    }
    input.style.borderColor = "";
}

function createError(input, message, type = "error") {
    clearError(input);
    let error = document.createElement("p");
    error.className = "error-msg";
    let errorMessage = document.createTextNode(message);
    error.appendChild(errorMessage);
    error.style.setProperty("color", type === "error" ? "red" : "orange");
    error.style.setProperty("text-shadow", `0px 6px 12px ${type === "error" ? "red" : "orange"}`);
    error.style.fontSize = "0.9em";
    error.style.margin = "5px 0";
    input.after(error);
    input.style.borderColor = type === "error" ? "red" : "orange";
}

function setValid(input) {
    clearError(input);
    input.style.borderColor = "green";
}

emailAdd.addEventListener("input", function() {
    let value = emailAdd.value.trim();
    let reEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value === "") {
        createError(emailAdd, "This field is required");
    } else if (!reEmail.test(value)) {
        createError(emailAdd, "Invalid format: name@domain.com", "warning");
    } else {
        setValid(emailAdd);
    }
});

phoneNum.addEventListener("input", function() {
    let value = phoneNum.value.trim();
    let rePhone = /^\d{10}$/;
    if (value === "") {
        createError(phoneNum, "This field is required");
    } else if (!rePhone.test(value)) {
        createError(phoneNum, "Must contain exactly 10 numbers", "warning");
    } else {
        setValid(phoneNum);
    }
});

date.addEventListener("input", function() {
    let value = date.value.trim();
    let reDate = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
    if (value === "") {
        createError(date, "This field is required");
    } else if (!reDate.test(value)) {
        createError(date, "Invalid format: YYYY-MM-DD", "warning");
    } else {
        setValid(date);
    }
});

inquiry.addEventListener("input", function() {
    if (inquiry.value.trim().length === 0) {
        createError(inquiry, "This field is required");
    } else {
        setValid(inquiry);
    }
});

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let isValid = true;

    let inputs = [emailAdd, phoneNum, date, inquiry];
    inputs.forEach(input => {
        if (input.value.trim() === "" || input.style.borderColor === "orange" || input.style.borderColor === "red") {
            if (input.value.trim() === "") createError(input, "This field is required");
            isValid = false;
        }
    });

    if (isValid) {
        if (window.confirm("Are you sure you want to submit?")) {
            alert("Form Submitted Successfully!");
            form.submit();
        }
    }
});

function createCounter(target) {
    let counter = document.createElement("p");
    counter.style.fontSize = "0.8em";
    target.insertAdjacentElement("afterend", counter);
    target.addEventListener("input", () => {
        counter.textContent = `Characters: ${target.value.length}`;
    });
}

createCounter(inquiry);

function updateFontSize(adjustment) {
    let size = window.getComputedStyle(inquiry).fontSize;
    let newSize = parseInt(size) + adjustment;
    if (newSize >= 10 && newSize <= 40) {
        inquiry.style.fontSize = newSize + "px";
    }
}

sizeMinus.addEventListener("click", () => updateFontSize(-2));
sizePlus.addEventListener("click", () => updateFontSize(2));

highlight.addEventListener("click", function() {
    highlighted = !highlighted;
    inquiry.style.backgroundColor = highlighted ? "yellow" : "white";
});

arial.addEventListener("click", () => inquiry.style.fontFamily = "Arial");
roboto.addEventListener("click", () => inquiry.style.fontFamily = "Roboto");

document.styleSheets[0].insertRule(".error-msg { font-weight: bold; }", 0);

document.addEventListener("keydown", function(event) {
    let activeBox = document.activeElement;

    if (activeBox === inquiry) {
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