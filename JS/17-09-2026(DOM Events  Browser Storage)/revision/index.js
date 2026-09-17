// DOM
// Document Object Model 
// When the browser loads 
// <h1>Hello</h1>
// the browser creates an object representation of the HTML document.
// Document
//    │
//    └── html
//        │
//        ├── head
//        │
//        └── body
//            │
//            └── h1
//                │
//                └── "Hello"

// Selecting Elements

// getElementById()
const headingElement = document.getElementById("pageTitle")
console.log(headingElement)

// querySelector()
// It returns the first matching element 
const paragraphElement = document.querySelector(".description")
console.log(paragraphElement)

// querySelectorAll()
const buttonCollection = document.querySelectorAll("button")
console.log(buttonCollection)

// Reading and Updating DOM
const messageHeading = document.querySelector("#messageTitle")
console.log(messageHeading.textContent)
messageHeading.textContent = "New Message"
// messageHeading.innerHTML = "<strong>Hello</strong>"

const noticeBox = document.createElement("div")
noticeBox.textContent = "New notification"
document.body.appendChild(noticeBox)

// Adding Elements 
const listContainer = document.querySelector("#taskList")
const listEntry = document.createElement("li")
listEntry.textContent = "Learn JavaScript"
listContainer.appendChild(listEntry)

const actionPanel = document.querySelector("#taskList")  
const firstBadge = document.createElement("span")
firstBadge.textContent = "New"
const secondBadge = document.createElement("span")
secondBadge.textContent = "Todo"
actionPanel.append(firstBadge, secondBadge)

const unwantedBox = document.querySelector(".old-box")
unwantedBox.remove()

const cardContainer = document.querySelector("#cardBox")
console.log(cardContainer.parentElement)
console.log(cardContainer.children)
console.log(cardContainer.firstElementChild)
console.log(cardContainer.lastElementChild)

// EVENTS
// Events allow JavaScript to react to user/browser actions.
// Examples:
// click
// input
// change
// submit
// keydown
// keyup
// mouseover
// mouseout

// syntax:
// element.addEventListener("event", function(event) {
    // code
// })
const saveControl = document.querySelector("#saveButton")
saveControl.addEventListener("click", function() {
    console.log("Button clicked")
})

// Event Object
const keyboardInput = document.querySelector("#taskInput")
keyboardInput.addEventListener("input", function(event) {
    console.log(event)
    console.log(event.target.value)
})

// Click 
const alertButton = document.querySelector("#alertButton")
alertButton.addEventListener("click", function(event) {
    console.log("Clicked")
    console.log(event.target)
})

// Input Event
const searchControl = document.querySelector("#searchField")
searchControl.addEventListener("input", function(event) {
    console.log(event.target.value)
})

// change Event
const categorySelector = document.querySelector("#categorySelector")
categorySelector.addEventListener("change", function(event) {
    console.log(event.target.value)
})

// Submit Form
const loginFormElement = document.querySelector("#loginForm")
loginFormElement.addEventListener("submit", function(event) {
    event.preventDefault()
    console.log("Form submitted")
})

// Mouse Event
const hoverCard = document.querySelector("#hoverCard")
hoverCard.addEventListener("mouseover", function() {
    console.log("Mouse entered")
})

// Keyboard Event
const keyboardBox = document.querySelector("#keyboardBox")
keyboardBox.addEventListener("keydown", function(event) {
    console.log(event.key)
})

// Event Bubbling
// The event bubbles upward.
const outerPanel = document.querySelector("#outerBox")
const innerControl = document.querySelector("#innerButton")
outerPanel.addEventListener("click", function() {
    console.log("Outer")
})
innerControl.addEventListener("click", function() {
    console.log("Inner")
})

// EVENT CAPTURING
// Capturing happens in the opposite direction.
const captureArea = document.querySelector("#outerBox")
captureArea.addEventListener("click", function() {
    console.log("Outer capturing")
}, true)

// Capturing = going down
// Bubbling = coming up

const fruitContainer = document.querySelector("#fruitBox")
fruitContainer.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        console.log( "Selected:",event.target.dataset.fruit )
    }
})

// EVENT BINDING
// Event binding means connecting an event to a handler.
function showMessage() {
    console.log("Hello")
}

// THROTTLING
// Throttling means:
// Allow a function to execute at most once during a specified interval.
const scrollDisplay = document.querySelector('#scrollOutput')
let isThrottled = false // gate open
window.addEventListener('scroll', function() {
  // 1. If the lock is active, ignore the scroll event completely
  if (isThrottled) return
  // 2. If not locked, execute the code immediately
  const currentExecutionTime = Date.now()
  console.log('Scroll handled')
  scrollDisplay.textContent = 'Scroll handled at ' + currentExecutionTime
  // 3. Lock the function
  isThrottled = true
  // 4. After 2 seconds, unlock the function so it can run again
  setTimeout(function() {
    isThrottled = false
  }, 2000)
})

// DEBOUNCING
// Debouncing means:
// Wait until events stop happening for a specified period, then execute.
const searchInputBox = document.querySelector("#searchBox")
let searchTimerId
searchInputBox.addEventListener("input", function(event) {
    clearTimeout(searchTimerId)
    searchTimerId = setTimeout(function() {
        console.log("Searching for:", event.target.value)
    }, 5000)
})

// LOCAL STORAGE
// Browser storage allows data to remain available after page reloads.
localStorage.setItem("username", "Tej")
localStorage.setItem("age",22)
const storedUsername = localStorage.getItem("username")
console.log(storedUsername)
const storedAge=localStorage.getItem("age")
console.log(storedAge)
localStorage.removeItem("username")
localStorage.clear()

const profileData = {
    name: "Surya",
    role: "Developer"
}
localStorage.setItem(
    "profileData",
    JSON.stringify(profileData)
)
const savedProfile = JSON.parse(
    localStorage.getItem("profileData")
)
console.log(savedProfile.name)

sessionStorage.setItem("sessionUser", "Teja")
sessionStorage.setItem("role","developer")
const activeSessionUser = sessionStorage.getItem("sessionUser")
console.log(activeSessionUser)
const sessionUserRole=sessionStorage.getItem("role")
console.log(sessionUserRole)
sessionStorage.removeItem("role")
sessionStorage.clear()
// stringify → object to string
// parse → string to object