const form = document.querySelector("#taskForm");
const input = document.querySelector("#taskInput");
const list = document.querySelector("#taskList");
const employee = document.querySelector("#employee");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Render tasks
function renderTasks() {
    list.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");

        li.innerHTML = `
            <span class="${task.done ? "done" : ""}">
                ${task.name}
            </span>
            <button data-id="${task.id}">Delete</button>
        `;

        list.append(li);
    });
}

// Add task
form.addEventListener("submit", event => {
    event.preventDefault();

    if (!input.value.trim()) {
        alert("Enter a task");
        return;
    }

    const task = {
        id: Date.now(),
        name: input.value,
        done: false
    };

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    input.value = "";
    renderTasks();
});

// Delete task
list.addEventListener("click", event => {
    if (event.target.tagName === "BUTTON") {
        const id = Number(event.target.dataset.id);

        tasks = tasks.filter(task => task.id !== id);

        localStorage.setItem("tasks", JSON.stringify(tasks));

        renderTasks();
    }
});

// API call
async function loadEmployee() {
    try {
        const response =
            await fetch("https://jsonplaceholder.typicode.com/users/1");

        if (!response.ok) {
            throw new Error("API request failed");
        }

        const data = await response.json();

        const { name, email } = data;

        employee.textContent = `${name} - ${email}`;

    } catch (error) {
        employee.textContent = error.message;
    }
}

document.querySelector("#loadBtn")
    .addEventListener("click", loadEmployee);

renderTasks();