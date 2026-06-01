//Functions in JavaScript
//Function Declaration
//function(){
//code
//}

//Function Declaration
function greet(){
    console.log("Hello!")
}
greet()

//Function Expression
let greet1=function (){
    console.log("Hello!😊")
}
greet1()

//Function Anonymous
let hey=function(){
    console.log("Hello😉")
}
hey()

//Arrow Function
let hi= () => {
    console.log("Hello😊")
}
hi()

//Single arrow function
let add = (a,b) => {
    console.log(a+b)
}
add(19,12);

//IIFE
//Immediate Invoked Function Expression
(function(){
    console.log("IIFE Executed!")
})();

//Function With Parameter
function mul(a,b){
    console.log(a*b)
}
mul(10,5)

//Function default parameter
function sub(a=10,b=6){
    console.log(a-b)
}
sub()

function sum(a,b,c,d){
    console.log(a+b+c+d)
}
sum(12,3,19,11)

//Parameter Handling
function list(name){
    console.log(name)
}
list("Teja",22,"Hyderabad")//Here extra arguments will be ignored

function person(name,age){
    console.log(name)
    console.log(age)
}
person("Teja")//Here lesser argument then parameter it will automatically consider undefined

//Argument Object 
function num1(){
    console.log(arguments)
}
num1(12,3,19,11)//This is the old method 

//sum using the argument object
function sum1(){
    let total=0
    for(let i=0;i<arguments.length;i++){
        total +=arguments[i]
    }
    console.log(total)
}
sum1(12,3,19,11)

//Rest Parameter
//Modern ES6 Approach
function student (...marks){
    console.log(marks);
}
student(90,85,95);
//sum of number using the rest parameter
function sum2(...sum){
    let total=0
    for(let i of sum){
        total+=i
    }
    console.log(total)
}
sum2(19,11,12,3)

//Argument Objects vs Rest Parameter
//Argument Objects
//Old Methods
//Array like Object
//Not available in arrow function 
//uses as argument

//Rest Parameter
//ES6 Methods
//Real array
//Available in arrow function
//uses ...

function add1(a=19,b){
    console.log(a+b)
}
add(11,3)//Here the argument value has more priority than the default value 

function sum4(a,b=19){
    console.log(a+b)
}
sum4(12)//Here we pass one argument and other argument is missing so it will take the default value as the second argument 

//Execution Flow
//argument passed
//Default parameters
//undefined

function appendValue(value){
    document.getElementById("display").value+=value
}
function clearDisplay(){
    document.getElementById('display').value=""
}
function calculate(){
    let expression=document.getElementById("display").value
    let result=eval(expression)
    document.getElementById("display").value=result
}
function backSpace(){
    let value=document.getElementById("display").value
    document.getElementById("display").value=value.slice(0,-1)
}
function SquareRoot(){
    let value=document.getElementById("display").value;
    let result=Math.sqrt(value);
    document.getElementById("display").value=result;
}