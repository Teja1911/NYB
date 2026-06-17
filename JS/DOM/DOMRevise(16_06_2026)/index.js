let parent1=document.getElementById("parent1")
console.log(parent1)
let parent2=document.getElementsByClassName("parent2")
console.log(parent2)
let parent3=document.querySelector("h3")//It will select the first appearing element in the html 
console.log(parent3)
let parent4=document.querySelectorAll("h3")//It will select all the h3 elements in the html
console.log(parent4)
//Modifying the Elements
let child2=document.getElementById("child2")
child2.textContent="Welcome to Hyderabad"
console.log(child2)
let child3=document.getElementById("child3")
child3.innerHTML="Hello People"
console.log(child3)
let child4=document.getElementById("child4")
child4.textContent="Hello World!"
child4.style.backgroundColor="red"
//creating the elements 
let li=document.createElement("li")
li.textContent="Iphone"
let list=document.getElementById("parent3")
list.appendChild(li)
console.log(list)
let li1=document.createElement("li")
li1.textContent="Samsung"
list.appendChild(li1)
console.log(list)
li1.remove()
console.log(list)
//Event Listeners
let btn=document.getElementById("btn")
btn.addEventListener("click",()=>{
    alert("Button Clicked")
})
btn.addEventListener("mouseenter")