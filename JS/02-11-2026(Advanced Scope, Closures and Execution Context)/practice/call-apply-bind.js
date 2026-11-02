const userForBinding = { name: "Tej" };

function greet(message, role) {
    console.log(`${message}, ${this.name}. Role: ${role}`);
}

// call(): arguments individually
greet.call(userForBinding, "Hello", "Developer");

// apply(): arguments as an array
greet.apply(userForBinding, ["Welcome", "Frontend Developer"]);

// bind(): returns a new function
const boundGreet = greet.bind(userForBinding, "Hi");
boundGreet("JavaScript Developer");