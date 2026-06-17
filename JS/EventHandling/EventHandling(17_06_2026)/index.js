//Event Bubbling , Event Capturing , Event Delegation
//Event Bubbling 
//Event Starts from the target element and moves upwards to its ancestors
document.getElementById("grandparent").addEventListener("click",function(){
    console.log("Grand Parent Clicked")
})
document.getElementById("parent").addEventListener("click",function(){
    console.log("Parent Clicked")
})
document.getElementById("child").addEventListener("click",function(event){
    //stopPropagation()
    //event.stopPropagation()//It will stop event Bubbling
    console.log("Button Clicked")
})
//Event Capturing
//Event starts from the top and moves down to the target element
document.getElementById("GrandParent").addEventListener("click",function(){
    console.log("Grand Parent Clicked")
},true)
document.getElementById("Parent").addEventListener("click",function(){
    console.log("Parent Clicked")
},true)
document.getElementById("Child").addEventListener("click",function(){
    console.log("Button Clicked")
},true)

//Execution Flow of Event Bubbling And Event Capturing
//Event Bubbling
// Button
//    ↑
// Parent
//    ↑
// Grand Parent

//Event Capturing 
// Grand Parent
//       ↓
//    Parent
//       ↓
//    Button

//Event Delegation 
//In these we will attach the event listener to the parent element to manage all of it current and future children elements. Instead of assigning to the individual listeners to each every single child element 
//Without Delegation
//<ul>

//<li>Apple</li>

//<li>Mango</li>

//<li>Orange</li>

//<li>Banana</li>

//</ul>

// item1.addEventListener(...)
// item2.addEventListener(...)
// item3.addEventListener(...)
// item4.addEventListener(...)
//To Many Listeners
document.getElementById("fruitList").addEventListener("click",function(event){
    console.log(event.target.textContent)
})

