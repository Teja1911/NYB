const numbers=[10,20,30]
const iterators=numbers[Symbol.iterator]()
console.log(iterators.next())
console.log(iterators.next())
console.log(iterators.next())
console.log(iterators.next())
// Generator
function* studentIds(){
    yield 101
    yield 102
    yield 103
}
for(const id of studentIds()){
    console.log(id)
}
