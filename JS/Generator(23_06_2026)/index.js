//Generator 
//Automatically Creates iterators
//Less Code
//Easy
function* numbers(){
    yield 1
    yield 2
    yield 3
}
let gen=numbers()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

//Generator vs Normal Function 
function getProducts(){
    return ["Laptop","Tablet","Mobile","Watch","Headphones"]
}
let products=getProducts()
console.log(products)
//Internal Working
// Function Starts
//       ↓
// Creates Entire Array
//       ↓
// Returns Entire Array
//       ↓
// Function Ends
//Real World Issue
//10 Products -> Ok
//100 Products -> Ok
//10 Lakh Products -> Problem
//Because all data loaded into memory once
//Netflix Movies
//Netflix loading all movies
function getMovies(){
    return["Movie 1","Movie 2","Movie 3","Movie 4"]
}
let movies=getMovies()
console.log(movies)//Everything comes together 
//Generator Function
//Instead of loading everything 
//Give me one product at a time 
function* getProduct(){
    yield "Laptop"
    yield "Tablet"
    yield "Mobile"
    yield "Watch"
    yield "Headphones"
}
let product=getProduct()
console.log(product.next())
console.log(product.next())
console.log(product.next())
console.log(product.next())
console.log(product.next())
console.log(product.next())
//Internal Working
// Generator Starts
//        ↓
// yield Laptop
//        ↓
// Pause
//        ↓
// next()
//        ↓
// yield Mobile
//        ↓
// Pause
//        ↓
// next()

// | Feature             | Normal Function | Generator Function |
// | ------------------- | --------------- | ------------------ |
// | Keyword             | function        | function*          |
// | Return Keyword      | return          | yield              |
// | Executes            | Completely      | Step by Step       |
// | Pauses              | No              | Yes                |
// | Resumes             | No              | Yes                |
// | Memory Usage        | More            | Less               |
// | Large Data Handling | Poor            | Excellent          |

//Pagination
function getUser(){
    return["User1","User2","User3","User4","User5"]
}
let users=getUser()
console.log(users)
function* getUsers(){
    yield "User1"
    yield "User2"
    yield "User3"
    yield "User4"
    yield "User5"
}
let user=getUsers()
console.log(user.next())
console.log(user.next())
console.log(user.next())
console.log(user.next())
console.log(user.next())
console.log(user.next())
//Loads users only when needed 
//I would use a generator when data needs to be produced incrementally rather than all at once. Common use cases include pagination, infinite scrolling, unique ID generation, streaming large datasets, and memory-efficient processing where loading all data into memory would be inefficient.