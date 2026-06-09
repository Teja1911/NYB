//Global Scope
let students=[]
//Closure
function createCounter(){
    let count=0
    return function(){
        count++
        return count
    }
}
let studentCounter=createCounter()
//Function Declaration
function calculateGrade(marks){
    if(marks>=90){
        return "A"
    }
    else if(marks>=75){
        return "B"
    }
    else if(marks>=50){
        return "C"
    }
    else{
        return "Fail"
    }
}
//Function Expression 
let generateId=function(){
    return "STU"+studentCounter()
}
//Arrow Function
let updateCount=()=>{
    document.getElementById("count").innerText=students.length
}
//Student Object Constructor
function Student(id,name,course,marks){
    this.id=id
    this.name=name
    this.course=course
    this.marks=marks
    this.grade=calculateGrade(marks)
}
//thisKeyword
Student.prototype.showDetails=function(){
    console.log(this.name)
    console.log(this.course)
}

function displayStudents(){
    let table=document.getElementById("studentTable")
    table.innerHTML=""
    students.forEach(function (student){
        table.innerHTML+=
            `<tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.course}</td>
            <td>${student.marks}</td>
            <td>${student.grade}</td>

            </tr>`;
        }
    );
}
document
.getElementById("addstudent")
.addEventListener("click",function(){

    let name =
    document.getElementById("name").value;

    let course =
    document.getElementById("course").value;

    let marks =
    Number(
        document.getElementById("marks").value
    );

    if(
        name === "" ||
        course === "" ||
        marks <= 0
    ){

        alert("Fill all fields");

        return;
    }

    let student =
    new Student(

        generateId(),
        name,
        course,
        marks

    );

    students.push(student);
    console.log(student)

    displayStudents();

    updateCount();

});

