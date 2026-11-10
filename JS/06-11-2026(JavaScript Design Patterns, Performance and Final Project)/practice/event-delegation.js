const parent=document.querySelector("#parent")
const child=document.querySelector("#child")
// Bubbling: child event travels upward
parent.addEventListener("click",()=>console.log("Parent Clicked"))
child.addEventListener("click",()=>console.log("Child Clicked"))
// Capturing: event travels downward first
parent.addEventListener("click",()=>console.log("Capture Parent"),true)
// Event Delegation
document.querySelector("#tasks").addEventListener("click",event=>{
    if(event.target.matches(".delete")){
        event.target.closest("li").remove()
    }
})