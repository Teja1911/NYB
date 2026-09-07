const API_URL =
    "https://jsonplaceholder.typicode.com/users";

const STORAGE_KEY = "developerTasks";

const taskForm =
    document.querySelector("#taskForm");

const taskInput =
    document.querySelector("#taskInput");

const developerSelect =
    document.querySelector("#developerSelect");

const taskContainer =
    document.querySelector("#taskContainer");

const loadingMessage =
    document.querySelector("#loadingMessage");

const errorMessage = document.querySelector("#errorMessage")
let tasks=[]
function loadTasks() {
    const storedTasks =
        localStorage.getItem(STORAGE_KEY)
    if (!storedTasks) {
        tasks = []
        return
    }
    try {
        tasks = JSON.parse(storedTasks)
    } catch (error) {
        tasks = []
        console.log("Stored task data is invalid.")
    }
}
function saveTasks() {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(tasks)
    )
}
async function loadDevelopers() {
    showLoading()
    try {
        const response = await fetch(API_URL)
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`)
        }
        const developers = await response.json()
        populateDeveloperSelect(developers)
    } catch (error) {
        showError("Unable to load developers.")
        console.log(error)
    } finally {
        hideLoading()
    }
}
function populateDeveloperSelect(developers) {
    developers.forEach(developer => {
        const option =
            document.createElement("option")
        option.value = developer.id
        option.textContent = developer.name
        developerSelect.appendChild(option)
    })
}
taskForm.addEventListener("submit", (event) => {
    event.preventDefault()
    addTask()
})
function addTask() {
    const title = taskInput.value.trim()
    const developerId = Number(developerSelect.value)
    const developerName = developerSelect.options[
        developerSelect.selectedIndex
        ].textContent
    if (title.length < 3) {
        showError("Task must contain at least 3 characters.")
        return
    }
    if (!developerId) {
        showError("Please select a developer.")
        return
    }
    const newTask = {
        id: Date.now(),
        title: title,
        developerId: developerId,
        developerName: developerName
    }
    tasks.push(newTask)
    saveTasks()
    renderTasks()
    taskForm.reset()
    errorMessage.textContent = ""
}
function renderTasks() {
    taskContainer.innerHTML = ""
    if (tasks.length === 0) {
        taskContainer.textContent = "No tasks available."
        return
    }
    tasks.forEach(task => {
        const taskElement = createTaskElement(task)
        taskContainer.appendChild(taskElement)
    })
}
function createTaskElement(task) {
    const card = document.createElement("div")
    card.className = "task-card"
    card.innerHTML = `
        <h3>${task.title}</h3>
        <p>
            Developer: ${task.developerName}
        </p>
        <button
            class="delete-button"
            data-id="${task.id}"
        >
            Delete
        </button>
    `
    return card
}
taskContainer.addEventListener("click",(event) => {
        if (!event.target.matches(".delete-button")) {
            return
        }
        const taskId = Number(event.target.dataset.id)
        deleteTask(taskId)
    }
)
function deleteTask(taskId) {
    tasks = tasks.filter(task => {
        return task.id !== taskId;
    })
    saveTasks()
    renderTasks()
}
function showLoading() {
    loadingMessage.textContent = "Loading developers..."
}
function hideLoading() {
    loadingMessage.textContent = ""
}
function showError(message) {
    errorMessage.textContent = message
}

loadTasks()
renderTasks()
loadDevelopers()