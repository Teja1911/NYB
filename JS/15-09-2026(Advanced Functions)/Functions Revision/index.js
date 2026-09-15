// Function:
// Function is reusable block of code desgin to perform a specific task

// Function Declaration
// Function declarations are hoisted
console.log("Function Declaration:")
function add(a,b){
    return a+b
}
console.log(add(12,19))

// Function Expression
// Here functioin is stored inside a variable
console.log("Function Expression:")
const sub=function (a,b){
    return a-b
}
console.log(sub(19,12))

// Named Function and Anonymus Function
// Anonymus Function
console.log("Anonymus Function:")
const greet=function(){
    console.log("Hello")
}
greet()
// Named Function
console.log("Named Function:")
const greets=function greets(){
    console.log("Welcome")
}
greets()

// Arrow Function 
const userRegular={
    userName:"Alice",
    greetLater:function(){
        setTimeout(function(){ // In normal function will have their own this it will represent undefined in the output for userName
            console.log("Regular Function: Hello ",this.userName)
        },1000)
    }
}
userRegular.greetLater()

const userArrow={
    userName:"Surya",
    greetLater:function(){
        setTimeout(()=>{
            console.log("Arrow Function: Hello ",this.userName) // in arrow it will use the lexical scope it will take the userName from the above function because it does not have the own this 
        },2000)
    }
}
userArrow.greetLater()

// callback
console.log("Callback Function:")
function processUser(name,callback){
    console.log(`Processing ${name}`)
    callback()
}
function completed(){
    console.log("Completed")
}
processUser("Teja",completed)

function calculate(operation,a,b){
    return operation(a,b)
}
function add(a,b){
    return a+b
}
function multiply(a,b){
    return a*b
}
console.log(calculate(add,12,19))
console.log(calculate(multiply,3,11))

// Higher Order Function
// accepts a function
// OR
// returns a function
// A simple function to pass around
console.log("Higher Order Function:")
const greeting = () => "Hi there!";
// 1. This is a Higher-Order Function because it takes a function as an argument
function repeatTwice(fn) {
  console.log(fn());
  console.log(fn());
}
repeatTwice(greeting)


// First Class Function
// A language has First-Class Functions if it treats functions just like regular variables.
// This means you can:
// Assign a function to a variable.
// Pass a function as an argument to another function.
// Return a function from another function.
console.log("Fitst Class Function:")
const sayHello = function() {
  return "Hello!"
}
const actionList = [sayHello]
console.log(actionList[0]())

// Default Parameters
console.log("Default Parameters:")
function greet1(name = "Guest") {
    return `Hello ${name}`;
}
console.log(greet1("Teja"))
console.log(greet1())

// Rest Parameters
// Rest collects multiple arguments into an array.
console.log("Rest Parameter:")
function calculateTotal(...numbers) {
    return numbers.reduce((sum, number) => sum + number,0)
}
console.log(calculateTotal(10, 20, 30, 40))

// Arguments Object
// Traditional functions have
console.log("Arguments:")
function showArguments() {
    console.log(arguments)
}
showArguments(10, 20, 30)

// Global Scope
console.log("Global Scope:")
const company = "NYB";
function showCompany() {
    console.log(company);
}

// Functional Scope
console.log("Functional Scope:")
function test() {
    const message = "Hello"
    console.log(message)
}
test()
// console.log(message)

// Block Scope
console.log("Block Scope:")
if (true) {
    let name = "Tej";
    const age = 25;
    console.log(name)
    console.log(age)
}

// console.log(name);  Error

// var scope:
console.log("Var Scope:")
if (true) {
    var name = "Tej";
}
console.log(name)

// |                             | `var` | `let` | `const` |
// | --------------------------- | ----- | ----- | ------- |
// | Function scoped             | ✅     | ❌     | ❌       |
// | Block scoped                | ❌     | ✅     | ✅       |
// | Redeclaration in same scope | ✅     | ❌     | ❌       |
// | Reassignment                | ✅     | ✅     | ❌       |
// | Hoisted                     | Yes   | Yes*  | Yes*        |
// | TDZ                         | ❌     | ✅     | ✅       |


