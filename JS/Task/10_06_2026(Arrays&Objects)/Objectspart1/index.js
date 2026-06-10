//Objects in JavaScript
//Objects stores the values in key value pair
//Method 1:
//Object literal
let student={
    name:"Teja",
    age:22,
    location:"Hyderabad"
}
console.log(student)
//Method 2:
//new Object()
let student1=new Object()
student1.name="Tej"
console.log(student1)
//Method 3:
//Constructor Function 
function student2(name,age){
    this.name=name
    this.age=age
}
let s1=new student2(
    "Surya",
    23
)
console.log(s1)
//Method 4:
//Object.create()
let student3=Object.create({})
student3.location="Hyderabad"
console.log(student3)
//Access the Object Properties
let student4={
    name:"Teja",
    age:22,
    location:"Hyderabad"
}
//Dot Notation
console.log(student4.name)
//Bracket Notation
console.log(student4["age"])
//Update Object Property
student4.age=21
console.log(student4)
//Add New Property
student4.state="Telangana"
console.log(student4)
//Delete Property
delete student4.state
console.log(student4)


//Mini Assessment
let students=[
    {
        id:1,
        name:"Teja",
        marks:80
    },
    {
        id:2,
        name:"Surya",
        marks:85
    },
    {
        id:3,
        name:"Lucky",
        marks:75
    }
]
students.forEach(student=>{
    console.log(student.name)
})
let result=students.find(student=>student.id===2)
console.log(result)
let index=students.findIndex(student=>student.id===2)
console.log(index)
let names=students.map(student=>student.name)
console.log(names)
//Filter Top Students
let toppers=students.filter(student=>student.marks>80)
console.log(toppers)
//Total Marks
let total=students.reduce((acc,student)=>acc+student.marks,0)
console.log(total)
//Sort 
//Ascending Order
let stu=students.sort((a,b)=>a.marks-b.marks)
console.log(stu)
//Descending Order
let stud=students.sort((a,b)=>b.marks-a.marks)
console.log(stud)
//Add Student
students.push({
    id:4,
    name:"Chinnu",
    marks:90
})
console.log(students)
//Remove the Student
students.splice(-1,1)
console.log(students)
//Updates the marks
students[0].marks=95
console.log(students)
//Add new Property
students[0].city="Hyderabad"
console.log(students[0])
//Delete property
delete students[0].city
console.log(students[0])




