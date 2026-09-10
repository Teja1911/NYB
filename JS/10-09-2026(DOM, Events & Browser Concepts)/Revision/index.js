// Introduction DOM
// The DOM is a programming representation of an HTML document.
// When the browser loads HTML, it converts the HTML into a tree of objects.
// Without DOM manipulation, JavaScript could calculate things, but it couldn't easily update what the user sees on the webpage.
// DOM allows JavaScript to:
// read HTML
// change text
// change styles
// change attributes
// create elements
// remove elements
// respond to user actions


// Selecting the DOM Elements
// Before JavaScript can modify an element, we usually need to select it.
// getElementById()
// Syntax: document.getElementById("id")
const title = document.getElementById("title")
console.log(title)

// querySelector()
// It returns the first matching element
const welcome=document.querySelector("#welcome")
console.log(welcome)

// querySelectorAll()
// It returns all matching elements as a NodeList
const items = document.querySelectorAll(".item")
console.log(items)
items.forEach(function(item) {
    console.log(item.textContent)
})


// Reading DOM Properties
const username = document.querySelector("#username")
console.log(username.value)

// textContent
console.log(title.textContent)
// innerHTML
title.innerHTML = "<span>Hello Tej</span>"

// Modifying DOM
title.textContent = "Welcome"
// style
title.style.color = "blue";
title.style.fontSize = "30px";
// add class
title.classList.add("active")
// remove class
title.classList.remove("active")
// toggle
title.classList.toggle("active")
// check
title.classList.contains("active")

// DOM Travesing
// parent 
const button = document.querySelector("button")
console.log(button.parentElement)
// child
const card = document.querySelector(".card");
console.log(card.children)
// first child
console.log(card.firstElementChild)
// last child
console.log(card.lastElementChild)
// sibling 
console.log(button.previousElementSibling)
console.log(button.previousElementSibling)

// dynamically
const li = document.createElement("li");
li.textContent = "Learn React"
document.querySelector("ul").appendChild(li)

const task = document.createElement("li")
task.textContent = "Learn DOM"
task.classList.add("task")
document.querySelector("#taskList").append(task)
// removing 
task.remove()

// Events
// An event is something that happens in the browser.
// syntax: element.addEventListener("event", callback)
button.addEventListener("click", handleClick)
function handleClick() {
    console.log("Clicked")
}
// event Object
button.addEventListener("click", function(event) {
    console.log(event);
})


// Event bubbling
parent.addEventListener("click", function() {
    console.log("Parent")
})

child.addEventListener("click", function() {
    console.log("Child")
})

// Event capturing 
// It is opposite it will come from the top of the document to bottom
parent.addEventListener("click", function() {
    console.log("Parent");
}, true)

// Event Deligation
const skillsList = document.querySelector("#skillsList");
skillsList.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        console.log(event.target.textContent);
    }
})
button.addEventListener("click", function(event) {
    event.stopPropagation()
})
const input = document.getElementById("search-input");
        let timer
        input.addEventListener("input", function() {
            clearTimeout(timer)
            timer = setTimeout(function() {
                console.log("Search API called")
            }, 5000)
        })

// throttling
let lastExecution = 0;
window.addEventListener("scroll", function() {
    const now = Date.now();
    if (now - lastExecution >= 500) {
        console.log("Scroll handled");
        lastExecution = now;
    }
})

// BOM
// Browser Object Model
// DOM deals primarily with the webpage/document.
// BOM deals with the browser environment.
// window size
console.log(window.innerWidth)
console.log(window.innerHeight)
// current url
console.log(window.location.href)
// reload
// window.location.reload()
// browser history
// history.back()
// history.forward()

// Output Methods
console.log("Hello")
// alert
// alert("Task added")
// DOM Output
document.querySelector("#message").textContent = "Task added"

document.write("Hello")


// Local Storage
// localStorage stores data in the browser
localStorage.setItem("username", "Tej")
const username1 = localStorage.getItem("username");
console.log(username1)
localStorage.removeItem("username")
localStorage.clear()

const user = {
    name: "Tej",
    role: "Developer"
}
localStorage.setItem("user", user)
localStorage.setItem("user", JSON.stringify(user))
const storedUser = JSON.parse(localStorage.getItem("user"))
console.log(storedUser)

// Session Storage
// same as local storage
sessionStorage.setItem("username", "Tej")
sessionStorage.getItem("username")
sessionStorage.removeItem("username")