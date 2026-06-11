let str="Hello Teja"
console.log(str)
console.log(str.length)
console.log(str.slice(0,5))
console.log(str.substring(6,10))
console.log(str.replace("Teja","Surya"))
console.log(str.toUpperCase())
console.log(str.toLowerCase())

let student={
    name:"Teja",
    course:"JavaScript",
    marks:90
}
let today=new Date()
console.log(`Report Generated On: ${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`)
for(let i in student){
    console.log(`${i} : ${student[i]}`)
}