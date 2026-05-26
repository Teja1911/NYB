//String Type
let name="Teja"
console.log(name)
//Number Type
let num=19
console.log(num)
//Boolean Type
let bol=true
console.log(bol)
//Undefined Type
let a
console.log(a)
//Null Type
let n=null
console.log(n)
//Array Type
let fruits=["Apple","Banana","Cherry"]
console.log(fruits)
//Object Type
let Student={
    name:"Teja",
    age:22
}
let course = "Web Development"
function showcourse(){
    let duration="6months"
    console.log(duration)//Local Scope or Functional Scope it can be used inside the function it can be used outside the function because variable scope is limited to this function only
    console.log(course)//Global Scope it can be used inside and outside the function any where in the code 
}
showcourse()
// console.log(duration)it will 