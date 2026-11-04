console.log("1. Start")
setTimeout(()=>{console.log("2. Callback")},0)
Promise.resolve().then(()=>{console.log("3. Promise")})
console.log("End")