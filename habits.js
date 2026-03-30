
/* js for the goal toggles*/
let waterToggle = document.getElementById("waterToggle");
let sleepToggle = document.getElementById("sleepToggle");
let mealsToggle = document.getElementById("mealsToggle");
let exerciseToggle = document.getElementById("exerciseToggle");
    // implement custom stat if theres time, maybe even a plus button to add more of them (and select them using nextsibling)

let toggleForm = document.getElementById("toggleForm");
//toggleForm.addEventListener("submit", checkToggles);
// instead of using form submit, to better comply wuth assignment req, could use click event on each toggle instead and then toggling a class that hides stuff
waterToggle.addEventListener("click", checkToggles);
sleepToggle.addEventListener("click", checkToggles);
mealsToggle.addEventListener("click", checkToggles);
exerciseToggle.addEventListener("click", checkToggles);

let dailyWater = document.getElementById("dailyWater");
let dailySleep = document.getElementById("dailySleep");
let dailyMeals = document.getElementById("dailyMeals");
let dailyExercise = document.getElementById("dailyExercise");

let waterGoalDiv = document.getElementById("waterGoalDiv");
let sleepGoal = document.getElementById("sleepGoalDiv");
let mealsGoal = document.getElementById("mealsGoalDiv");
let exerciseGoal = document.getElementById("exerciseGoalDiv");

let waterStreakLabel = document.getElementById("waterStreakLabel");
let sleepStreakLabel = document.getElementById("sleepStreakLabel");
let mealStrLabel = document.getElementById("mealStrLabel");
let exerciseStrLabel = document.getElementById("exerciseStrLabel");

// function checks if a toggle is checked, and hides/shows the stat's details based off of that
function checkToggles() {
    if (waterToggle.checked) {
        //remove any hide class or attribute from the stuff that show water goal and progress (ex. Oz of water under tdy's stats and water: under goals:)
        dailyWater.classList.remove("hide");
        waterGoalDiv.classList.remove("hide");
        waterStreakLabel.classList.remove("hide");
        //console.log(water.value);
    }
    else {
        dailyWater.classList.add("hide");
        waterGoalDiv.classList.add("hide");
        waterStreakLabel.classList.add("hide");
    }
    if (sleepToggle.checked) {
        dailySleep.classList.remove("hide");
        sleepGoal.classList.remove("hide");
        sleepStreakLabel.classList.remove("hide");
    }
    else {
        dailySleep.classList.add("hide");
        sleepGoal.classList.add("hide");
        sleepStreakLabel.classList.add("hide");
    }
    if (mealsToggle.checked) {
        dailyMeals.classList.remove("hide");
        mealsGoal.classList.remove("hide");
        mealStrLabel.classList.remove("hide");
    }
    else {
        dailyMeals.classList.add("hide");
        mealsGoal.classList.add("hide");
        mealStrLabel.classList.add("hide");
    }
    if (exerciseToggle.checked) {
        dailyExercise.classList.remove("hide");
        exerciseGoal.classList.remove("hide");
        exerciseStrLabel.classList.remove("hide");
    }
    else {
        dailyExercise.classList.add("hide");
        exerciseGoal.classList.add("hide");
        exerciseStrLabel.classList.add("hide");
    }
    // check list of custom stat toggles (has class .customStatToggles)
    //let customStatsToggles = document.getElementsByClassName("customStatsToggles");
    // if (event.target.classList.contains("customStatsToggles")) {
    //     if (event.target.checked) {
    //         event.target.classList.remove("hide");
    //     }
    //     else {
    //         event.target.classList.add("hide");
    //     }
    //}
     // maybe disable toggling for this because it will take too long to get all of the stuff we made to get the "hide" class

}

// adding custom stat: idea: remove checkbox from the side, 
// just make the input a box to write the name of the stat, 
// then add a ADD button that will add the value of the input box as a stat name in todays stats and goals
// also add a REMOVE button to remove (most recent?) custom stat,
//  and maybe an alert that prevents default stats from being removed? 
// and/or an x button beside each stat to track 
// so u can hide(if default) or delete stats

// also can add alert when they try to make an empty-string named stat

let customStatInput = document.querySelector("#customStatName");
let addStatBtn = document.querySelector("#addStat");
let toggles = document.querySelector("#toggles");
let dailyStats = document.querySelector("#dailyStats");
let goals = document.querySelector("#goals");
let streaks = document.querySelector("#streaks");

addStatBtn.addEventListener("click", createNewStat);

