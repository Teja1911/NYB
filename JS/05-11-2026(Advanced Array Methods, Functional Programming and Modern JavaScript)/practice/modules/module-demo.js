import { calculateAverage, getPassedStudents, getStudentNames } from "./student-utils.js";
const students=[
    { name: "Teja", marks: 92 },
    { name: "Rahul", marks: 78 },
    { name: "Sneha", marks: 45 }
]
console.log(calculateAverage(students.map(s=>s.marks)))
console.log(getPassedStudents(students))
console.log(getStudentNames(students))