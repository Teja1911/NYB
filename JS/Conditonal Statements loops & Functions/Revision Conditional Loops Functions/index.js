// Truthy Values
// Truthy Values behaves like : true
if ("Hello") {
    console.log("Runs")
}
if (100) {
    console.log("Runs")
}
if ([]) {
    console.log("Runs")
}
if ({}) {
    console.log("Runs")
}
// Falsy Values 
// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN

// Conditional Statements
// if
// if else
// else if
// Nested Conditions 
// switch

// if
// if executes the code when the condition is true
// Syntax:
// if(condition){
// }
console.log("If Condition:")
const age=22
if(age>=18){
    console.log("Eligible")
}

// if else
// Use when there are two possible paths
// Syntax:
// if(condition){
// code
// } 
// else{
// }
console.log("If Else Condition:")
const marks=89
if(marks>=35){
    console.log("You Pass")
}
else{
    console.log("You Fail")
}

// else if
// Use when we have a multiple conditions
console.log("Else If Condition:")
const mark=85
if(mark>=90){
    console.log("A+")
}
else if(mark>=75){
    console.log("A")
}
else if(mark=60){
    console.log("B")
}
else{
    console.log("Needs Improvement")
}

// Nested Condition
// An if another if
console.log("Neseted Condition:")
const userage=22
const hasId=true
if(userage>=18){
    if(hasId){
        console.log("Entry allowed")
    }
}

// Switch 
// switch is useful when comparing one value against several specific cases
// Syntax:
//switch (value) {
    //case value1:
        // code
        //break;
    //case value2:
        // code
        //break;
//  default:
        // fallback
//  }
console.log("Switch Statement:")
const role="admin"
switch(role){
    case "admin":
        console.log("Full access")
        break
    case "editor":
        console.log("Edit access")
        break
    case "viewer":
        console.log("Read access")
        break
    default:
        console.log("Unknown role")
}

// Ternary Operator
// Ternary is short form for a simple if...else
// Syntax: condition ? valueIfTrue : valueIfFalse
console.log("Ternary Operator:")
let lincese="Available"
let result=!lincese?"Not Eligible to drive vechile":"Elgible to drive vechile"
console.log(result)

// for loop
// Use for when you know or can express the loop progression clearly.
// Syntax
// for (
//     initialization;
//     condition;
//     update
// ) {
//     code
// }
console.log("For Loop:")
for(let i=1;i<=5;i++){
    console.log(i)
}
// While 
// Use when the number of iterations isn't necessarily known beforehand and you want to continue while a condition remains true.
// Syntax:
// while (condition) {
    // code
// }
console.log("While Condition:")
let count=1
while(count<=5){
    console.log(count)
    count++
}
// do while
// do...while executes the body at least once.
// Syntax:
// do {
    // code
// } while (condition)
console.log("do while:")
let count1=10
do{
    console.log(count1)
    count1++
}while(count1<=5)
// for of
// It gives the value as output
console.log("For Of:")
const skills=["HTML","CSS","JS"]
for(const skill of skills){
    console.log(skill)
}
// for in
// Usually used for enumerable property keys of objects.
console.log("For In:")
const user={
    name:"Teja",
    location:"Hyderabad",
    pincode:500037
}
for(const key in user){
    console.log(key)
}
for(const key in user){
    console.log(user[key])
}

// Function 
// Function is a reusable block of code 
// Function Declaration:
// Syntax:
// function functionName() {
    // code
// }
console.log("Function Declaration:")
function greet(){
    console.log("Hello")
}
greet()

// Parameter and arguments
console.log("Parameters and Arguments:")
function greets(name){  // Here name is a parameter 
    console.log(`Hello ${name}`)
}
greets("Teja")  // "Teja" is an argument

// Function Expression
// A function can be stored in a variable
console.log("Function Expression:")
const greetings=function(){
    console.log("Hello")
}
greetings()

// Arrow Function
// Modern JavaScript provides arrow function
console.log("Arrow Function:")
const welcome=(name)=>{
    console.log(`Hello ${name}`)
}
welcome("Surya")

// Default Parameters
// You can provide the default value
console.log("Default Parameter:")
function greet1(name="Surya"){
    console.log(`Hello ${name}`)
}
greet1()

// Rest Parameter 
// Rest parameters collect multiple arguments into an array.
// Syntax:
// function functionName(...values) {
// }
// Reset parameter must be last 
console.log("Rest Parameter:")
function calculateTotal(...prices){
    let total=0
    for(const price of prices){
        total+=price
    }
    return total
}
console.log(calculateTotal(100,200,300))

// Arguments Object
// Traditional non-arrow functions have access to a special:arguments
// object-like value containing the arguments passed to the function.
console.log("Argument Object:")
function showArguments() {
    console.log(arguments[0])
    console.log(arguments[1])
    console.log(arguments[2])
}
showArguments("Tej", 25, "Developer")

// Recursive Function
// Recursive Function is a function that calls itself
console.log("Recursive Function:")
function factorial(number){
    if(number===1){
        return 1
    }
    return number * factorial(number-1)
}
console.log(factorial(5))

// Callback Function
// A callback is a function passed to another function so that it can be called later or as part of another operation.
console.log("Callback Function:")
function processNumber(number,callback){
    return callback(number)
}
function double(number) {
    return number * 2
}
console.log(processNumber(10, double))

