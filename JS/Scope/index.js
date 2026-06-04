//Global Scope 
let a=10
function sum(b,c){
  
    console.log(b+c)
    console.log(a)//Here variable is a global scope it can be accessed inside the function 
}
sum(20,30)

//Functional Scope 
function student(){
    var name="Teja"
    console.log(name)
}
student()

//Block Scope
if(true){
    let age=22
    console.log(age)
}
if(true){
    const city="Hyderabad"
    console.log(city)
}
//var ignores the block scope so that is why it is functional scope
if(true){
    var name="Teja"
}
console.log(name)

let globalVar="Global Scope"
function outerFunction(){
    let functionVar="Function Scope"
    if(true){
        let blockVar="Block Scope"
        console.log(globalVar)
        console.log(functionVar)
        console.log(blockVar)
    }
}
outerFunction()

console.log(g)
var g=9
console.log(g)


