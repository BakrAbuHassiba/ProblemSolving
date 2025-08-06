var tasks = [];

var taskList = document.getElementById("taskList");
var taskInput = document.getElementById("taskInput");
var addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function ()
{
    var taskName = taskInput.value;

    if (taskName !== "")
    {
        var task = { name: taskName, status: "pending" };
        tasks.push(task);

        displayTasks();
        taskInput.value = "";
    }
});
function displayTasks()
{
    taskList.innerHTML = "";

    tasks.forEach((task, index) =>
    {
        var li = document.createElement("li");
        li.style.display = "flex";
        li.style.justifyContent = "space-between";
        li.style.alignItems = "center";
        li.style.marginBottom = "8px";
        li.style.padding = "8px";
        li.style.border = "1px solid #ccc";
        li.style.backgroundColor = task.status === "done" ? "#d4edda" : "#fff";

        var taskText = document.createElement("span");
        taskText.textContent = task.name;
        taskText.style.flex = "1";

        if (task.status === "done")
        {
            taskText.style.color = "green";
        }

        var doneBtn = document.createElement("button");
        doneBtn.textContent = "✔";
        doneBtn.style.backgroundColor = "green";
        doneBtn.style.color = "white";
        doneBtn.style.marginRight = "5px";
        doneBtn.onclick = function ()
        {
            task.status = "done";
            displayTasks();
        };

        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "✖";
        deleteBtn.style.backgroundColor = "red";
        deleteBtn.style.color = "white";
        deleteBtn.onclick = function ()
        {
            tasks.splice(index, 1);
            displayTasks();
        };
        li.appendChild(taskText);
        li.appendChild(doneBtn);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}
