// Avoid unnecessary DOM queries
const taskList=document.querySelector("#tasks")
function addTask(name){
    const li=document.createElement("li")
    li.textContent=name
    taskList.append(li)
}
addTask("Optimize JavaScript")
// Debounce
function debounce(callback,delay){
    let timer
    return (...args)=>{
        clearTimeout(timer)
        timer=setTimeout(()=>callback(...args),delay)
    }
}
const search=debounce(value=>console.log("Search:",value),300)
search("JavaScript")
// Memory Management
let largeData=new Array(1000).fill("data")
largeData=null // Release reference when no longer needed