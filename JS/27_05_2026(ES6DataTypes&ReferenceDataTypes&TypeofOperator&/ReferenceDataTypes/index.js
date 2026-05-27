//Reference Data Types are used to store :
//complex data
//Multiple values
//collections
//functions
//real-world entities
//Stored in the memory address
// 1.Object
// 2.Array
// 3.Function

//Objects are store in key-value pairs 
//Real Usage:
//user profiles
//API responses
//Employee Data
//Products
let Employee={
    name:"Teja",
    age:22,
    location:"Hyderabad"
}
console.log(Employee.location)
console.log(Employee.name)

//Array stores multiple values in order
//Real Usage:
//Shopping Carts 
//Notifications 
//Comments
//Product List
//Arrays are actually objects internally 
let colors=["White","Red","Blue","Orange"]
console.log(colors[3])

//Functions are also Objects in JavaScript
//Real Usage:
//Reusable Logic
//Event Handling
//Calculations
//APIs
function greet(){
    console.log("Hello!")
}
greet()
function add(a,b){
    return(a+b)
}
console.log(add(12,19))
