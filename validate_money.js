let form = document.querySelector("form");

let q1 = document.getElementById("firstquestion");
let q2 = document.getElementById("secondquestion");
let q3 = document.getElementById("thirdquestion");
let q4 = document.getElementById("fourthquestion");
let q5 = document.getElementById("fifthquestion");
let q6 = document.getElementById("sixthquestion");
let q7 = document.getElementById("seventhquestion");
let q8 = document.getElementById("eighthquestion");
let q9 = document.getElementById("ninthquestion");
let q10 = document.getElementById("tenthquestion");
let q11 = document.getElementById("eleventhquestion");

let result = document.getElementById("result");
let error = document.getElementById("ErrorMessage");
let submitBtn = document.getElementById("submission");

let arrayOfQs = [q1, q3, q4, q5, q6, q7, q8, q9, q10]; 
let arrayOfQs2 = [q2, q11]; 

let allInputs = [...arrayOfQs, ...arrayOfQs2];

allInputs.forEach(function(input) {
    let errorPara = document.createElement("p");
    errorPara.style.color = "red";
    errorPara.style.fontSize = "0.9em";
    errorPara.style.margin = "5px 0";
    errorPara.id = input.id + "-error";
    input.parentNode.appendChild(errorPara);
});

arrayOfQs.forEach(function(input) {
    input.addEventListener("input", function() {
        let value = input.value.trim();
        let re = /^(yes|no)$/i;
        let errorPara = document.getElementById(input.id + "-error");

        if (value === "") {
            input.style.borderColor = "red";
            errorPara.textContent = "This field is required";
        }
        else if (!re.test(value)) {
            input.style.borderColor = "orange";
            errorPara.textContent = "Enter Yes or No";
        }
        else {
            input.style.borderColor = "green";
            errorPara.textContent = "";
        }
    });
});

arrayOfQs2.forEach(function(input) {
    input.addEventListener("input", function() {
        let value = input.value.trim();
        let re = /^(USD\s?\d+(\.\d{1,2})?|\d+(\.\d{1,2})?\s?USD)$/i;
        let errorPara = document.getElementById(input.id + "-error");

        if (value === "") {
            input.style.borderColor = "red";
            errorPara.textContent = "This field is required";
        }
        else if (!re.test(value)) {
            input.style.borderColor = "orange";
            errorPara.textContent = "Enter a valid USD amount";
        }
        else {
            input.style.borderColor = "green";
            errorPara.textContent = "";
        }
    });
});

function extractNumber(value) {
    return parseFloat(value.replace(/[^\d.]/g, ""));
}

function scorePercent(score, maxScore) {
    return Math.round((score / maxScore) * 100);
}

submitBtn.addEventListener("click", function() {
    window.confirm("Are you sure you want to submit the typed information to the form?");
    let allValid = true;
    let score = 0;
    let maxScore = 11;

    error.textContent = "";
    result.textContent = "";

    allInputs.forEach(function(input) {
        let value = input.value.trim();
        let errorPara = document.getElementById(input.id + "-error");

        if (value === "") {
            input.style.borderColor = "red";
            errorPara.textContent = "This field is required";
            allValid = false;
        }
    });

    if (!allValid) {
        error.textContent = "Fix errors first";
        return;
    }

    arrayOfQs.forEach(function(input) {
        let value = input.value.trim().toLowerCase();
        if (value === "yes") {
            score++;
        }
    });

    let spending = extractNumber(q2.value);
    let income = extractNumber(q11.value);

    let message = "";

    if (!isNaN(spending) && !isNaN(income)) {
        if (income > spending) {
            score++;
            message = "Plus Point: Income is higher than spending";
        } else {
            message = "Issue: Spending is higher than income";
        }
    }

    let percent = scorePercent(score, maxScore);

    result.innerHTML = `
        <b>Your Score: ${score} / ${maxScore} (${percent}%)</b><br>
        ${message}
    `;

    if (percent <= 60) {
        result.innerHTML += "<br>It is highly recommended that you go through the resources below and improve your finance habits";
    }
    else if (percent > 60 && percent <= 70) {
        result.innerHTML += "<br>Your neither good or bad at managing your finances. You should go through the resources below.";
    }
    else if (percent > 70 && percent < 80) {
        result.innerHTML += "<br>You are good at managing your finances. To further improve your finance knowledge, you could read the resources below.";
    }
    else if (percent >= 80) {
        result.innerHTML += "<br>You are a financial management master!";
    }
});

document.styleSheets[0].insertRule("#result, #ErrorMessage { color : cyan; text-shadow : 0px 6px 12px cyan}");

submitBtn.addEventListener("mouseover", function() {
    submitBtn.style.setProperty("background-color", "yellow");
    submitBtn.style.setProperty("width", "200px");
    submitBtn.style.setProperty("height", "50px");
});

submitBtn.addEventListener("mouseout", function(){
    submitBtn.style.removeProperty("background-color");
    submitBtn.style.removeProperty("width");
    submitBtn.style.removeProperty("height");
});