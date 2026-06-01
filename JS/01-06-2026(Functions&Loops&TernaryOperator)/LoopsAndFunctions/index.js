//Loops 

//for loop
//Multiplication 
for(let i=1;i<=10;i++){
    console.log(`5 * ${i} = ${5*i}`)
}

//while loop
//ATM Balance
let balance=500
while(balance >0){
    console.log(`The Remaining balance is ${balance}`)
    balance -=100
}

//do while loop
//Game Entry
//Game start at least once
let lives=3
do{
    console.log(`The remaining lives are ${lives}`)
    lives--
}while(lives>0)

//For in Loop
//used for objects it will return keys 
let employee={
    name:"Teja",
    age:22,
    role:"Associate Software Engineer"
} 
for(let i in employee){
    console.log(`${i}:${employee[i]}`)
}   

//For of loop
//used in array it will return the values
let technologies=["HTML","CSS","JavaScript","React","NodeJS"]
for(let i of technologies){
    console.log(i)
}

//Functions 
//Used the same code at whenever code is required
//Function without parameter
function hello(){
    console.log("Welcome to Hyderabad")
}

//Function with parameters
//Calculate the area  
function area(length,width){
    console.log(length*width)
}
area(19,11)

//Default Parameter
//Discount
function discount(bill,discount=10){
    let finalBill=bill-(bill*discount/100)
    console.log(finalBill)
}
discount(5000)

//Argument Objects
function totalExpenses(){
    let total=0
    for(let i=1;i<arguments.length;i++){
        total+=arguments[i]
    }
    console.log(total)
}
totalExpenses(1000,1200,1900)

//Rest Parameter
//Shopping Cart
function shoppingCart(...items){
    let total=0
    for(let i of items){
        total+=i
    }
    console.log(total)
}
shoppingCart(1000,1900,1100)

//CallBack Function 
//Food Order
function prepareFood(callback){
    console.log("Food is Preparing")
    callback()
}
function serveFood(){
    console.log("Food Served")
}
prepareFood(serveFood);

//IIFE Function 
(function(){
    console.log("Website is Loaded")
})();