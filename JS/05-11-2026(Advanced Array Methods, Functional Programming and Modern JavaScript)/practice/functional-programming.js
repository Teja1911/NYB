// pure
function add(a,b){
    return a+b
}
console.log(add(19,12))
// impure
let total=0
function updateTotal(value){
    total+=value
    return total
}
console.log(updateTotal(10))
// Higher Order Function 
function calculate(a,b,operations){
    return operations(a,b)
}
console.log(calculate(10,20,(a,b)=>a*b))
// Immutability
const original={name:"Teja",marks:90}
const updated={...original,marks:95}
console.log(original)
console.log(updated)