
let addFood=document.getElementById("addFood")
let foodList=document.getElementById("foodList")
let count=1
addFood.addEventListener("click",function(){
    let food=document.getElementById("food").value
    let li=document.createElement("li")
    li.textContent= food 
    // count++
    foodList.appendChild(li)
})
foodList.addEventListener("click",function(event){
    if(event.target.tagName==="LI"){
        alert("You Selected : " +event.target.textContent)
    }
})