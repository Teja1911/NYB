// JavaScript
// JavaScript is a programming language used to add logic and interactivity to applications and webpages.
// JavaScript is used for:
// Webpage interaction
// Calculations
// Form validation
// DOM manipulation
// API communication
// Browser storage
// Frontend applications
// Backend development with Node.js
// Building applications with frameworks such as React

// Basic JavaScript Program
console.log("Basic Program:")
const name="Teja"
console.log(name)

// variables
// A variable is a named location/reference used to store a value
// let age=25 Here age is variable name/reference store the value of 25

// Variable Types
// var Older Javascript uses
// We can also redeclare the variable
// This is the reason var is generally not considered in modern javascript
console.log("var:")
var age=25
age=26
console.log(age)
var age=30
console.log(age)
console.log("let:")
// let 
// Use let when the variable needs to be reassigned
let score=10
console.log(score)
score=20
console.log(score)
// let score = 30 Cannot redeclare block-scoped variable
console.log("const:")
// const 
// Use const when the variable binding should not be reassigned
const pi=2.14
// pi=3.15 A variable is a named location/reference used to store a value
console.log(pi)
// const name const declarations must be intialized

// var vs let vs const
// | Feature               | `var`         | `let`          | `const`        |
// | --------------------- | ------------- | -------------- | -------------- |
// | Modern recommendation | Usually avoid | Yes            | Yes            |
// | Reassign              | Yes           | Yes            | No             |
// | Redeclare same scope  | Yes           | No             | No             |
// | Block scoped          | No            | Yes            | Yes            |
// | Must initialize       | No            | No             | Yes            |
// | Common usage          | Legacy code   | Changing value | Default choice |

// Scope
// {
//     let ages=25
//     const names="Teja"
// }
// console.log(ages) You cannot access the let variable from outside that block.
// console.log(names)

{
    var age = 25
}
console.log(age) // var does not have the same block-scoping behavior.

// Primitive
// String
// Number
// Boolean
// Undefined
// Null
// BigInt
// Symbol

// String :
// Used for text
console.log("String:")
let person="Teja"
console.log(person)
// Number:
// JavaScript uses the number type for ordinary numeric values.
console.log("Number:")
let a=10
let b=10.5
console.log(a," ",b)
// Boolean 
// Only two values
console.log("Boolean:")
const isLogged=true
const isAdmin=false
console.log(isLogged)
console.log(isAdmin)
// Undefined
// A variable that has been declared but hasn't been assigned a value
console.log("undefined:")
let username
console.log(username)
username="Teja"
console.log(username)
// Null
// null represents an intentional absence of a value.
console.log("null:")
const selectedUser=null
console.log(selectedUser)
// BigInt
// Used for integers larger than the range safely represented by JavaScript's ordinary Number.
console.log("BigInt:")
const bigNumber = 123456789012345678901234567890n;
console.log(bigNumber)
// Symbol
// Symbols create unique values.
console.log("Symbol:")
const id1=Symbol("id")
const id2=Symbol("id")
console.log(id1===id2)

// Reference Data types
// objects and arrays/functions are commonly discussed as reference-type values
// Object
console.log("Object:")
const user = {
    name: "Tej",
    age: 25
}
console.log(user)
console.log("Array:")
// Array
const skills = [
    "HTML",
    "CSS",
    "JavaScript"
]
console.log(skills)
console.log("Function:")
// Function
function greet() {
    console.log("Hello")
}
greet()

// Primitive vs References
// Primitive
let originalAge=25
let copyAge=originalAge
// Changing the copy does NOT affect the original
copyAge=30
console.log(originalAge)
console.log(copyAge)
// References
let originalUser={name:"Teja",age:25}
let copiedUser=originalUser // Copies the memory pointer, not the object
// Changing the property on the copy changes the original!
copiedUser.age=30
console.log(originalUser)
console.log(copiedUser)

console.log("typeof Operator:")
// typeof Operator
// typeof tells you the type of a value.
// Syntax: typeof value
console.log(typeof "Tej");
console.log(typeof 100);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof {});
console.log(typeof []);
console.log(typeof function() {});

console.log("Type Conversion:")
// Type Conversion
// Type conversion means explicitly converting a value from one type to another.
const personage = "30"
console.log(personage)
const numberAge = Number(personage)
console.log(numberAge)
const number = 100
console.log(number)
const text = String(number)
console.log(text)
console.log(Boolean("Hello"))
console.log(Boolean(""))

console.log("Type Coercion:")
// Type Coercion
// This is different from type conversion.
// JavaScript automatically converts types during an operation
console.log("10" + 5)
console.log("10" * 2)

// Operators
// Operators perform operations on values
console.log("Arithmetic Operators:")
// Arithmetic Operators
const result = 10 + 5
console.log(result)
const sub=10-5
console.log(sub)
const mul=10*6
console.log(mul)
// Division
const div=10/5
console.log(div)
// Remainder
const remainder=10%5
console.log(remainder)
// increment
let count =4
count++
console.log(count)
// decrement
count--
console.log(count)

console.log("Assignment Operators:")
// Assignment Operators
let personalScore=100
console.log(personalScore)
// Add
personalScore+=10 //personalScore =100+10
console.log(personalScore)
// Sub
personalScore-=10
console.log(personalScore)
// mul
personalScore*=5
console.log(personalScore)
// Div
personalScore/=10
console.log(personalScore)

console.log("Comparison Operators:")
// Comparison Operators
// Used to compare the values
console.log(10>5)
console.log(10<5)
console.log(10===10)
console.log(10!==5)
console.log(10>=9)
console.log(10<=6)

console.log("Logical Operators:")
// Logical Operators
// Three major logical operators
// &&
// ||
// !
// AND Operator (&&)
// Both conditions must be true.
let userage=25
let hasId=true
console.log(age>=18 && hasId)
// OR Operator (||)
// Atleast one condition must be true
const isUser = false
const isManager = true
console.log(isUser || isManager)
// NOT Operator(!)
// Reverse Boolean
const isLoggedIn = true
console.log(!isLoggedIn)

// Template Literals
// uses `(backticks)
// Much easier to read
console.log("Using Backticks:")
const price = 100
const quantity = 3
console.log(`Total: ${price * quantity}`)
const message = `
Name: Tej
Role: Frontend Developer
Experience: Beginner`
console.log(message)


