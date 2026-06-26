//GET Method It will read the data 
//It will retrieve data from the server
async function loadEmployees(){
    let response=await fetch("https://jsonplaceholder.typicode.com/users")
    let employees=await response.json()
    console.log(employees)
}
loadEmployees()
//POST Method It will write the data 
//Create  new data
async function addEmployee(){
    let response=await fetch("https://jsonplaceholder.typicode.com/users",
        {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                name:"Teja",
                email:"teja@gmail.com"
            })
        }
    )
    let result=await response.json()
    console.log(result)
}
addEmployee()
async function updateEmployee(){
    let response=await fetch("https://jsonplaceholder.typicode.com/users/1",
        {
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                name:"Leanne Graham",
                email:"Sin@april.biz"
            })
        }
    )
    let result=await response.json()
    console.log(result)
}
updateEmployee()
//PATCH Method
//Update only specific Fields
async function updateEmail(){
    let response=await fetch("https://jsonplaceholder.typicode.com/users/2",
        {
            method:"PATCH",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                email:"Shan@melissa.tv"
            })
        }
    )
    let result=await response.json()
    console.log(result)
}
updateEmail()
//DELETE Method
async function deleteEmployee(){
    let response=await fetch("https://jsonplaceholder.typicode.com/users/11",
        {
            method:"DELETE"
        }
    )
    if(response.ok){
        console.log("Employee Deleted Successfully")
    }
}
deleteEmployee()