// Hoisting
// JavaScript processes declarations before executing code in a scope.
console.log("Var Hoisting:")
console.log(name1);
var name1 = "Tej"

// console.log(name2) Uncaught ReferenceError: Cannot access 'name2' before initialization
let name2 = "Tej"

// same for const
console.log("Functional Hoisting:")
greet2();
function greet2() {
    console.log("Hello");
}

// Lexical Scope
//  Lexical Scope means that a variable's visibility and accessibility are determined entirely by where the variable is written (its physical location) in the source code.
function outerFunction() {
  const outerVariable = "I am from the outer scope!"
  function innerFunction() {
    // innerFunction can see outerVariable because of Lexical Scope
    console.log(outerVariable)
  }
  innerFunction()
}
outerFunction()

// A closure occurs when a function retains access to variables from its surrounding lexical scope even after that outer function has finished executing.
console.log("Closure:")
function createCounter() {
    let count = 0
    return function () {
        count++
        return count
    }
}
const counter = createCounter()
console.log(counter())
console.log(counter())
console.log(counter())

function createAccount() {
    let balance = 0
    return {
        deposit(amount) {
            balance += amount
        },
        getBalance() {
            return balance
        }
    }
}
const account = createAccount()
account.deposit(1000)
console.log(account.getBalance())

// IIFE
// Immediately Invoked Function Expression
// Normal Function:
console.log("IIFE:");
(function () {
    console.log("Executed immediately");
})();
// Arrow Function
(() => {
    console.log("Executed immediately");
})();


function createProcessor(multiplier = 2) {

    let count = 0;

    return function process(...numbers) {

        count++;

        return numbers.map(
            number => number * multiplier
        );
    }
}
const doubleNumbers = createProcessor()
console.log(doubleNumbers(10, 20, 30))

// Problem 1 — Function Declaration
function calculateSalary(salary,bonus){
    return salary+bonus
}
console.log(calculateSalary(50000,5000))

// Problem 2 — Function Expression
const calculateTax = function(amount, rate) {
    return amount/rate
}
console.log(calculateTax(10000,10))

// Problem 3 — Arrow Function
console.log("Normal Function:")
function square(number) {
    return number * number;
}
console.log(square(5))
console.log("Arrow Function:")
const square1=(number)=>{
    return number*number
}
console.log(square1(5))

// Problem 4 — Callback
function processNumber(number,callback){
    return callback(number)
}
function doubled(number){
    return number*2
}
console.log(processNumber(10,doubled))

// Problem 5 — Higher-Order Function
function createMultiplier(number){
    return function(){
        return number*10
    }
}
const triple=createMultiplier(3)
console.log(triple(10))

// Problem 6 — Default + Rest
function calculateTotal1(disount=0,...prices){
    const totalPrices=prices.reduce((total,price)=>total+price,0)
    return totalPrices-disount
}
console.log(calculateTotal1(50,100,200,300))

var a = 10
function test() {
    var a = 20
    if (true) {
        let b = 30
        var c = 40
        console.log(a) //20
        console.log(b) //30
        console.log(c) //40
    }
    console.log(a) // 20
    console.log(c) // 40
}
test()
console.log(a) // 10

// Problem 8 — Hoisting
console.log(a1)
var a1 = 10

// console.log(b) Reference Error
let b = 20

sayHello1()
function sayHello1() {
    console.log("Hello")
}

// Problem 9 — Closure
function createCounter1(){
    count=0
    return function(){
        count++
        return count
    }
}
const counter1=createCounter1()
console.log(counter1())
console.log(counter1())
console.log(counter1());

// Problem 10 - IIFE
(function() {
  // 1. Creates a private variable
  const statusMessage = "Application initialized";
  // 2. Prints it
  console.log(statusMessage); 
})()
// 3. Cannot access that variable outside
try {
  console.log(statusMessage)
} catch (error) {
  console.log("Error: Cannot access statusMessage outside! (" + error.message + ")")
}