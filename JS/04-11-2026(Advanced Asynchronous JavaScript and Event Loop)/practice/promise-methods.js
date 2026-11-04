const p1=Promise.resolve("One")
const p2=Promise.resolve("Two")
const p3=Promise.reject("Three failed")
// Promise.all fails if one rejects
Promise.all([p1,p2])
    .then(console.log)
    .catch(console.error)
// allSettled: returns every outcome
Promise.allSettled([p1,p3]).then(console.log)
// race: first settled promise
Promise.race([p1,p2]).then(console.log)
// any: first fulfilled promise
Promise.any([p3,p2]).then(console.log)
