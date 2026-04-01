let addTaskButton = document.getElementById("addTaskButton");
let count = 0;
let goalsCompleted = 0;
let taskForm = document.getElementById("taskForm");
let task = document.getElementById("task");

taskForm.addEventListener("submit", function(e){
    e.preventDefault();
});

task.addEventListener("click", freeGoalClicked);

function freeGoalClicked() {
    if (!(task.classList.contains("clicked"))) {
        goalsCompleted += 1;
        if (goalsCompleted == 1) {
            oneGoal.src = "images/UnlockedReward.png";
        }
        else if (goalsCompleted == 5) {
            fiveGoals.src = "images/UnlockedReward.png";
        }
        else if (goalsCompleted == 10) {
            tenGoals.src = "images/UnlockedReward.png";
        }
        else if (goalsCompleted == 25) {
            twentyFiveGoals.src = "images/UnlockedReward.png";
        }
        task.classList.add("clicked");
    }
}

addTaskButton.addEventListener("click", taskAdded);

function taskAdded() {
    count ++;
    let addedTask = task.cloneNode(true);
    addedTask.classList.remove("clicked");
    let taskValue = document.getElementById("addTask").value;
    let checklist = document.createElement("input");

    checklist.type = "checkbox";
    checklist.id = "taskBox" + count;
    addedTask.id = ("task" + count);
    addedTask.textContent = taskValue;
    addedTask.appendChild(checklist);

    document.getElementById("taskList").appendChild(addedTask);
    addedTask.classList.add("checkboxLabel")
    addedTask.addEventListener("click", taskClicked);
}

function taskClicked(event) {
    let oneGoal = document.getElementById("oneGoal");
    let fiveGoals = document.getElementById("fiveGoals");
    let tenGoals = document.getElementById("tenGoals");
    let twentyFiveGoals = document.getElementById("twentyFiveGoals");

    if (!(event.target.classList.contains("clicked"))) {
        goalsCompleted += 1;
        if (goalsCompleted == 1) {
            oneGoal.src = "images/UnlockedReward.png";
        }
        else if (goalsCompleted == 5) {
            fiveGoals.src = "images/UnlockedReward.png";
        }
        else if (goalsCompleted == 10) {
            tenGoals.src = "images/UnlockedReward.png";
        }
        else if (goalsCompleted == 25) {
            twentyFiveGoals.src = "images/UnlockedReward.png";
        }
    }

    event.target.classList.add("clicked");
}