//Java Script Data Types
//1.Primitive Data Types
//2.Non Primitive Data Types or Reference Data Types

//Primitive Data Types
// 1.String
// 2.Number
// 3.Boolean
// 4.Undefined
// 5.Null
// 6.Symbol
// 7.Big Int

//Non-Primitive Data Types
// 1.Objects
// 2.Arrays
// 3.Functions

//Primitive Data Types Stores a single value , immutable , Stored by Value
//String is Sequence of Characters it will be represented in ' ', " " , ` `
let name="Teja"
console.log(name)
//Number are used for Integers , Decimals , Negative Numbers
let num=19
console.log(num)
//Boolean has only two values true or false
let isStudent=true
console.log(isStudent)
//Undefined Variable declared but no value is assigned
let a
console.log(a)
//Null Intentionally empty value
let isMarks=null
console.log(isMarks)
//Symbol Used for unique identifiers
let id=Symbol("id")
console.log(id)
//Big Int used for very large integer values
let big=123456789011223456789
console.log(big)

//Non-Primitive Data Types Mutable values can be changed stored by reference complex data
//Objects stores key-value pairs
let employee={
    name:"Teja",
    age:22
}
console.log(employee.name)
//Arrays Special Type of Object stores the multiple values
let fruits=["Apple","Banana","Mango"]
console.log(fruits[2])
//Functions are also objects in JavaScript
function hello(){
    console.log("Hello!")
}
hello()
function hi(){
    console.log("hi")
    return "hi";
}

//typeof is used to identify the which data type as been used for the particular variable
console.log(`Type of data: ${typeof(name)} and Variable data: ${name}`)//Output: String
console.log(`Type of data: ${typeof(num)} and Variable data: ${num}`)//Output: Number
console.log(`Type of data: ${typeof(isStudent)} and Variable data: ${isStudent}`)//Output: Boolean
console.log(`Type of data: ${typeof(a)} and Variable data: ${a}`)//Output: undefined
console.log(`Type of data: ${typeof(isMarks)} and Variable data: ${isMarks}`)//Output: object This is a Historical JavaScript Bug
console.log(`Type of data: ${typeof(id)} and Variable data: ${id.toString()}`)//Output: Symbol(id)
console.log(`Type of data: ${typeof(big)} and Variable data: ${big}`)//Output: 123456789011223460000
console.log(`Type of data: ${typeof(employee)} and Variable data: ${employee}`)//Output: [Object Object]
console.log(`Type of data: ${typeof(fruits)} and Variable data: ${fruits}`)//Output: Apple,Banana,Mango
console.log(`Type of data: ${typeof(hello)} and Variable data: ${hello()}`)//Output: undefined because function does not have any return statement so function will not return any value so javascript automatically gives undefined 
console.log(`Type of data: ${typeof(hi)} and Variable data: ${hi()}`)//Output: it will return data because we use the return statement in the function