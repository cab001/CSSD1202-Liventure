
/* js for the goal toggles*/
let waterToggle = document.getElementById("waterToggle");
let sleepToggle = document.getElementById("sleepToggle");
let mealsToggle = document.getElementById("mealsToggle");
let exerciseToggle = document.getElementById("exerciseToggle");
    // implement custom stat if theres time, maybe even a plus button to add more of them (and select them using nextsibling)

let toggleForm = document.getElementById("toggleForm");
toggleForm.addEventListener("submit", checkToggles);
// instead of using form submit, to better comply wuth assignment req, could use click event on each toggle instead and then toggling a class that hides stuff
function checkToggles() {
    if (waterToggle.checked) {
        //remove any hide class or attribute from the stuff that show water goal and progress (ex. Oz of water under tdy's stats and water: under goals:)
    }
    // do if statement for all others 
}