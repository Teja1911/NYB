// FILE: modern-javascript.js
// TOPIC: Modern JavaScript
(function () {
    console.clear()
    // 1. SET
    console.log("========== 1. SET ==========")
    // A Set stores unique values.
    const employeeIds = new Set()
    employeeIds.add(101)
    employeeIds.add(102)
    employeeIds.add(103)
    employeeIds.add(101) // Duplicate: not added again.
    console.log("Employee IDs:", employeeIds)
    console.log("Total unique IDs:", employeeIds.size)
    console.log("Has employee 102:", employeeIds.has(102))
    employeeIds.delete(103)
    console.log("After deleting 103:", employeeIds)
    // Convert an array with duplicates into unique values.
    const departmentNames = [
        "Frontend",
        "Backend",
        "Frontend",
        "Testing",
        "Backend"
    ]
    const uniqueDepartments = [...new Set(departmentNames)]
    console.log("Unique departments:", uniqueDepartments)

    // 2. MAP
    console.log("\n========== 2. MAP ==========")
    // A Map stores key-value pairs.
    const employeeMap = new Map()
    employeeMap.set(101, "Rahul")
    employeeMap.set(102, "Priya")
    employeeMap.set(103, "Arjun")
    console.log("Employee 101:", employeeMap.get(101))
    console.log("Does employee 102 exist:", employeeMap.has(102))
    console.log("Number of employees:", employeeMap.size)
    employeeMap.set(102, "Priya Sharma")
    console.log("Updated employee 102:", employeeMap.get(102))
    employeeMap.delete(103)
    console.log("After deleting employee 103:", employeeMap)
    // Loop through a Map.
    employeeMap.forEach(function (employeeName, employeeId) {
        console.log(`ID: ${employeeId}, Name: ${employeeName}`)
    })

    // 3. OBJECT VS MAP
    console.log("\n========== 3. OBJECT VS MAP ==========")
    const employeeObject = {
        101: "Rahul",
        102: "Priya"
    }
    console.log("Object employee:", employeeObject[101])
    const employeeMapExample = new Map([
        [101, "Rahul"],
        [102, "Priya"]
    ])
    console.log("Map employee:", employeeMapExample.get(101))
    // Map keys can be values of different types.
    const mixedKeyMap = new Map()
    mixedKeyMap.set("name", "Rahul")
    mixedKeyMap.set(101, "Employee ID")
    mixedKeyMap.set(true, "Active status")
    console.log("String key:", mixedKeyMap.get("name"))
    console.log("Number key:", mixedKeyMap.get(101))
    console.log("Boolean key:", mixedKeyMap.get(true))

    // 4. SYMBOL
    console.log("\n========== 4. SYMBOL ==========")
    // Each Symbol call creates a unique symbol.
    const firstSymbol = Symbol("employeeId")
    const secondSymbol = Symbol("employeeId")
    console.log("Symbols are equal:", firstSymbol === secondSymbol)
    const employee = {
        name: "Rahul",
        [firstSymbol]: 101
    }
    console.log("Employee name:", employee.name)
    console.log("Symbol property:", employee[firstSymbol])
    // Ordinary string-key enumeration does not include symbol keys.
    console.log("Object keys:", Object.keys(employee))
    // Retrieve symbol keys separately.
    console.log("Symbol keys:", Object.getOwnPropertySymbols(employee))

    // 5. ITERATORS
    console.log("\n========== 5. ITERATORS ==========")
    // Arrays are iterable.
    const employeeNames = ["Rahul", "Priya", "Arjun"]
    const employeeIterator = employeeNames[Symbol.iterator]()
    console.log(employeeIterator.next())
    console.log(employeeIterator.next())
    console.log(employeeIterator.next())
    console.log(employeeIterator.next())
    // Each next() call returns an object:
    // { value: ..., done: false }
    // When finished: { value: undefined, done: true }

    // 6. CUSTOM ITERATOR
    console.log("\n========== 6. CUSTOM ITERATOR ==========")
    const employeeCollection = {
        employees: ["Rahul", "Priya", "Arjun"],
        [Symbol.iterator]: function () {
            let currentIndex = 0;
            const names = this.employees
            return {
                next: function () {
                    if (currentIndex < names.length) {
                        return {
                            value: names[currentIndex++],
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
    for (const employeeName of employeeCollection) {
        console.log("Employee:", employeeName)
    }

    // 7. GENERATORS
    console.log("\n========== 7. GENERATORS ==========")
    // A generator function uses function* and yield.
    function* generateEmployeeIds() {
        yield 101
        yield 102
        yield 103
    }
    const generatedIds = generateEmployeeIds()
    console.log(generatedIds.next())
    console.log(generatedIds.next())
    console.log(generatedIds.next())
    console.log(generatedIds.next())

    // 8. GENERATOR WITH A LOOP
    console.log("\n========== 8. GENERATOR WITH A LOOP ==========")
    function* generateNumbers(maximumNumber) {
        for (let number = 1; number <= maximumNumber; number++) {
            yield number
        }
    }
    for (const number of generateNumbers(5)) {
        console.log("Generated number:", number)
    }

    // 9. WEAKMAP
    console.log("\n========== 9. WEAKMAP ==========")
    // WeakMap keys must be objects or non-registered symbols
    // supported by the JavaScript runtime.
    // This example uses an object key.
    const employeeMetadata = new WeakMap()
    const employeeRecord = {
        id: 101,
        name: "Rahul"
    }
    employeeMetadata.set(employeeRecord, {
        lastLogin: "09:30 AM",
        internalNote: "Training completed"
    })
    console.log(
        "Employee metadata:",
        employeeMetadata.get(employeeRecord)
    )
    console.log(
        "Metadata exists:",
        employeeMetadata.has(employeeRecord)
    )
    employeeMetadata.delete(employeeRecord)
    console.log(
        "Metadata after deletion:",
        employeeMetadata.has(employeeRecord)
    )
    // WeakMap is not enumerable.
    // It has no size property and cannot be looped over directly.

    // 10. WEAKSET
    console.log("\n========== 10. WEAKSET ==========")
    // WeakSet stores objects without strongly retaining them.
    const activeEmployeeObjects = new WeakSet()
    const employeeOne = { id: 101, name: "Rahul" }
    const employeeTwo = { id: 102, name: "Priya" }
    activeEmployeeObjects.add(employeeOne)
    activeEmployeeObjects.add(employeeTwo)
    console.log("Employee one is active:", activeEmployeeObjects.has(employeeOne))
    console.log("Employee two is active:", activeEmployeeObjects.has(employeeTwo))
    activeEmployeeObjects.delete(employeeOne)
    console.log(
        "Employee one after removal:",
        activeEmployeeObjects.has(employeeOne)
    )
    // WeakSet is not enumerable and does not have a size property.

    // 11. MAP WITH OBJECT KEYS
    console.log("\n========== 11. MAP WITH OBJECT KEYS ==========")
    const employeeKey = {
        id: 201,
        name: "Sneha"
    }
    const employeeProjects = new Map()
    employeeProjects.set(employeeKey, [
        "Employee Dashboard",
        "Leave Management"
    ])
    console.log(
        "Assigned projects:",
        employeeProjects.get(employeeKey)
    )
    // Object keys in a Map are matched by object identity.
    console.log(
        "New object with same values exists:",
        employeeProjects.has({ id: 201, name: "Sneha" })
    )

    // 12. PRACTICAL EXAMPLE: UNIQUE SKILLS
    console.log("\n========== 12. PRACTICAL EXAMPLE ==========")
    const employees = [
        {
            name: "Rahul",
            skills: ["HTML", "CSS", "JavaScript"]
        },
        {
            name: "Priya",
            skills: ["JavaScript", "React", "CSS"]
        },
        {
            name: "Arjun",
            skills: ["Node.js", "React", "JavaScript"]
        }
    ]
    const allSkills = new Set()
    employees.forEach(function (employeeDetails) {
        employeeDetails.skills.forEach(function (skill) {
            allSkills.add(skill)
        })
    })
    console.log("All unique skills:", [...allSkills])
    // Count how many employees have each skill.
    const skillCounts = new Map()
    employees.forEach(function (employeeDetails) {
        employeeDetails.skills.forEach(function (skill) {
            const currentCount = skillCounts.get(skill) || 0
            skillCounts.set(skill, currentCount + 1)
        })
    })
    console.log("Employee skill counts:")
    skillCounts.forEach(function (count, skill) {
        console.log(`${skill}: ${count} employee(s)`)
    })
    // END OF MODERN JAVASCRIPT PRACTICE
    console.log("\n========== MODERN JAVASCRIPT PRACTICE COMPLETED ==========")
})()