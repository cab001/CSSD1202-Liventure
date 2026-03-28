
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
let sleepGoal = document.getElementById("sleepGoal");
let mealsGoal = document.getElementById("mealsGoal");
let exerciseGoal = document.getElementById("exerciseGoal");

let waterStreakLabel = document.getElementById("waterStreakLabel")
// make all streak labels vars, then add them to have their hide classes added&removed in checkToggles func

function checkToggles() {
    if (waterToggle.checked) {
        //remove any hide class or attribute from the stuff that show water goal and progress (ex. Oz of water under tdy's stats and water: under goals:)
        dailyWater.classList.remove("hide");
        waterGoalDiv.classList.remove("hide");
    }
    else {
        dailyWater.classList.add("hide");
    }
    // do if statement for all others 
}
// also make it in html code(?) that stats to track's checkboxes r auto checked at the beginning