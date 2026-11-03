const original={
    name:"Teja",
    address:{city:"Hyderabad"}
}
// Shallow Copy
const shallow={...original}
shallow.address.city="Chennai"
console.log(original.address.city)
// Deep Copy
const deep=structuredClone(original)
deep.address.city="Bangalore"
console.log(deep.address.city)
console.log(original.address.city)
