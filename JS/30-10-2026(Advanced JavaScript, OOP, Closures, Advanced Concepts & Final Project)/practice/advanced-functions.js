console.log("===== ADVANCED FUNCTIONS =====")
// 1. SCOPE CHAIN AND LEXICAL ENVIRONMENT
const companyName = "NYB Infotech"
function showCompanyDetails() {
    const departmentName = "Frontend"
    function showEmployeeDetails() {
        const employeeName = "Rahul"
        console.log("Company:", companyName)
        console.log("Department:", departmentName)
        console.log("Employee:", employeeName)
    }
    showEmployeeDetails()
}
showCompanyDetails()

// 2. CLOSURES
function createEmployeeCounter() {
    let employeeCount = 0
    return function incrementEmployeeCount() {
        employeeCount++
        return employeeCount
    }
}
const employeeCounter = createEmployeeCounter()
console.log(employeeCounter()) // 1
console.log(employeeCounter()) // 2
console.log(employeeCounter()) // 3

// 3. CALLBACK FUNCTIONS
function calculateEmployeeBonus(salary) {
    return salary * 0.10
}
function processEmployeeSalary(salary, callback) {
    return callback(salary)
}
const employeeBonus =
    processEmployeeSalary(30000, calculateEmployeeBonus)
console.log("Employee Bonus:", employeeBonus)

// 4. HIGHER-ORDER FUNCTIONS
const employeeSalaries = [
    25000,
    35000,
    45000,
    55000
]
function calculateBonus(salary) {
    return salary * 0.10
}
function processSalaries(salaries, callback) {
    return salaries.map(callback)
}
const employeeBonuses =
    processSalaries(employeeSalaries, calculateBonus)
console.log("Employee Bonuses:", employeeBonuses)

// 5. FUNCTION COMPOSITION
function applyDiscount(price) {
    return price - 100
}
function addTax(price) {
    return price * 1.18
}
function calculateFinalPrice(price) {
    const discountedPrice = applyDiscount(price)
    const finalPrice = addTax(discountedPrice)
    return finalPrice
}
console.log(
    "Final Product Price:",
    calculateFinalPrice(1000)
) // 1062

// 6. CURRYING
function calculateProductTotal(price) {
    return function calculateQuantityTotal(quantity) {
        return price * quantity
    }
}
const calculateLaptopTotal = calculateProductTotal(50000)
console.log(
    "Laptop Total:",
    calculateLaptopTotal(2)
) // 100000

// 7. THIS KEYWORD
const employeeProfile = {
    name: "Priya",
    role: "Frontend Developer",
    showDetails: function () {
        console.log(
            `${this.name} works as a ${this.role}.`
        )
    }
}
employeeProfile.showDetails()

// 8. CALL()
function introduceEmployee(city, role) {
    console.log(
        `${this.name} works in ${city} as a ${role}.`
    )
}
const firstEmployee = {
    name: "Rahul"
}
introduceEmployee.call(
    firstEmployee,
    "Hyderabad",
    "Developer"
)

// 9. APPLY()
introduceEmployee.apply(
    firstEmployee,
    ["Chennai", "Tester"]
)

// 10. BIND()
const boundIntroduction = introduceEmployee.bind(
    firstEmployee,
    "Bengaluru",
    "Software Engineer"
)
boundIntroduction()
console.log("===== END OF ADVANCED FUNCTIONS =====")