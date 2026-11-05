// rest operator
function totalMarks(...marks){
    return marks.reduce((sum,mark)=>sum+mark,0)
}
console.log(totalMarks(80,70,90))
// spread operator
const first=[10,20,30]
const second=[...first,40]
console.log(second)
// object spread
const student={name:"Teja",marks:90}
const updatedStudent={...student,marks:95}
console.log(updatedStudent)