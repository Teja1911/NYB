const taskForm = document.querySelector("#taskForm");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");

const totalTasks = document.querySelector("#totalTasks");
const completedTasks = document.querySelector("#completedTasks");
const message = document.querySelector("#message");

const STORAGE_KEY = "taskManagerTasks";

let tasks = [];


// -----------------------------
// LOAD TASKS
// -----------------------------

function loadTasks() {

    const storedTasks = localStorage.getItem(STORAGE_KEY);

    if (!storedTasks) {
        tasks = [];
        return;
    }

    try {

        tasks = JSON.parse(storedTasks);

    } catch (error) {

        console.log("Stored task data is invalid.");

        tasks = [];
    }
}


// -----------------------------
// SAVE TASKS
// -----------------------------

function saveTasks() {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(tasks)
    );
}


// -----------------------------
// RENDER TASKS
// -----------------------------

function renderTasks() {

    taskList.innerHTML = "";

    tasks.forEach(function(task) {

        const listItem = document.createElement("li");

        listItem.dataset.id = task.id;

        if (task.completed) {
            listItem.classList.add("completed");
        }

        listItem.innerHTML = `
            <span>${task.title}</span>

            <div>
                <button class="complete-button">
                    ${task.completed ? "Undo" : "Complete"}
                </button>

                <button class="delete-button">
                    Delete
                </button>
            </div>
        `;

        taskList.append(listItem);
    });

    updateTaskCount();
}


// -----------------------------
// ADD TASK
// -----------------------------

function addTask(title) {

    const newTask = {

        id: Date.now(),

        title: title,

        completed: false
    };

    tasks.push(newTask);

    saveTasks();

    renderTasks();
}


// -----------------------------
// TOGGLE TASK
// -----------------------------

function toggleTask(taskId) {

    const task = tasks.find(function(task) {

        return task.id === taskId;

    });

    if (!task) {
        return;
    }

    task.completed = !task.completed;

    saveTasks();

    renderTasks();
}


// -----------------------------
// DELETE TASK
// -----------------------------

function deleteTask(taskId) {

    tasks = tasks.filter(function(task) {

        return task.id !== taskId;

    });

    saveTasks();

    renderTasks();
}


// -----------------------------
// UPDATE COUNT
// -----------------------------

function updateTaskCount() {

    const completedCount = tasks.filter(function(task) {

        return task.completed;

    }).length;

    totalTasks.textContent = tasks.length;

    completedTasks.textContent = completedCount;
}


// -----------------------------
// FORM EVENT
// -----------------------------

taskForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const title = taskInput.value.trim();

    if (title === "") {

        message.textContent = "Please enter a task.";

        return;
    }

    addTask(title);

    taskInput.value = "";

    message.textContent = "Task added successfully.";
});


// -----------------------------
// EVENT DELEGATION
// -----------------------------

taskList.addEventListener("click", function(event) {

    const listItem = event.target.closest("li");

    if (!listItem) {
        return;
    }

    const taskId = Number(listItem.dataset.id);


    if (event.target.matches(".complete-button")) {

        toggleTask(taskId);

    }


    if (event.target.matches(".delete-button")) {

        deleteTask(taskId);

    }

});


// -----------------------------
// INITIAL LOAD
// -----------------------------

loadTasks();

renderTasks();