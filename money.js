var moneyResult = document.getElementById("money-data");
var clickMoney = document.getElementById("click-button");
var count = 0;

var userTime =0;
clickMoney.addEventListener("click", function(){
    window.alert("Are you sure you want to find out want happens to your bank account?");
    setInterval(function(){
        moneyResult.textContent = "$" + count;
        count++;
    }, 10)
});
clickMoney.addEventListener("mouseover", function() {
    clickMoney.style.setProperty("background-color", "yellow");
    clickMoney.style.setProperty("width", 200 + "px");
    clickMoney.style.setProperty("height", 50+"px");
})
clickMoney.addEventListener("mouseout", function(){
    clickMoney.style.removeProperty("background-color");
    clickMoney.style.removeProperty("width");
    clickMoney.style.removeProperty("height");
})
let timeSpent = 0;
let achievementUnlocked = false;

let timer = setInterval(function() {
    timeSpent += 1000;

    if (timeSpent >= 1800000 && !achievementUnlocked) {
        achievementUnlocked = true;

        let achievement = document.createElement("p");
        achievement.textContent = "Achievement Unlocked: 30 Minutes of Focus!";
        achievement.style.color = "gold";
        achievement.style.fontWeight = "bold";
        achievement.style.setProperty("textShadow : 0px 6px 12px gold");
        document.main.appendChild(achievement);
        clearInterval(timer);
    }
}, 1000);

