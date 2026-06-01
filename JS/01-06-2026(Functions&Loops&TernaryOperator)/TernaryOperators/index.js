//Syntax:
//Condition?statement1:statement2

let age=20
age>=18?console.log("Eligible for Vote"):console.log("Not Eligible for Vote")

let number=20
number % 2 ===0?console.log("Even Number"):console.log("Not Even Number")

let marks=85
marks >= 35? console.log("Pass"):console.log("Fail")

let username="admin"
let password="1234"
let result = username === "admin" && password === "1234" ? "Successful Login": "Invalid Credentials"
console.log(result)

let amount=6000
amount >=5000 ? console.log("Discount Applied"):console.log("Discount is not applied")

let num=5
num>0?console.log("Positive Number"):console.log("Negative Number")

age>=18?console.log("Can Apply for Licenses"):console.log("Cannot apply")

//If Else 
let age1=18
if(age1>=18){
    console.log("Eligible for Vote")
}
else{
    console.log("Not Eligible for Vote")
}

let number1=20
if(number%2===0){
    console.log("Even Number")
}
else{
    console.log("Not Even Number")
}

let marks1=75
if(marks1>=35){
    console.log("Pass")
}
else{
    console.log("Fail")
}

let username1="admin"
let password1="1234"
if(username1==="admin"&&password1==="1234"){
    console.log("Login Successful")
}
else{
    console.log("Invalid Credentials")
}

if(age1>=18){
    console.log("Apply for License")
}
else{
    console.log("Not applicable")
}

//Compare between the ternary operator and if else 
//Ternary Operator
//it will be used for simple logic 
//it has smaller syntax
//Returns Single value
//Single line code 
//Easy for quick decision 

//If-Else
//It will be used for complex logic
//it has larger syntax
//Executes the blocks
//Multiple lines
//Easy for readability
