// JAVASCRIPT DOM, EVENTS, FORMS, STORAGE AND BROWSER APIs

// 1. CREATE A PRACTICE INTERFACE
document.body.innerHTML = `
    <main id="practiceContainer">
        <h1 id="pageHeading">JavaScript DOM Practice</h1>
        <section id="profileSection">
            <h2>DOM Manipulation</h2>
            <p id="statusMessage">Welcome to DOM practice.</p>
            <input id="nameInput" type="text" placeholder="Enter your name">
            <button id="updateButton">Update Message</button>
            <button id="addButton">Add Element</button>
            <button id="removeButton">Remove Element</button>
            <div id="dynamicContainer"></div>
        </section>
        <section id="eventSection">
            <h2>Event Handling</h2>
            <input id="searchInput" type="text" placeholder="Type something">
            <select id="departmentSelect">
                <option value="">Select department</option>
                <option value="IT">IT</option>
                <option value="HR">HR</option>
            </select>
            <button id="eventButton">Click Me</button>
            <p id="eventMessage">Event output appears here.</p>
            <p id="mouseMessage">Move your mouse over this message.</p>
            <div id="parentBox">
                Parent Box
                <button id="childButton">Child Button</button>
            </div>
        </section>
        <section id="formSection">
            <h2>Form Validation</h2>
            <form id="employeeForm">
                <input id="employeeNameInput" type="text" placeholder="Employee name" required >
                <input id="employeeEmailInput" type="email" placeholder="Employee email" required >
                <button type="submit">Submit Form</button>
                <p id="formErrorMessage"></p>
            </form>
        </section>
        <section id="storageSection">
            <h2>Browser Storage</h2>
            <button id="saveButton">Save Data</button>
            <button id="readButton">Read Data</button>
            <p id="storageMessage"></p>
        </section>
        <section id="timerSection">
            <h2>Browser Timers</h2>
            <button id="timeoutButton">Run Timeout</button>
            <button id="intervalButton">Start Interval</button>
            <button id="stopIntervalButton">Stop Interval</button>
            <p id="timerMessage"></p>
        </section>
    </main>
`

// 2. SELECT DOM ELEMENTS
const pageHeading = document.getElementById("pageHeading")
const statusMessage = document.querySelector("#statusMessage")
const practiceButtons = document.querySelectorAll("button")
const dynamicContainer = document.getElementById("dynamicContainer")
const nameInput = document.getElementById("nameInput")
console.log("Heading:", pageHeading)
console.log("Status:", statusMessage)
console.log("Number of buttons:", practiceButtons.length)

// 3. UPDATE CONTENT
pageHeading.textContent = "DOM, Events and Browser APIs"
document.title = "JavaScript DOM Learning"

// 4. ATTRIBUTES, CLASSES AND INLINE STYLES
const updateButton = document.getElementById("updateButton")
updateButton.setAttribute("title", "Update the welcome message")
statusMessage.classList.add("active-message")
statusMessage.style.color = "green"
statusMessage.style.fontWeight = "bold"
console.log("Has active class:", statusMessage.classList.contains("active-message"))
statusMessage.classList.remove("active-message")
statusMessage.classList.toggle("active-message")

// 5. UPDATE A MESSAGE USING A CLICK EVENT
updateButton.addEventListener("click", function () {
    const enteredName = nameInput.value.trim()
    if (enteredName === "") {
        statusMessage.textContent = "Please enter your name."
        return
    }
    statusMessage.textContent = `Welcome, ${enteredName}!`
})

// 6. CREATE AND ADD ELEMENTS
const addButton = document.getElementById("addButton")
addButton.addEventListener("click", function () {
    const newParagraph = document.createElement("p")
    newParagraph.textContent = "This element was created using JavaScript."
    dynamicContainer.appendChild(newParagraph)
})

// 7. REMOVE ELEMENTS
const removeButton = document.getElementById("removeButton")
removeButton.addEventListener("click", function () {
    const lastParagraph = dynamicContainer.lastElementChild
    if (lastParagraph) {
        lastParagraph.remove()
    }
})

// 8. INPUT EVENT
const searchInput = document.getElementById("searchInput")
const eventMessage = document.getElementById("eventMessage")
searchInput.addEventListener("input", function (event) {
    eventMessage.textContent = `You typed: ${event.target.value}`
})

// 9. CHANGE EVENT
const departmentSelect = document.getElementById("departmentSelect")
departmentSelect.addEventListener("change", function (event) {
    eventMessage.textContent = `Selected department: ${event.target.value}`
})

// 10. KEYBOARD EVENT
searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        eventMessage.textContent = `You entered: ${event.target.value}`
    }
})

// 11. MOUSE EVENT
const mouseMessage = document.getElementById("mouseMessage")
mouseMessage.addEventListener("mouseenter", function () {
    mouseMessage.textContent = "Mouse entered the message."
})
mouseMessage.addEventListener("mouseleave", function () {
    mouseMessage.textContent = "Mouse left the message."
})

