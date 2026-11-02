console.log("Global Execution Context")
function first(){
    console.log("First Function Started")
    second()
    console.log("First Function Ended")
}
function second(){
    console.log("Second Function Executed")
}
first()
console.log("Global Execution Completed!")