function createNewStat() {
    if (customStatInput.value == "") {
        alert("‼I cannot add a stat with no name‼");
    }
    else {
        let newStatToggle = document.createElement("input");
        let newStatToggleLabel = document.createElement("label");
        let newStatToggleDiv = document.createElement("div");

        let dailyNewStat = document.createElement("div");
        let newStat = document.createElement("input");
        let newStatLabel = document.createElement("label");

        let newStatGoalDiv = document.createElement("div");
        let newStatGoal = document.createElement("input");
        let newStatGoalLabel = document.createElement("label");

        let newStatStrLabel = document.createElement("p");

        newStatToggle.type = "checkbox";
        newStatToggle.checked = true;
        newStatToggle.classList.add("customStatsToggles");
        newStatToggle.classList.add("hide");
        //newStatToggle.addEventListener("click", checkToggles);
        newStatToggleLabel.textContent = customStatInput.value;
        newStatToggleLabel.appendChild(newStatToggle);
        newStatToggleDiv.appendChild(newStatToggleLabel);
        toggles.appendChild(newStatToggleDiv);

        newStatLabel.textContent = customStatInput.value + ":";
        newStat.type = "number";
        newStat.value = "0";
        newStatLabel.appendChild(newStat);
        dailyNewStat.appendChild(newStatLabel);
        dailyStats.appendChild(dailyNewStat);

        //appending newStatGoal
        newStatGoalLabel.textContent = customStatInput.value + ":";
        newStatGoal.type = "number";
        newStatGoal.placeholder = "0";
        newStatGoalLabel.appendChild(newStatGoal);
        newStatGoalDiv.appendChild(newStatGoalLabel);
        goals.appendChild(newStatGoalDiv);
        goals.appendChild(document.createElement("br"));

        // append newStatStreak stuff
        newStatStrLabel.textContent = customStatInput.value + " Streak: ";
        streaks.appendChild(newStatStrLabel);

        //fix: make it (using indexes) so that the stuff append right before the submit btns
    }
    if (customStatInput.value == "no") {
        alert("yes");
        // could add an achievement for this so the user has some easter eggs to find ^^
    }
    customStatInput.value = "";
}

// idea: set all values of "today's stats" back to 0 when its the next day
// since that is not flashy, we can also alert them when its a new day!!
let water = document.getElementById("water");
let sleep = document.getElementById("sleep");
let meals = document.getElementById("meals");
let exercise = document.getElementById("exercise");
let highestStreakP = document.getElementById("highestStreakP");

newDayTimerId = setInterval(newDay, 8.64e7) // maybe display how many hours are left to continue ur streak
let waterStreak = 0;
let sleepStreak = 0;
let mealStreak = 0;
let exerciseStreak = 0;
var highestStreak = 0;

function newDay() {
    // if value of stat greater than goal by reset time, streak += 1;
        // and maybe also for now log the last 3 days of stats under trends
        // and log the streak variable in a file
    // then set all daily stats to 0

    // if water is being tracked, goal is not empty, and water taken >= goal
    if (waterToggle.checked && waterGoal.value != "" && water.value >= waterGoalDiv.value) {
        waterStreak += 1;
    }
    else {
        waterStreak = 0;
    }
    if (sleepToggle.checked && sleepGoal.value != "" && sleep.value >= sleepGoal.value) {
        sleepStreak += 1;
    }
    else {
        sleepStreak = 0;
    }
    if (mealsToggle.checked && mealsGoal.value != "" && meals.value >= mealsGoal.value) {
        mealStreak += 1;
    }
    else {
        mealStreak = 0;
    }
    if (exerciseToggle.checked && exerciseGoal.value != "" && exercise.value >= exerciseGoal.value) {
        exerciseStreak += 1;
    }
    else {
        exerciseStreak = 0;
    }

    if (waterStreak >= highestStreak) {
        highestStreak = waterStreak;
    }
    if (sleepStreak >= highestStreak) {
        highestStreak = sleepStreak;
    }
    if (mealStreak >= highestStreak) {
        highestStreak = mealStreak;
    }
    if (exerciseStreak >= highestStreak) {
        highestStreak = exerciseStreak;
    }
    highestStreakP.textContent = highestStreak + " days highest streak!!"
    
    waterStreakLabel.textContent = "Water Streak: " + waterStreak;
    sleepStreakLabel.textContent = "Sleep Streak: " + sleepStreak;
    mealStrLabel.textContent = "Meal Streak: " + mealStreak;
    exerciseStrLabel.textContent = "Exercise Streak: " + exerciseStreak;

    water.value = 0;
    sleep.value = 0;
    meals.value = 0;
    exercise.value = 0;
}

waterStreakLabel.textContent = "Water Streak: " + waterStreak;
sleepStreakLabel.textContent = "Sleep Streak: " + sleepStreak;
mealStrLabel.textContent = "Meal Streak: " + mealStreak;
exerciseStrLabel.textContent = "Exercise Streak: " + exerciseStreak;
// add custom stats' ones?
// also implement overall health streak and update textcontent of streaks when incremented

// MAKE FUNCTIONS THAT PREVENT FORM SUBMISSION 
//  UNLESS WE FIGURE OUT HOW TO ACTUALLY USE THE DATA SENT FROM SUBMITTING FORM
//  OTHERWISE THERE WILL BE AN ERROR
window.addEventListener("submit", submitHandler);

function submitHandler(event) {
    event.preventDefault();
}

// maybe add min of 0 for all default stats in html or add an alert for typing "-"