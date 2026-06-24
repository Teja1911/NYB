//Iterators
//Needed a standard way to access data one item at a time
//Manually Created
//More Code
//Complex
let numbers=[10,20,30]
let iterators=numbers[Symbol.iterator]()
console.log(iterators.next())
console.log(iterators.next())
console.log(iterators.next())
console.log(iterators.next())
//If there is value present in the array it will show the done false
//If there is no value present in tha array it will show the done true and value undefined 
