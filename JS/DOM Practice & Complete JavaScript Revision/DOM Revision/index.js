// document.getElementById()
// Syntax:document.getElementById("id")
const title=document.getElementById("title")
console.log(title.textContent)

// querySelector()
// Syntax: document.querySelector("h1")
// It gives the first matching element 
const message=document.querySelector(".message")
console.log(message.textContent)

// querySelectorAll()
// Syntax: document.querySelectorAll(".item")
// It gives the all matching element
const items=document.querySelectorAll(".items")
items.forEach((item)=>{
    console.log(item.textContent)
})

// Dom Manipulation
// When text need to change we use the textContent
console.log(title.textContent="Hey")
// Parses content as HTML
const container=document.getElementById("container")
container.innerHTML=`<h2>Developer</h2>
<p>Frontend Developer</p>`
console.log(container)

// const card=document.getElementById("card")
// card.classList.add("Active")
// console.log(card)
// card.classList.remove("Active")
// console.log(card)
// card.classList.toggle("active")
// console.log(card)
// card.classList.contains("active")
// console.log(card)
const developers=[{
    name:"Teja",
    role:"Developer"
},
{name:"Surya",role:"Testing"}]

function createDeveloperCard(developer) {
    const card = document.createElement("div")
    const name = document.createElement("h2")
    const role = document.createElement("p")
    name.textContent = developer.name
    role.textContent = developer.role
    card.appendChild(name)
    card.appendChild(role)
    return card
}
developers.forEach(developer => {
    const card = createDeveloperCard(developer)
    container.appendChild(card)
})

// Event Listeners
// A webpage becomes interactive using events
// Syntax: element.addEventListener("event",function)
// Input
// Syntax: input.addEventListener("input", () => {});
// Runs whenever the input changes
// Change
// Syntax: select.addEventListener("change",()=>{})
// Submit
// Syntax: form.addEventListener("submit",()=>{})
// Keydown
// Syntax: input.addEventListener("keydown",()=>{})
// Click
// Syntax: input.addEventListener("click",()=>{})
const button=document.querySelector("#button")
button.addEventListener("click",(event)=>{console.log(event.target,"Button Clicked")})

// Event Object
// Syntax: button.addEventListener("click",(event)=>{console.log(event.target)})

// Event Deligation
// 1. Select the parent element
const categoryList = document.getElementById('category-list')
// 2. Attach a single listener to the parent
categoryList.addEventListener('click', (event) => {
  // 3. Target verification: ensure the clicked item is actually an 'LI'
  if (event.target && event.target.tagName === 'LI') {
    console.log(`You clicked on: ${event.target.innerText}`)
    // You can also access custom attributes or IDs
    const categoryId = event.target.id
    console.log(`Category ID: ${categoryId}`)
  }
})

// Form Handling
const form = document.querySelector("#userForm");
form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log("Form submitted")
})

