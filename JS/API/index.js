//API Methods
//get -> Fetching the data
//post -> To send the data
//put -> It changes entire code 
//patch -> Updates only partial data
//Delete -> To Delete the data 

// FE -> API(get) -> BE (Routes,middleware,controllers)
fetch("https://jsonplaceholder.typicode.com/users")
.then((data)=>{
   return data.json()
})
.then((d)=>{
    console.log(d)
})   
.catch((error)=>{
    console.log(error)
})
async function loadUser(){
    let response=await fetch("https://jsonplaceholder.typicode.com/users")
    let users=await response.json()
    console.log(users)
}
loadUser()

async function loadEmployees(){
    let response=await fetch("https://jsonplaceholder.typicode.com/users")
    let employees=await response.json()
    employees.forEach(function(employee){
        console.log(employee.name)
    })
    employees.forEach(function(employee){
    let card=document.createElement("div")
    card.textContent=`
    Employee Name: ${employee.name}
    Employee Email: ${employee.email}
    Employee City: ${employee.address.city}
    `
    document.body.appendChild(card)
})}

loadEmployees()
async function loadUser(){
    try{
        let response=await fetch("Wrong URL")
        if(!response.ok){
            throw new Error("Server Not Found")
        }
    }
    catch(error){
        console.log(error.message)
    }
}
loadUser()