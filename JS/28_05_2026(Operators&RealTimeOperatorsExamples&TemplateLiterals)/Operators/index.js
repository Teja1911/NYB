//Operators in JavaScript
//Purpose of the operators:
//Performs Calculations
//Compare Values
//Assign Values
//Combine Conditions 
//Control Program Logic

//Types of Operators
//Arithmetic Operators
//Assignment Operators
//Comparison Operators 
//Logical Operators
//Unary Operators
//Ternary Operators
//Type Operators
//Bitwise Operators

//Arithmetic Operators
let num1=19
let num2=12
console.log(num1+num2)
console.log(num1-num2)
console.log(num1*num2)
console.log(num1/num2)
console.log(num1%num2)
console.log(num1**num2)
num2++
console.log(num2)
num2--
console.log(num2--)

//Assignment Operators 
let num3=5
console.log(num3)
console.log(num3+=5)
console.log(num3-=5)
console.log(num3*=5)
console.log(num3/=5)

//Comparison Operator
let num4=5
let num5=6
let num6='6'
console.log(num5==num6)//It will check only value are same it will return true is also known as loose equality
console.log(num4==num5)
console.log(num5===num6)//It will also check the data type so it will return false also know as strict equality
console.log(num4===num5)
console.log(num4!=num5)
console.log(num5!==num6)
console.log(num4>num5)
console.log(num4<num5)
console.log(num4>=num5)
console.log(num4<=num5)

//Logical Operators 
//purpose is to check combine conditions 
let age=19
console.log(age>18 && age<30)//Both conditions must be true then it will return true or else false
console.log(age>19 || age<30)//At least one condition must be true then it will return or else false
console.log(!true)//It will give opposite result when we use not operator

//Unary Operators
let num7=19
console.log(++num7)//This is pre increment as the name suggest so the number will be increased before printing the output
console.log(num7++)//This is post increment as the name suggest so the number will be increased after printing the output 
console.log(num7)//so use now number is increased now after printing the value 
console.log(--num7)//This is pre decrement as the name suggest so the number will be decreased before printing the output
console.log(num7--)//This is post decrement as the name suggest so the number will be decreased after printing the output
console.log(num7)//Here Number is decreased

//Ternary Operator
let license=18
let check = license >= 18 ? "Eligible" : "Not Eligible"
console.log(check) 

//Operator Precedence
// ()
// **
// * / %
// + -
// Comparison Operator
// Logical Operator
// Assignment Operator
let op=(5+3*5-10)
console.log(op)