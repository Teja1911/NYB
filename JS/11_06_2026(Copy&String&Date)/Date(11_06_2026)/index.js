let date=new Date()
console.log(date)
console.log(date.getFullYear())
console.log(date.getMonth() + 1)
console.log(date.getDate())

let today=new Date()
console.log(`${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`)

// let birthYear=2004
// let currentYear=new Date().getFullYear()
// let age=currentYear-birthYear
// console.log(age)
function calculateAge(){
    let birthDate=document.getElementById("birthYear").value
    let currentDate=document.getElementById("currentYear").value
    let birthYear=new Date(birthDate).getFullYear()
    let currentYear=new Date(currentDate).getFullYear()

    let age=currentYear-birthYear
    let result=document.getElementById("age").textContent=`Your age is ${age}`

}