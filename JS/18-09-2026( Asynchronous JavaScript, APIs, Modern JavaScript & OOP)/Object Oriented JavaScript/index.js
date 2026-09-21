// Objects
// An object groups related data and behavior.
const developerProfile = {
    name: "Tej",
    role: "Frontend Developer",
    introduce() {
        console.log( `I am ${this.name}`)
    }
}
developerProfile.introduce()

// Constructor Function
// Before classes became common, constructor functions were used to create multiple similar objects.
function EmployeeRecord(employeeName, employeeRole) {
    this.name = employeeName
    this.role = employeeRole

}
const firstEmployee = new EmployeeRecord(
    "Tej",
    "Developer"
)
const secondEmployee = new EmployeeRecord(
    "Maya",
    "Tester"
)
console.log(firstEmployee)
console.log(secondEmployee)

// Classes
// Classes provide cleaner syntax for creating objects and working with inheritance.
class ProductItem {
    constructor(itemName, itemPrice) {
        this.name = itemName
        this.price = itemPrice
    }
    showDetails() {
        console.log(`${this.name}: ₹${this.price}`)
    }
}
const laptopItem = new ProductItem(
    "Laptop",
    60000
)
laptopItem.showDetails()

// Constructor
// The constructor runs when an instance is created.
class BankAccount {
    constructor(accountHolder, openingBalance) {
        this.holder = accountHolder
        this.balance = openingBalance
    }
}
const personalAccount = new BankAccount(
    "Tej",
    5000
)
console.log(personalAccount)
// Methods
// Functions defined in a class are methods.
class CalculatorTool {
    add(firstNumber, secondNumber) {
        return firstNumber + secondNumber
    }
}
const calculationTool = new CalculatorTool()
console.log(calculationTool.add(10, 20))

// Prototype
// Every JavaScript object has an internal prototype relationship.
// Class methods are normally stored on the class's prototype rather than copied separately onto every instance.
class DeviceUnit {
    constructor(deviceName) {
        this.name = deviceName
    }
    powerOn() {
        console.log(`${this.name} powered on`)
    }
}
const mobileDevice = new DeviceUnit("Mobile")
console.log(Object.getPrototypeOf(mobileDevice) === DeviceUnit.prototype)

// Inheritance
// Inheritance allows one class to extend another.
class VehicleBase {
    move() {
        console.log("Vehicle is moving")
    }
}
class CarModel extends VehicleBase {
    drive() {
        console.log("Car is driving")
    }
}
const familyCar = new CarModel()
familyCar.move()
familyCar.drive()

// extends
// class CarModel extends VehicleBase {
// }
// means CarModel inherits from VehicleBase

// super
// Used to call the parent constructor or parent method.
class EmployeeBase {
    constructor(workerName) {
        this.name = workerName
    }
    showName() {
        console.log(this.name)
    }
}
class DeveloperRole extends EmployeeBase {
    constructor(workerName, programmingLanguage) {
        super(workerName)
        this.language = programmingLanguage
    }
    showRole() {
        super.showName()
        console.log(this.language)
    }
}
const codingEmployee = new DeveloperRole("Tej","JavaScript")
codingEmployee.showRole()

// Encapsulation
// Encapsulation means controlling how internal state is accessed or modified.
// Modern JavaScript classes support private fields using #.
class WalletAccount {
    #balance = 0
    depositMoney(amountValue) {
        if (amountValue > 0) {
            this.#balance += amountValue
        }
    }
    getBalance() {
        return this.#balance
    }
}
const personalWallet = new WalletAccount()
personalWallet.depositMoney(500)
console.log(personalWallet.getBalance())

// Iterator
// An iterator is an object that follows the iterator protocol by providing a next() method that returns objects shaped like:
const scoreCollection = [10, 20, 30]
const scoreIterator = scoreCollection[Symbol.iterator]()
console.log(scoreIterator.next())
console.log(scoreIterator.next())
console.log(scoreIterator.next())
console.log(scoreIterator.next())
// custom Iterator
const numberSequence = {
    start: 1,
    end: 3,
    [Symbol.iterator]() {
        let currentValue = this.start
        return {
            next: () => {
                if (currentValue <= this.end) {
                    return {
                        value: currentValue++,
                        done: false
                    }
                }
                return {
                    value: undefined,
                    done: true
                }
            }
        }
    }
}
for (const sequenceValue of numberSequence) {
    console.log(sequenceValue)
}

// Generator
// A generator is a special function that can pause and resume execution.
// Syntax:
// function* generatorName() {
//     yield value;
// }
function* ticketGenerator() {
    yield "Ticket-1"
    yield "Ticket-2"
    yield "Ticket-3"
}
const ticketSequence = ticketGenerator()
console.log(ticketSequence.next())
console.log(ticketSequence.next())
console.log(ticketSequence.next())
console.log(ticketSequence.next())