//Functions in JavaScript
//Functions are reusable blocks of code 
//Function Declaration
function greetings(){
    console.log("Hello!")
}
function mul(a,b){
    console.log(a*b)
}
mul(5,6)
greetings()
//Function Expression
let sum=function add(a,b){
    console.log(a+b)
}
sum(19,12)
//Named Function 
function div(a,b){
    console.log(a/b)
}
div(10,5)
//Anonymous Function
let mod=function(a,b){
    console.log(a%b)
}
mod(10,2)
//Arrow Function
let modulus =(a,b)=>{
console.log(a%b)
}
modulus(10,5)
//Recursive Function 
//Factorial Number
function fact(n){
    if(n==0 ||n==1){
        return 1
    }
    return n*fact(n-1)
}
console.log(fact(5))
//Fibonacci Series
function fib(n){
    if(n<=1){
        return n
    }
    return fib(n-1)+fib(n-2)
}
for(let i=0;i<5;i++){
    console.log(fib(i))
}

function num(n){
    if(n===0){
        return 
    }
    console.log(n)
    num(n-1)
}
num(5)

function num1(n){
    if(n===0){
        return
    }
    num1(n-1)
    console.log(n)
}
num1(5)

function added(n){
    let sum=0
    if(n===0){
        return 0
    }
    return n+added(n-1)
}
console.log(added(5))

function rev(str){
    if(str===""){
        return ""
    }
    return rev(str.slice(1))+str[0]
}
console.log(rev("Hello"))


//Variables the differences between the let,var,const
let a=10
console.log(a)
a=20
console.log(a)

var c=10
console.log(c)
c=20
console.log(c)

var c=30
console.log(c)

const d=40
// d=50
console.log(d)

console.log(e)
var e=10

// console.log(f)
// let f

// const f
// console.log(f)

//Comparisons       var          let         const
//Redeclare         Yes          No          No
//Reassign          Yes          Yes         No
//Initialization    Yes          Yes         No
//Scope             Functional   Block       Block
//Hoisting          Yes          No          No

//                     Normal Function      Function Expression    Arrow Function
//Function Hoisting    Yes                  No                     No




hello()
function hello(){
    console.log("Hello")
}

// console.log(hi)
let hi=function hey(){
    console.log("Hi")
}

// console.log(wel)
let wel=()=>{
    console.log("Welcome")
}