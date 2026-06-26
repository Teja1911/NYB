let employeeId=document.getElementById("employeeId")
let employeeName=document.getElementById("employeeName")
let employeeEmail=document.getElementById("employeeEmail")
let department=document.getElementById("department")
let phone=document.getElementById("phone")
let loadBtn=document.getElementById("loadBtn")
let addBtn=document.getElementById("addBtn")
let updateBtn=document.getElementById("updateBtn")
let patchBtn=document.getElementById("patchBtn")
let status=document.getElementById("status")
let employeeBody=document.getElementById("employeeBody")
let employeeCount=document.getElementById("employeeCount")
let employees=[]

loadBtn.addEventListener("click",loadEmployees)
async function loadEmployees(){
    try{
        status.textContent="Loading Employees..."
        let response=await fetch("https://jsonplaceholder.typicode.com/users")
        if(!response.ok){
            throw new Error("Unable to load Employees")
        }
        employees=await response.json()
        displayEmployees()
        status.textContent="Employees loaded Successfully"
    }
    catch(error){
        status.textContent=error.message

    }
}
function displayEmployees(){
    employeeBody.innerHTML=""
    employees.forEach(function(employee){
        let row=document.createElement("tr")
        row.innerHTML=`
        <td>${employee.id}</td>
        <td>${employee.name}</td>
        <td>${employee.email}</td>
        <td>${employee.company? employee.company.name: employee.department}</td>
        <td>${employee.phone}</td>
        <td>
        <button class="editBtn">Edit</button>
        <button class="deleteBtn">Delete</button>
        </td>`
        employeeBody.appendChild(row)
    })
    employeeCount.textContent=employees.length
}
addBtn.addEventListener("click",addEmployee)
async function addEmployee(){
    try{
        let name=employeeName.value.trim()
        let email=employeeEmail.value.trim()
        let dept=department.value.trim()
        let phoneNumber=phone.value.trim()
        if(name === "" || email === "" || dept === "" || phoneNumber === ""){
            status.textContent="Please fill all the fields"
            return
        }
        let employee={
            name:name,
            email:email,
            department:dept,
            phone:phoneNumber
        }
        let responses=await fetch("https://jsonplaceholder.typicode.com/users",
            {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(employee)
            })
            if(!responses.ok){
                throw new Error("Unable to add employee")
            }
            let newEmployee=await responses.json()
            employees.push(newEmployee)
            displayEmployees()
            clearForm()
            status.textContent="Employee Added Successfully"
    }
    catch(error){
        status.textContent=error.message
    }
}
patchBtn.addEventListener("click",patchEmployee)
async function patchEmployee(){
try{
let id=employeeId.value
let email=employeeEmail.value.trim()
let dept=department.value.trim()
if(id===""||email===""){
status.textContent="Select Employee First."
return
}
let employee={
email:email,
department:dept
}
let response=await fetch(`https://jsonplaceholder.typicode.com/users/${id}`,
{
method:"PATCH",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(employee)
}
)
if(!response.ok){
throw new Error("Unable to update employee.")
}
let updatedEmployee=await response.json()
let index=employees.findIndex(
function(emp){
return emp.id==id
}
)
employees[index].email=updatedEmployee.email
employees[index].department=employee.department
displayEmployees()
clearForm()
status.textContent="Employee Email Updated Successfully."
}
catch(error){
status.textContent=error.message
}
}
employeeBody.addEventListener("click",handleTableClick)
async function deleteEmployee(event){
try{
let confirmDelete =confirm("Are you sure you want to delete this employee?")
if(!confirmDelete){
return
}
let row =event.target.parentElement.parentElement
let id =Number(row.firstElementChild.textContent)
let response =await fetch(`https://jsonplaceholder.typicode.com/users/${id}`,
{
method:"DELETE"
}
)
if(!response.ok){
throw new Error("Unable to delete employee.")
}
employees =employees.filter(
function(employee){
return employee.id!==id;
}
)
displayEmployees()
status.textContent="Employee Deleted Successfully."
}
catch(error){
status.textContent=error.message
}
}
function handleTableClick(event){
    if(event.target.classList.contains("editBtn")){
        editEmployee(event)
    }
    if(event.target.classList.contains("deleteBtn")){
        deleteEmployee(event)
    }
}
function editEmployee(event){
    // Get the clicked row
    let row = event.target.parentElement.parentElement;
    // Get employee ID from first column
    let id = Number(row.firstElementChild.textContent)
    // Find employee object
    let employee = employees.find(function(emp){
        return emp.id === id
    })
    employeeId.value = employee.id
    employeeName.value = employee.name
    employeeEmail.value = employee.email
    department.value =employee.department
    phone.value = employee.phone
    showStatus("Employee Loaded for Editing", "blue")
}
function clearForm(){
    employeeId.value = ""
    employeeName.value = ""
    employeeEmail.value = ""
    department.value = ""
    phone.value = ""
}
function showStatus(message,color){
    status.textContent = message
    status.style.color = color
}
function showStatus(message,color){
    status.textContent = message
    status.style.color = color
}