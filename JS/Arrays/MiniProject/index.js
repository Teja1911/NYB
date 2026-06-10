let students=[
    {
        name:"Teja",
        marks:[90,95,85],
        subjects:["HTML","CSS","JS","HTML"]
    },
    {
        name:"Surya",
        marks:[85,90,80],
        subjects:["HTML","CSS","CSS"]
    },
    {
        name:"Lucky",
        marks:[65,75,88],
        subjects:["HTML","CSS","JS"]
    }
]
let names=students.map(student => student.name)
document.getElementById("names").textContent=names.join(" , ")
let totalHTML=""
students.forEach(student=>{
    let total=student.marks.reduce((acc,curr)=>acc+curr,0)
    totalHTML+=`<p>${student.name} : ${total}</p>`
})
document.getElementById("total").innerHTML=totalHTML
let toppers=students.filter(student=>{
    let total=student.marks.reduce((acc,curr)=>acc+curr,0)
    let average=total/student.marks.length
    return average>80
})
document.getElementById("toppers").textContent=toppers.map(t=>t.name).join(" , ")
let anyFailed=students.some(student=>student.marks.some(mark=>mark<35))
document.getElementById("failed").textContent=anyFailed
let allPassed=students.every(student=>student.marks.every(mark=>mark>=35))
document.getElementById("passed").textContent=allPassed
let subjects=students.map(student=>student.subjects).flat()
let uniqueSubjects=[...new Set(subjects)]
document.getElementById("subjects").textContent=uniqueSubjects.join(" | ")
let ranking=[...students].sort((a,b)=>{
    let totalA=a.marks.reduce((acc,curr)=>acc+curr,0)
    let totalB=b.marks.reduce((acc,curr)=>acc+curr,0)
    return totalB-totalA
})
let rankHTML=""
ranking.forEach(student=>{
    rankHTML+=`<li>${student.name}</li>`
})
document.getElementById("ranking").innerHTML=rankHTML

//Search Student
function searchStudent(){
    let studentNames=students.map(student=>student.name)
    let input=document.getElementById("searchStudent").value
    let index=studentNames.indexOf(input)
    if(index !== -1){
        document.getElementById("studentResult").innerHTML=`${input} found at Index ${index}`
    }
    else{
        document.getElementById("studentResult").innerHTML="Student not Found"
    }
}
//Search Subject
function searchSubject(){
    let subject=document.getElementById("searchSubject").value
    let allSubjects=students.map(student=>student.subjects).flat()
    let result=allSubjects.includes(subject)
    document.getElementById("subjectResult").innerHTML=result?"Subject Found":"Subject not Found" //include returns true or false 
}
//Display Table
function renderTable(){
    let rows=""
    students.forEach(student=>{
        let total=student.marks.reduce((acc,curr)=>acc+curr,0)
    
    let average=(total/student.marks.length).toFixed(2)
    rows+=`
    <tr>
    <td>${student.name}</td>
    <td>${total}</td>
    <td>${average}</td>
    </tr>
    `
    })
    document.getElementById("studentTable").innerHTML=rows
}
renderTable()
function addStudent(){
    let name=document.getElementById("studentName").value
    let mark1=Number(document.getElementById("mark1").value)
    let mark2=Number(document.getElementById("mark2").value)
    let mark3=Number(document.getElementById("mark3").value)
    students.push({
        name:name,
        marks:[
            mark1,
            mark2,
            mark3
        ],
        subjects:[]
    })
    renderTable()
}
//Remove Student
function removeStudent(){
    let name=document.getElementById("removeStudent").value
    let index=students.findIndex(student=>student.name===name)
    if(index !== -1){
        students.splice(index,1)
        renderTable()
    }
}