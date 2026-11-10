function divide(a,b){
    if(b===0) throw new Error("Cannot divide by 0")
    return a/b
}
try{
    console.log(divide(10,2))
    console.log(divide(10,0))
}
catch(error){
    console.error("Error:", error.message)
}
finally{
    console.log("Operation Completed")
}
// Performance measurement
console.time("Loop")
for(let i=0;i<100000;i++){
    Math.sqrt(i)
}
console.timeEnd("Loop")
