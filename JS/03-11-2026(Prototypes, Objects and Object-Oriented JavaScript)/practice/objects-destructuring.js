const employee={
    name:"Teja",
    role:"Frontend Developer",
    salary:45000,
    address:{city:"Hyderabad"}
}
// Object Destructuring
const {name,role,salary}=employee
console.log(name, role, salary)
// Rename Property
const {name:employeeName}=employee
console.log(employeeName)
// Nested Destructuring
const {address:{city}}=employee
console.log(city)
// Spread Object
const updatedEmployee={...employee,salary:50000}
console.log(updatedEmployee)