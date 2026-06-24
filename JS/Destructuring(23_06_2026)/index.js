//Destructuring
//Without destructuring it's like repetition
let user={
    name:"Teja",
    age:22,
    city:"Hyderabad"
}
// let name=user.name
// let age=user.age
// console.log(name)
// console.log(age)
//Too much Repetition
//Using Destructuring 
let {name,age,city}=user
console.log(name)
console.log(age)
console.log(city)
//Array Without Destructuring
let fruits=["Apple","Mango"]
// let first=fruits[0]
// let second=fruits[1]
// console.log(first)
// console.log(second)
//Using Destructuring 
let [first,second]=fruits
console.log(first)
console.log(second)
//Real-time usage
//API response
let response={
    products:[],
    users:[]
}
let {products,users}=response
console.log(products)
console.log(users)