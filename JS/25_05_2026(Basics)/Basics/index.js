console.log("Hello this is the JavaScript File")


// let name="Teja"
// console.log("Name:",name)

let age=22
age=21
console.log("Age:", age)
let course="JavaScript"
console.log("Course:",course)
let a=19
console.log(a)
let b=12
console.log(b)
let c=a+b
console.log("The Addition of two numbers:",c)
let isEmployee=true
console.log("The Boolean value:",isEmployee)

//Variable Declaration Methods:
//There are three types of declaration in JavaScript
// var it is old method before the let
// let is the new method
// const it will have the constant value 

// | Feature   | var      | let   | const |
// | --------- | -------- | ----- | ----- |
// | Scope     | Function | Block | Block |
// | Reassign  | Yes      | Yes   | No    |
// | Redeclare | Yes      | No    | No    |
// | Hoisting  | Yes      | Yes   | Yes   |
// | TDZ       | No       | Yes   | Yes   |


var name="Surya"
console.log(name)
var name="Teja"
console.log(name)
name="chinnu"
console.log(name)
if(true){
    var x=10
}
console.log(x)//This is the major default in the var keyword it will accessed outside the block it create the bugs and confusion it is functional scope 
console.log(d)
var d=10
//It will allow the web hoisting JavaScript moves declarations to top internally.
//Actual Internal Behavior
// JavaScript internally treats it like:
// var a
// console.log(a)
// a = 10

//Const is fixed variable
const pi=3.14
console.log(pi)
const country="India"
console.log(country)
// country="UK"
// console.log(country) In const we cannot reassign the value it will display the type error 
