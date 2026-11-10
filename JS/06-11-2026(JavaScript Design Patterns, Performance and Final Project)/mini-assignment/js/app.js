import { Employee,createEmployee } from "./employee.js";
import { TaskManager } from "./task-manager.js";
import { StorageManager } from "./storage.js";
import { fetchEmployees } from "./api.js";
const manager=new TaskManager()
let employees=StorageManager.load("employees")
const $=selector=>document.querySelector(selector)
const employeeName = $("#employeeName")
const employeeRole = $("#employeeRole")
const employeeSelect = $("#employeeSelect")
const taskTitle = $("#taskTitle")
const taskList = $("#taskList")
const search = $("#search")
const filter = $("#taskFilter")
const message = $("#message")
const summary = $("#summary")
function saveEmployees() {
    StorageManager.save("employees", employees)
}
function renderEmployees() {
    employeeSelect.innerHTML = '<option value="">Select employee</option>'
    employees.forEach(employee => {
        employeeSelect.innerHTML += `
            <option value="${employee.id}">${employee.name}</option>
        `
    })
}
function renderTasks(tasks) {
    const text = search.value.toLowerCase()
    let result = tasks.filter(task =>
        task.title.toLowerCase().includes(text) ||
        task.employeeName.toLowerCase().includes(text)
    )
    if (filter.value === "pending") {
        result = result.filter(task => !task.completed)
    }
    if (filter.value === "completed") {
        result = result.filter(task => task.completed)
    }
    taskList.innerHTML = result.map(task => `
        <li data-id="${task.id}">
            <span class="${task.completed ? "completed" : ""}">
                ${task.title} — ${task.employeeName}
            </span>
            <button class="toggle">Toggle</button>
            <button class="delete">Delete</button>
        </li>
    `).join("")
    summary.textContent = `Total: ${tasks.length} | Completed: ${tasks.filter(t => t.completed).length}`
}
manager.subscribe(tasks => {
    StorageManager.save("tasks", tasks)
    renderTasks(tasks)
})
manager.setTasks(StorageManager.load("tasks"))
$("#addEmployee").addEventListener("click", () => {
    try {
        const employee = createEmployee(employeeName.value, employeeRole.value)
        employees.push(employee)
        saveEmployees()
        renderEmployees()
        employeeName.value = ""
        employeeRole.value = ""
        message.textContent = "Employee added successfully."
    } catch (error) {
        message.textContent = error.message
    }
})
$("#addTask").addEventListener("click", () => {
    try {
        const employee = employees.find(e =>
            String(e.id) === employeeSelect.value
        )
        if (!employee) throw new Error("Select a valid employee.")
        manager.add(taskTitle.value, employee.id, employee.name)
        taskTitle.value = ""
        message.textContent = "Task added successfully."
    } catch (error) {
        message.textContent = error.message
    }
})
// Event delegation
taskList.addEventListener("click", event => {
    const item = event.target.closest("li")
    if (!item) return
    const id = Number(item.dataset.id)
    if (event.target.matches(".toggle")) manager.toggle(id)
    if (event.target.matches(".delete")) manager.delete(id)
})
// Debounce search
function debounce(callback, delay) {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => callback(...args), delay)
    }
}
search.addEventListener("input", debounce(() => {
    renderTasks(manager.getTasks())
}, 300))
filter.addEventListener("change", () => renderTasks(manager.getTasks()))
// Throttle API button
function throttle(callback, delay) {
    let waiting = false
    return async (...args) => {
        if (waiting) return
        waiting = true
        try {
            await callback(...args)
        } finally {
            setTimeout(() => waiting = false, delay)
        }
    }
}
const loadSampleEmployees = throttle(async () => {
    message.textContent = "Loading employees..."
    try {
        const data = await fetchEmployees()
        employees = [...employees, ...data]
        saveEmployees()
        renderEmployees()
        message.textContent = "Sample employees loaded."
    } catch (error) {
        message.textContent = error.message
    }
}, 2000)
$("#loadEmployees").addEventListener("click", loadSampleEmployees)
renderEmployees()