// 12. EVENT BUBBLING
const parentBox = document.getElementById("parentBox")
const childButton = document.getElementById("childButton")
parentBox.addEventListener("click", function () {
    console.log("Parent clicked through bubbling.")
})
childButton.addEventListener("click", function () {
    console.log("Child button clicked.")
})

// 13. EVENT CAPTURING
parentBox.addEventListener(
    "click",
    function () {
        console.log("Parent capturing event.")
    },
    true
)

// 14. STOP PROPAGATION
childButton.addEventListener("dblclick", function (event) {
    event.stopPropagation()
    console.log("Double-click propagation stopped.")
})

// 15. EVENT DELEGATION
dynamicContainer.addEventListener("click", function (event) {
    if (event.target.matches("p")) {
        console.log("A dynamically created paragraph was clicked.")
    }
})

// 16. FORM VALIDATION
const employeeForm = document.getElementById("employeeForm")
const employeeNameInput = document.getElementById("employeeNameInput")
const employeeEmailInput = document.getElementById("employeeEmailInput")
const formErrorMessage = document.getElementById("formErrorMessage")
employeeForm.addEventListener("submit", function (event) {
    event.preventDefault()
    const enteredEmployeeName = employeeNameInput.value.trim()
    const enteredEmployeeEmail = employeeEmailInput.value.trim()
    formErrorMessage.textContent = ""
    if (enteredEmployeeName === "") {
        formErrorMessage.textContent = "Employee name is required."
        employeeNameInput.focus()
        return
    }
    if (enteredEmployeeEmail === "" || !employeeEmailInput.validity.valid) {
        formErrorMessage.textContent = "Please enter a valid email."
        employeeEmailInput.focus()
        return
    }
    formErrorMessage.textContent = "Employee form submitted successfully."
    employeeForm.reset()
})

// 17. LOCAL STORAGE AND SESSION STORAGE
const saveButton = document.getElementById("saveButton")
const readButton = document.getElementById("readButton")
const storageMessage = document.getElementById("storageMessage")
saveButton.addEventListener("click", function () {
    const employeeProfile = {
        name: "Rahul",
        department: "IT",
        skills: ["JavaScript", "React"]
    }
    // Convert an object to a JSON string.
    const employeeJson = JSON.stringify(employeeProfile)
    // Save data for future browser sessions.
    localStorage.setItem("employeeProfile", employeeJson)
    // Save data for this browser tab's session.
    sessionStorage.setItem("currentEmployee", employeeJson)
    storageMessage.textContent = "Employee data saved."
})
readButton.addEventListener("click", function () {
    const savedEmployeeJson = localStorage.getItem("employeeProfile")
    if (savedEmployeeJson === null) {
        storageMessage.textContent = "No saved employee data found."
        return
    }
    // Convert JSON text back to an object.
    const restoredEmployee = JSON.parse(savedEmployeeJson)
    storageMessage.textContent = `${restoredEmployee.name} - ${restoredEmployee.department}`
})

// 18. WINDOW AND DOCUMENT
console.log("Window width:", window.innerWidth)
console.log("Window height:", window.innerHeight)
console.log("Document title:", document.title)
console.log("Current page URL:", window.location.href)

// 19. HISTORY API
console.log("Browser history length:", window.history.length)
// Avoid calling history.back() automatically.
// It would navigate away from the practice page.

// 20. SETTIMEOUT
const timeoutButton = document.getElementById("timeoutButton")
const timerMessage = document.getElementById("timerMessage")
timeoutButton.addEventListener("click", function () {
    timerMessage.textContent = "Waiting for 2 seconds..."
    setTimeout(function () {
        timerMessage.textContent = "Timeout completed!"
    }, 2000)
})

// 21. SETINTERVAL AND CLEARINTERVAL
const intervalButton = document.getElementById("intervalButton")
const stopIntervalButton = document.getElementById("stopIntervalButton")
let intervalCounter = 0
let intervalId = null
intervalButton.addEventListener("click", function () {
    if (intervalId !== null) {
        return
    }
    intervalCounter = 0
    timerMessage.textContent = "Counter: 0"
    intervalId = setInterval(function () {
        intervalCounter++
        timerMessage.textContent = `Counter: ${intervalCounter}`
    }, 1000)
})
stopIntervalButton.addEventListener("click", function () {
    if (intervalId !== null) {
        clearInterval(intervalId)
        intervalId = null
        timerMessage.textContent = `Interval stopped at ${intervalCounter}.`
    }
})

// 22. WINDOW RESIZE EVENT
window.addEventListener("resize", function () {
    console.log("Current window width:", window.innerWidth)
})

// 23. BROWSER API: LOCATION
console.log("Current hostname:", window.location.hostname)

// 24. BROWSER API: JSON ARRAYS
const employeeSkills = ["JavaScript", "HTML", "CSS"]
const employeeSkillsJson = JSON.stringify(employeeSkills)
const restoredSkills = JSON.parse(employeeSkillsJson)
console.log("JSON string:", employeeSkillsJson)
console.log("Restored array:", restoredSkills)


// 25. END OF PRACTICE FILE
console.log("DOM practice application initialized.")