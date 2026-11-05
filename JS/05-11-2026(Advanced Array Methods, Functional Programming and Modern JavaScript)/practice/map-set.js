// Maps
const studentMarks=new Map()
studentMarks.set('Teja',92)
studentMarks.set("Surya",75)
console.log(studentMarks.get("Teja"))
// Set removes duplicates
const courses=new Set(["JavaScript","React","JavaScripr"])
console.log(courses)
// WeakMap
const student={name:"Teja"}
const privateData=new WeakMap()
privateData.set(student,"Private Student Information")
console.log(privateData.get(student))
// WeakSet
const verifiedStudents=new WeakSet()
verifiedStudents.add(student)
console.log(verifiedStudents.has(student))