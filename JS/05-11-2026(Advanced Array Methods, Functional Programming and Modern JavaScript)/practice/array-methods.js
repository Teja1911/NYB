const students=[
    {name:"Teja",marks:99},
    {name:"Surya",marks:95},
    {name:"Lucky",marks:40},
    {name:"chinnu",marks:75}
]
// map
console.log(students.map(s=>s.name))
// filter()
console.log(students.filter(s=>s.marks>=80))
// reduce()
console.log(students.reduce((total,s)=>total+s.marks),0)
// find()
console.log(students.find(s=>s.name==="Teja"))
// some()
console.log(students.some(s=>s.marks<50))
// every()
console.log(students.every(s=>s.marks>=50))
// flat() and flatMap()
console.log([1,[2,3],[4,5]].flat())
console.log(students.flatMap(s=>[s.name,s.marks]))
