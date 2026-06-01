//Loops in JavaScript
//Purpose of loops
//Repeat code multiple times
//Avoid writing the same code again and again
//Process arrays, objects and collections 
//Automate repetitive tasks

//Types of Loops 
//For Loop
//While Loop 
//Do While Loop
//For of Loop
//For in Loop
//infinite Loops

//For loop it will be used when the number of iterations is known 
//Syntax 
//for(initialization;condition;iteration){
//code
//}
for(let i=1;i<=5;i++){
    console.log(i)
}

//While Loop it will be used when iterations are unknown
//while(condition){
//code
//}
let i=1
while(i<=5){
    console.log(i)
    i++
}

//Do While loop is It will run at least once 
let j=1
do{
    console.log(j)
    j++
}while(j<=5)

//For of Loop Iterate over values
//used for 
//Arrays
//Strings
//Sets
//Maps

let skills=["HTML","CSS","JS"]
for(let i of skills){
    console.log(i)
}
//String
let name="Teja"
for(let i of name){
    console.log(i)
}

//For in Loop Iterate over Object keys 
let obj={
    name:"Teja",
    age:22,
    role:"Associate Software Engineer"
}
for(let i in obj){
    console.log(i)
}
//Access Value
for(let i in obj){
    console.log(obj[i])
}

//An Infinite loop will never stops because its condition always true 
//Infinite Loop 
// let k=1
// while(k<=5){
//     console.log(k)
// }

//To Avoid the infinite loops 
//Always update the loop variable 
//Verify the loop condition 
//Use Break when needed

