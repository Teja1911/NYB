let loadBtn=document.getElementById("loadBtn")
let generatedId=document.getElementById("generatedId")
let generateBtn=document.getElementById("generateBtn")
let currentEmployee=document.getElementById("currentEmployee")
let nextBtn=document.getElementById("nextBtn")
let employeeContainer=document.getElementById("employeeContainer")
let employees=[]
//Id Generator
function* idGenerator(){
    let id=1
    while(true){
        yield id++
    }
}
let ids=idGenerator()
//Async Promise
function fetchEmployees(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve([
                {name:"Teja",department:"IT"},
                {name:"Surya",department:"HR"},
                {name:"Lucky",department:"Finance"}
            ])
        },2000)
    })
}
//Load Employees
loadBtn.addEventListener("click",loadEmployees)
async function loadEmployees(){
    try{
        employeeContainer.innerHTML="Loading..."
        employees=await fetchEmployees()
        displayEmployees()
    }
    catch(error){
        employeeContainer.innerHTML=error
    }
    finally{
        console.log("Employee Loading Completed")
    }
}
//Destructuring
function displayEmployees(){
    employeeContainer.innerHTML=""
    employees.forEach(function(employee){
        let {name,department}=employee
        let card=document.createElement("div")
        card.classList.add("card")
        card.innerHTML=`<h3>${name}</h3> 
        <p>Department: ${department}</p>`
        employeeContainer.appendChild(card)
    })
}
//Generator Button
generateBtn.addEventListener("click",function(){
    console.log("Button Clicked")
    generatedId.textContent="Generated Id:"+ids.next().value
})
//Iterator
let employeeIterator
nextBtn.addEventListener("click",showNextEmployee)
function showNextEmployee(){
    if(employees.length===0){
        alert("Load Employees First")
        return
    }
    if(!employeeIterator){
        employeeIterator=employees[Symbol.iterator]()
    }
    let next=employeeIterator.next()
    if(next.done){
        currentEmployee.textContent="No More Employees"
        employeeIterator=employees[Symbol.iterator]()
        return
    }
    currentEmployee.textContent=next.value.name

}