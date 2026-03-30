let addTaskButton = document.getElementById("addTaskButton");
let count = 0;

addTaskButton.addEventListener("click", function(e){
    e.preventDefault();
    console.log("Added task!");
});

addTaskButton.addEventListener("click", taskAdded);

function taskAdded() {
    count ++;
    let task = document.getElementById("task");
    let addedTask = task.cloneNode(true);
    let taskValue = document.getElementById("addTask").value;
    let checklist = document.createElement("input");

    checklist.type = "checkbox";
    checklist.id = "task" + count;
    addedTask.id = ("task" + count);
    addedTast.appendChild(checklist);
    addedTask.textContent = taskValue;

    document.getElementById("taskList").appendChild(addedTask);
}