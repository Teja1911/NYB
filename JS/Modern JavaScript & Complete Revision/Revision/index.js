// Modern JavaScript & Complete Revision

// let const var
const a=10
console.log(a)

let b=19
console.log(b)

var c=12
console.log(c)

// Function
// Normal Function

function add(a,b){
    return a+b
}
console.log(add(19,11))

// Arrow Function
const sum=(a,b)=>{
    return a+b
}
console.log(add(12,3))

// Template Literals 
// Syntax :
// `Statement ${experssion}`

const name="Teja"
const age=22
const message=`Hello ${name}, your age is ${age}`
console.log(message)

// Destructuring
const user={
    person:"Teja",
    city:"Hyderabad"
}
const { person,city }=user
console.log(person)
console.log(city)

const numbers=[10,20,30,40]
const[ first,second ]=numbers
console.log(first)
console.log(second)

// Spread Operator

const employee={
    per:"Teja",
    age:22,
    pincode:500037
}
const updatedEmployee={
    ...employee,
    age:23
}
console.log(updatedEmployee)

const one=[1,2,3,4]
const two=[
    ...one,5,6
]
console.log(two)

// Rest
const{
    per,
    ...details
}=employee
console.log(per)
console.log(details)

// Optional Chaining
const passenger={}
console.log(passenger.address?.city)

// Nullish
const loc=passenger?.address?.city ?? "Chennai"
console.log(loc)

// Map
const user1=new Map()
user1.set("name","Surya")
user1.set("age",22)
user1.set("location","Hyderabad")
console.log(user1.get("name"))

// Set
const numbers1=new Set()
numbers1.add(10)
numbers1.add(20)
numbers1.add(30)
numbers1.add(20)
console.log(numbers1)

// Weak Map
const weakMap=new WeakMap()
const user2={
    name:"Surya"
};
weakMap.set(
    user2,
    "Private Information"
)
console.log(weakMap)

// Weak Set
const weakSet=new WeakSet()
weakSet.add(user2)
console.log(weakSet)
console.log(weakSet.has(user2))

// Promise 
function getUser(){
    return Promise.resolve("Data")
}
getUser()
.then(data=>{
    console.log(data)
})
.catch(error=>{
    console.log(error)
})
console.log(getUser())

// Async/await
async function getLoad(){
    try{
        const data=await getUser()
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
    finally{
        console.log("Finally Block Executed")
    }
}
console.log(getLoad())

// Classes & Inheritance
class Employee{
    constructor(name){
        this.name=name
    }
    login(){
        return `${this.name} logged in`
    }
}
class Developer extends Employee{
    constructor(language){
        super(name)
        this.language=language
    }
    code(){
        return `${this.name} writes ${this.language}`
    }
}
const developer=new Developer("Teja","React")
console.log(developer.login())
console.log(developer.code())

// Higher-Order Function
// +
// Closure

function createMultiplier(number) {
    return function(value) {
        return number * value;
    };
}

const double = createMultiplier(2);
console.log(double(10));