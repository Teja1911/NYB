//Recursive Function
function countdown(n){
    if(n===0){
        return
    }
    console.log(n)
    countdown(n-1)
}
countdown(5)

function sum(n){
    if(n===0){
        return 0
    }
    return n+sum(n-1)
}
console.log(sum(5))

function fact(n){
    if(n===1){
        return 1
    }
    return n*fact(n-1)
}
console.log(fact(5))

function fib(n){
    if(n<=1){
        return n
    }
    return fib(n-1)+fib(n-2)
}
for(let i=0;i<=5;i++){
    console.log(fib(i))
}

function rev(str){
    if(str===""){
        return ""
    }
    return rev(str.slice(1))+str[0]
}
console.log(rev("Hello"))

//Iterative Approach 
let total=0
for(let i=0;i<=5;i++){
    total+=i
}
console.log(total)

let result=1
for(let i=1;i<=5;i++){
    result*=i
}
console.log(result);

//IIFE(Immediate Invoke Function Expression)
(function(){
    console.log("IIFE Executed!")
})();

//Closure 
//A inner Function remembers and can access the variables from its outer function even after the outer function execution completes  
function outer(){
    let name="Teja"
    function inner(){
        console.log(name)
    }
    return inner
}
let res=outer();
res()

//counter application 
function counter(){

    let count = 0;

    return function(){

        count++;

        console.log(count);

    };

}

let increment = counter();

increment();
increment();
increment();

function outer(){
    return function(){
        console.log("Returned Function")
    }
}
let re=outer()
re()

//Private variable 
function bankAccount(){
    let balance=1000
    return function(amount){
        balance+=amount
        console.log(balance)
    }
}
let deposit=bankAccount()
deposit(500)


//First Class Function
//Function can be :
//Stored in Variable 
//Be Passed as a argument
//Be Returned from the another function 




//Pure Function 
//Always returns same output for the same input 
//Does not modify the external variables 
//Has no side effects

function add(a,b){
    console.log(a+b)
}
add(10,20)

function area(length,width){
    console.log(length*width)
}
area(10,5)

function checkNumber(n){
    return n%2===0
}
console.log(checkNumber(10))

function calculateGST(price){
    return price+(price*18/100)
}
console.log(calculateGST(1000))

//Impure Function 
// Depends on external Variable
// Modifies data outside the function 
// same input may produce different outputs 

let bonus=5000
function salary(baseSalary){
    return baseSalary+bonus
}
console.log(salary(30000))


let counting=0
function increase(){
    counting++
    return counting
}
console.log(increase())
console.log(increase())

let taxRate=18 //Impure Function Because if we change the tax rate then output may change for the same input 
function calculateGst(price){
    return price+(price*taxRate/100)
}
console.log(calculateGst(1000))

