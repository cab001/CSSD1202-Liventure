
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
}

// idea: set all values of "today's stats" back to 0 when its the next day
// since that is not flashy, we can also alert them when its a new day!!
let water = document.getElementById("water");
let sleep = document.getElementById("sleep");
let meals = document.getElementById("meals");
let exercise = document.getElementById("exercise");

newDayTimerId = setInterval(newDay, 8.64e7)
let waterStreak = 0;
let sleepStreak = 0;
let mealStreal = 0;
let exerciseStreak = 0;

function newDay() {
    // if value of stat greater than goal by reset time, streak += 1;
    // then set all daily stats to 0
    water.value = 0;
    sleep.value = 0;
    meals.value = 0;
    exercise.value = 0;

    
}

// MAKE FUNCTIONS THAT PREVENT FORM SUBMISSION 
//  UNLESS WE FIGFURE OUT HOW TO ACTUALLY USE THE DATA SENT FROM SUBMITTING FORM
//  CUZ OTHERWISE ERROR