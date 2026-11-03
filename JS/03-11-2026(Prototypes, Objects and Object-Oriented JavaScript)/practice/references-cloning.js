const original={ name: "Teja" , skills: ["HTML","CSS"] }
const reference=original
reference.name="Surya"
console.log(original.name)
const clone={...original}
clone.name="Lucky"
console.log(original.name)
console.log(clone.name)