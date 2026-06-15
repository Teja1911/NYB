//DOM Traversing
//purpose: DOM traversing means navigating through the html elements 
let name=document.getElementById("name")
console.log(name)
//To get the parent Element 
console.log(name.parentElement)
let parent=document.getElementById("section1")
console.log(parent)
//To get the child elements
console.log(parent.children)
//To get access the particular child element
console.log(parent.children[1])
//To get the firstChildElement
console.log(parent.firstElementChild)
//To get the lastElementChild
console.log(parent.lastElementChild)
//Sibling Elements
//nextElementSibling
//previousElementSibling
let user=document.querySelector("h2")
console.log(user.nextElementSibling)
let loc=document.querySelector("p")
console.log(loc.previousElementSibling)
//Creating the Element using the DOM
let heading=document.createElement("h2")
heading.textContent="Hello DOM"
document.getElementById("section2").appendChild(heading)
console.log(heading)
//Add elements to the DOM
let list=document.getElementById("list")
let li=document.createElement("li")
let li1=document.createElement("li")
li1.textContent="Samsung"
list.prepend(li1)
console.log(list)
li.textContent="Apple"
list.appendChild(li)
console.log(list)
let newItem=document.createElement("li")
newItem.textContent="Pixel"
list.insertBefore(newItem,li)//New Element,Existing Element
//insertAdjacentElements
let newPara=document.createElement("p")
newPara.textContent="Mobiles:"
list.insertAdjacentElement("beforebegin",newPara)
let newItem1=document.createElement("li")
newItem1.textContent="Nothing"
list.insertAdjacentElement("afterbegin",newItem1)
let newItem2=document.createElement("li")
newItem2.textContent="Realme"
list.insertAdjacentElement("beforeend",newItem2)
let newPara2=document.createElement("p")
newPara2.textContent="Total Mobiles: 5"
list.insertAdjacentElement("afterend",newPara2)
let newItem3=document.createElement("li")
newItem3.textContent="Nothing"
list.insertAdjacentElement("beforeend",newItem3)
list.querySelector("li").remove()
let btn=document.getElementById("btn")
btn.addEventListener("click",()=>{
    alert("Button Clicked")
})
let name1=document.getElementById("name1")
name1.addEventListener("input",()=>{
    console.log(name1.value)
})
let mouse=document.getElementById("mouse")
mouse.addEventListener("mouseover",()=>{
    console.log("Mouse Enter")
})
mouse.addEventListener("mouseout",()=>{
    console.log("Mouse Out")
})
mouse.addEventListener("mousemove",()=>{
    console.log("Mouse Move")
})