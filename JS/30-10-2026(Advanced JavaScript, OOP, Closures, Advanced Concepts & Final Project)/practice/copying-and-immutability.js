// ======================================================
// FILE: copying-and-immutability.js
// TOPIC: Copying, References, and Immutability
// ======================================================

(function () {
    console.clear();

    // ======================================================
    // 1. PRIMITIVE VALUES: COPY BY VALUE
    // ======================================================

    console.log("========== 1. PRIMITIVE VALUES ==========");

    let originalNumber = 100;
    let copiedNumber = originalNumber;

    copiedNumber = 200;

    console.log("Original number:", originalNumber); // 100
    console.log("Copied number:", copiedNumber);     // 200

    // Changing the copied primitive does not change the original.


    // ======================================================
    // 2. OBJECTS: COPYING A REFERENCE
    // ======================================================

    console.log("\n========== 2. OBJECT REFERENCES ==========");

    const originalEmployee = {
        name: "Rahul",
        salary: 35000
    };

    const referencedEmployee = originalEmployee;

    referencedEmployee.salary = 45000;

    console.log("Original employee:", originalEmployee);
    console.log("Referenced employee:", referencedEmployee);

    // Both variables refer to the same object.
    console.log(
        "Same object:",
        originalEmployee === referencedEmployee
    ); // true


    // ======================================================
    // 3. ARRAY REFERENCES
    // ======================================================

    console.log("\n========== 3. ARRAY REFERENCES ==========");

    const originalSkills = ["HTML", "CSS", "JavaScript"];
    const referencedSkills = originalSkills;

    referencedSkills.push("React");

    console.log("Original skills:", originalSkills);
    console.log("Referenced skills:", referencedSkills);

    // Both variables refer to the same array.


    // ======================================================
    // 4. SHALLOW COPY USING SPREAD SYNTAX
    // ======================================================

    console.log("\n========== 4. SHALLOW COPY: SPREAD ==========");

    const employee = {
        name: "Priya",
        role: "Frontend Developer",
        address: {
            city: "Hyderabad",
            country: "India"
        }
    };

    const shallowCopiedEmployee = { ...employee };

    // Changing a top-level property does not change the original.
    shallowCopiedEmployee.role = "Full Stack Developer";

    console.log("Original role:", employee.role);
    console.log("Copied role:", shallowCopiedEmployee.role);

    // However, the nested address object is still shared.
    shallowCopiedEmployee.address.city = "Bengaluru";

    console.log("Original address:", employee.address);
    console.log("Copied address:", shallowCopiedEmployee.address);

    console.log(
        "Same nested address:",
        employee.address === shallowCopiedEmployee.address
    ); // true


    // ======================================================
    // 5. SHALLOW COPY USING OBJECT.ASSIGN()
    // ======================================================

    console.log("\n========== 5. SHALLOW COPY: OBJECT.ASSIGN ==========");

    const originalProduct = {
        name: "Laptop",
        price: 55000
    };

    const copiedProduct = Object.assign({}, originalProduct);

    copiedProduct.price = 60000;

    console.log("Original product:", originalProduct);
    console.log("Copied product:", copiedProduct);

    // Object.assign() copies top-level enumerable properties.
    // It does not recursively copy nested objects.


    // ======================================================
    // 6. ARRAY SHALLOW COPIES
    // ======================================================

    console.log("\n========== 6. ARRAY SHALLOW COPIES ==========");

    const originalNumbers = [10, 20, 30];

    const spreadCopiedNumbers = [...originalNumbers];
    const sliceCopiedNumbers = originalNumbers.slice();
    const fromCopiedNumbers = Array.from(originalNumbers);
    spreadCopiedNumbers.push(40)
    sliceCopiedNumbers.push(50)
    fromCopiedNumbers.push(60)
    console.log("Original:", originalNumbers)
    console.log("Spread copy:", spreadCopiedNumbers)
    console.log("Slice copy:", sliceCopiedNumbers)
    console.log("Array.from copy:", fromCopiedNumbers)

    // 7. DEEP COPY USING STRUCTUREDCLONE
    console.log("\n========== 7. DEEP COPY: STRUCTUREDCLONE ==========")
    const originalUser = {
        name: "Arjun",
        contact: {
            email: "arjun@example.com",
            address: {
                city: "Hyderabad"
            }
        },
        skills: ["JavaScript", "React"]
    }
    const deepCopiedUser = structuredClone(originalUser)
    // Change a nested property in the copied object.
    deepCopiedUser.contact.address.city = "Chennai"
    // Change a nested array in the copied object.
    deepCopiedUser.skills.push("Node.js")
    console.log("Original user:", originalUser)
    console.log("Deep copied user:", deepCopiedUser)
    console.log(
        "Same contact object:",
        originalUser.contact === deepCopiedUser.contact
    ) // false
    console.log(
        "Same skills array:",
        originalUser.skills === deepCopiedUser.skills
    )// false
    // structuredClone() supports many built-in data types.
    // It does not support every JavaScript value, such as functions.

    // 8. DEEP COPY USING JSON
    console.log("\n========== 8. DEEP COPY: JSON ==========")
    const originalSettings = {
        theme: "dark",
        preferences: {
            notifications: true
        }
    }
    const jsonCopiedSettings = JSON.parse(
        JSON.stringify(originalSettings)
    )
    jsonCopiedSettings.preferences.notifications = false
    console.log("Original settings:", originalSettings)
    console.log("Copied settings:", jsonCopiedSettings)
    // WARNING:
    // JSON copying loses or changes some data types and values.
    // Examples include undefined properties, functions, and Date objects.
    // Use structuredClone() for many common deep-copy requirements.

    // 9. IMMUTABILITY: DO NOT MODIFY THE ORIGINAL
    console.log("\n========== 9. IMMUTABILITY ==========")
    const originalEmployeeRecord = {
        id: 101,
        name: "Rahul",
        salary: 35000
    }
    // Instead of modifying the original object,
    // create a new object with the updated salary.
    const updatedEmployeeRecord = {
        ...originalEmployeeRecord,
        salary: 40000
    }
    console.log("Original record:", originalEmployeeRecord)
    console.log("Updated record:", updatedEmployeeRecord)
    console.log(
        "Different objects:",
        originalEmployeeRecord !== updatedEmployeeRecord
    ) // true

    // 10. IMMUTABLE ARRAY OPERATIONS
    console.log("\n========== 10. IMMUTABLE ARRAY OPERATIONS ==========")
    const originalEmployeeNames = ["Rahul", "Priya", "Arjun"]
    // Add an employee without changing the original array.
    const namesAfterAdding = [
        ...originalEmployeeNames,
        "Sneha"
    ]
    // Remove an employee without changing the original array.
    const namesAfterRemoving = originalEmployeeNames.filter(
        function (name) {
            return name !== "Priya"
        }
    )
    // Update an employee name without changing the original array.
    const namesAfterUpdating = originalEmployeeNames.map(
        function (name) {
            return name === "Arjun" ? "Arjun Kumar" : name
        }
    )
    console.log("Original names:", originalEmployeeNames)
    console.log("After adding:", namesAfterAdding)
    console.log("After removing:", namesAfterRemoving)
    console.log("After updating:", namesAfterUpdating)
    // 11. UPDATING AN OBJECT INSIDE AN ARRAY
    console.log("\n========== 11. UPDATE OBJECT INSIDE ARRAY ==========")
    const employees = [
        { id: 1, name: "Rahul", salary: 35000 },
        { id: 2, name: "Priya", salary: 42000 },
        { id: 3, name: "Arjun", salary: 50000 }
    ]
    const updatedEmployees = employees.map(function (employee) {
        if (employee.id === 2) {
            return {
                ...employee,
                salary: 47000
            }
        }
        return employee
    })
    console.log("Original employees:", employees)
    console.log("Updated employees:", updatedEmployees)

    // 12. SHALLOW COPY PROBLEM WITH ARRAYS OF OBJECTS
    console.log("\n========== 12. ARRAY OF OBJECTS ==========")
    const originalDepartments = [
        {
            name: "Frontend",
            manager: {
                name: "Rahul"
            }
        },
        {
            name: "Backend",
            manager: {
                name: "Priya"
            }
        }
    ]
    const copiedDepartments = [...originalDepartments]
    // The array is new, but its object elements are shared.
    copiedDepartments[0].manager.name = "Arjun"
    console.log("Original departments:", originalDepartments)
    console.log("Copied departments:", copiedDepartments)
    console.log(
        "Same first department object:",
        originalDepartments[0] === copiedDepartments[0]
    )// true

    // 13. OBJECT.FREEZE
    console.log("\n========== 13. OBJECT.FREEZE ==========")
    const applicationConfig = Object.freeze({
        appName: "Employee Management System",
        version: "1.0"
    })
    applicationConfig.version = "2.0"
    console.log("Application config:", applicationConfig)
    // Object.freeze() prevents changing the object's own properties.
    // It is shallow: nested objects are not automatically frozen.

    // 14. PRACTICAL EMPLOYEE UPDATE FUNCTION
    console.log("\n========== 14. PRACTICAL EXAMPLE ==========")
    const employeeRecords = [
        { id: 101, name: "Rahul", role: "Frontend Developer" },
        { id: 102, name: "Priya", role: "Backend Developer" },
        { id: 103, name: "Arjun", role: "Tester" }
    ]
    function updateEmployeeRole(employeeList, employeeId, newRole) {
        return employeeList.map(function (employee) {
            if (employee.id === employeeId) {
                return {
                    ...employee,
                    role: newRole
                }
            }
            return employee
        })
    }
    const updatedEmployeeRecords = updateEmployeeRole(
        employeeRecords,
        103,
        "QA Engineer"
    )
    console.log("Before update:", employeeRecords);
    console.log("After update:", updatedEmployeeRecords);
    // Verify that the original array remains unchanged.
    console.log(
        "Original role:",
        employeeRecords.find(function (employee) {
            return employee.id === 103
        }).role
    ) // Tester

    // END OF COPYING AND IMMUTABILITY PRACTICE
    console.log("\n========== COPYING PRACTICE COMPLETED ==========")
})()