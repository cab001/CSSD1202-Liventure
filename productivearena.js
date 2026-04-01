let addTaskButton = document.getElementById("addTaskButton");
let count = 0;

// addTaskButton.addEventListener("submit", function(e){
//     e.preventDefault();
//     console.log("Added task!");
// });

addTaskButton.addEventListener("click", taskAdded);

function taskAdded() {
    count ++;
    let task = document.getElementById("task");
    let addedTask = task.cloneNode(true);
    let taskValue = document.getElementById("addTask").value;
    let checklist = document.createElement("input");

    checklist.type = "checkbox";
    checklist.id = "taskBox" + count;
    addedTask.id = ("task" + count);
    addedTask.textContent = taskValue;
    addedTask.appendChild(checklist);

    document.getElementById("taskList").appendChild(addedTask);
    addedTask.classList.add("checkboxLabel")
}