// ======================================================
// FILE: defensive-programming.js
// TOPIC: Defensive Programming and Error Handling
// ======================================================

(function () {
    console.clear();

    // ======================================================
    // 1. WHY DEFENSIVE PROGRAMMING?
    // ======================================================

    console.log("========== 1. DEFENSIVE PROGRAMMING ==========");

    // Defensive programming means checking assumptions
    // before using data or performing an operation.

    const employee = {
        id: 101,
        name: "Rahul",
        salary: 35000
    };

    if (employee && typeof employee.name === "string") {
        console.log("Employee name:", employee.name);
    } else {
        console.log("Employee name is unavailable.");
    }


    // ======================================================
    // 2. VALIDATE REQUIRED VALUES
    // ======================================================

    console.log("\n========== 2. REQUIRED VALUE VALIDATION ==========");

    function validateEmployeeName(name) {
        if (typeof name !== "string") {
            return {
                valid: false,
                message: "Employee name must be a string."
            };
        }

        if (name.trim() === "") {
            return {
                valid: false,
                message: "Employee name cannot be empty."
            };
        }

        return {
            valid: true,
            message: "Employee name is valid."
        };
    }

    console.log(validateEmployeeName("Rahul"));
    console.log(validateEmployeeName(""));
    console.log(validateEmployeeName(123));


    // ======================================================
    // 3. VALIDATE NUMBERS
    // ======================================================

    console.log("\n========== 3. NUMBER VALIDATION ==========");

    function validateSalary(salary) {
        if (typeof salary !== "number" || !Number.isFinite(salary)) {
            return {
                valid: false,
                message: "Salary must be a finite number."
            };
        }

        if (salary < 0) {
            return {
                valid: false,
                message: "Salary cannot be negative."
            };
        }

        return {
            valid: true,
            message: "Salary is valid."
        };
    }

    console.log(validateSalary(35000));
    console.log(validateSalary(-5000));
    console.log(validateSalary("35000"));
    console.log(validateSalary(NaN));
    console.log(validateSalary(Infinity));


    // ======================================================
    // 4. DEFAULT PARAMETERS
    // ======================================================

    console.log("\n========== 4. DEFAULT PARAMETERS ==========");

    function createEmployee(name, role = "Not Assigned", salary = 0) {
        return {
            name: name,
            role: role,
            salary: salary
        };
    }

    console.log(createEmployee("Rahul", "Frontend Developer", 35000));
    console.log(createEmployee("Priya"));


    // ======================================================
    // 5. NULLISH COALESCING OPERATOR (??)
    // ======================================================

    console.log("\n========== 5. NULLISH COALESCING ==========");

    const employeeSettings = {
        theme: null,
        pageSize: 0,
        notificationsEnabled: false
    };

    const selectedTheme = employeeSettings.theme ?? "light";
    const selectedPageSize = employeeSettings.pageSize ?? 10;
    const notificationsEnabled =
        employeeSettings.notificationsEnabled ?? true;

    console.log("Theme:", selectedTheme);
    console.log("Page size:", selectedPageSize);
    console.log("Notifications:", notificationsEnabled);

    // ?? uses the fallback only when the value is null or undefined.
    // It preserves valid values such as 0, false, and "".


    // ======================================================
    // 6. LOGICAL OR (||) VS NULLISH COALESCING (??)
    // ======================================================

    console.log("\n========== 6. || VS ?? ==========");

    const salaryLimit = 0;

    console.log("Using ||:", salaryLimit || 10000);
    console.log("Using ??:", salaryLimit ?? 10000);

    // || treats 0 as falsy and uses the fallback.
    // ?? preserves 0 because it is not null or undefined.


    // ======================================================
    // 7. OPTIONAL CHAINING (?.)
    // ======================================================

    console.log("\n========== 7. OPTIONAL CHAINING ==========");

    const employeeProfile = {
        name: "Rahul",
        contact: {
            email: "rahul@example.com"
        }
    };

    const missingEmployeeProfile = null;

    console.log("Email:", employeeProfile.contact?.email);

    console.log(
        "Missing profile email:",
        missingEmployeeProfile?.contact?.email
    );

    // Optional chaining returns undefined when a link in the
    // property chain is null or undefined.


    // ======================================================
    // 8. SAFE ARRAY OPERATIONS
    // ======================================================

    console.log("\n========== 8. SAFE ARRAY OPERATIONS ==========");

    function getEmployeeNames(employeeList) {
        if (!Array.isArray(employeeList)) {
            console.log("Expected an array of employees.");
            return [];
        }

        return employeeList
            .filter(function (employee) {
                return employee && typeof employee.name === "string";
            })
            .map(function (employee) {
                return employee.name;
            });
    }

    console.log(
        getEmployeeNames([
            { name: "Rahul" },
            { name: "Priya" },
            null,
            { role: "Tester" }
        ])
    );

    console.log(getEmployeeNames(null));


    // ======================================================
    // 9. TRY...CATCH
    // ======================================================

    console.log("\n========== 9. TRY...CATCH ==========");

    try {
        const result = JSON.parse('{"name":"Rahul","id":101}');

        console.log("Parsed employee:", result);
    } catch (error) {
        console.log("Could not parse the employee data.");
        console.log("Error:", error.message);
    }

    try {
        JSON.parse("{ invalid JSON }");
    } catch (error) {
        console.log("Invalid JSON was handled:", error.message);
    }

    console.log("Program continues after the caught error.");


    // ======================================================
    // 10. THROW CUSTOM ERRORS
    // ======================================================

    console.log("\n========== 10. THROW CUSTOM ERRORS ==========");

    function calculateAnnualSalary(monthlySalary) {
        if (
            typeof monthlySalary !== "number" ||
            !Number.isFinite(monthlySalary) ||
            monthlySalary < 0
        ) {
            throw new Error(
                "Monthly salary must be a valid non-negative number."
            );
        }

        return monthlySalary * 12;
    }

    try {
        console.log("Annual salary:", calculateAnnualSalary(35000));
        console.log("Invalid calculation:", calculateAnnualSalary(-1000));
    } catch (error) {
        console.log("Salary calculation failed:", error.message);
    }


    // ======================================================
    // 11. TRY...CATCH...FINALLY
    // ======================================================

    console.log("\n========== 11. FINALLY ==========");

    try {
        console.log("Starting employee processing.");

        throw new Error("Example processing error.");
    } catch (error) {
        console.log("Processing error:", error.message);
    } finally {
        console.log("Processing attempt finished.");
    }

    // finally executes whether the try block succeeds or throws,
    // provided control reaches this try statement normally.


    // ======================================================
    // 12. VALIDATE EMPLOYEE OBJECTS
    // ======================================================

    console.log("\n========== 12. EMPLOYEE OBJECT VALIDATION ==========");

    function createValidatedEmployee(employeeData) {
        if (
            employeeData === null ||
            typeof employeeData !== "object" ||
            Array.isArray(employeeData)
        ) {
            throw new Error("Employee data must be an object.");
        }

        if (
            typeof employeeData.name !== "string" ||
            employeeData.name.trim() === ""
        ) {
            throw new Error("A valid employee name is required.");
        }

        if (
            typeof employeeData.salary !== "number" ||
            !Number.isFinite(employeeData.salary) ||
            employeeData.salary < 0
        ) {
            throw new Error("A valid non-negative salary is required.");
        }

        return {
            id: employeeData.id ?? Date.now(),
            name: employeeData.name.trim(),
            salary: employeeData.salary,
            role: employeeData.role ?? "Not Assigned"
        };
    }

    try {
        const validEmployee = createValidatedEmployee({
            id: 101,
            name: "  Rahul  ",
            salary: 35000,
            role: "Frontend Developer"
        });

        console.log("Validated employee:", validEmployee);
    } catch (error) {
        console.log("Employee validation failed:", error.message);
    }

    try {
        createValidatedEmployee({
            name: "Priya",
            salary: -5000
        });
    } catch (error) {
        console.log("Invalid employee rejected:", error.message);
    }


    // ======================================================
    // 13. SAFE PROPERTY ACCESS
    // ======================================================

    console.log("\n========== 13. SAFE PROPERTY ACCESS ==========");

    function getDepartmentName(employeeData) {
        return employeeData?.department?.name ?? "Department unavailable";
    }

    console.log(
        getDepartmentName({
            name: "Rahul",
            department: {
                name: "Frontend"
            }
        })
    );

    console.log(getDepartmentName(null));

    console.log(getDepartmentName({
        name: "Priya"
    }));


    // ======================================================
    // 14. PROMISE ERROR HANDLING
    // ======================================================

    console.log("\n========== 14. PROMISE ERROR HANDLING ==========");

    function fetchEmployeeDetails(employeeId) {
        return new Promise(function (resolve, reject) {
            if (typeof employeeId !== "number" || employeeId <= 0) {
                reject(new Error("Employee ID must be a positive number."));
                return;
            }

            resolve({
                id: employeeId,
                name: "Rahul"
            });
        });
    }

    fetchEmployeeDetails(101)
        .then(function (employeeData) {
            console.log("Fetched employee:", employeeData);
        })
        .catch(function (error) {
            console.log("Could not fetch employee:", error.message);
        });

    fetchEmployeeDetails(-1)
        .then(function (employeeData) {
            console.log("Fetched employee:", employeeData);
        })
        .catch(function (error) {
            console.log("Promise rejected:", error.message);
        });


    // ======================================================
    // 15. ASYNC/AWAIT ERROR HANDLING
    // ======================================================

    console.log("\n========== 15. ASYNC/AWAIT ==========");

    async function loadEmployee(employeeId) {
        try {
            const employeeData = await fetchEmployeeDetails(employeeId);

            console.log("Loaded employee:", employeeData);

            return employeeData;
        } catch (error) {
            console.log("Loading failed:", error.message);

            return null;
        }
    }

    loadEmployee(102);
    loadEmployee(0);


    // ======================================================
    // 16. PRACTICAL EMPLOYEE SEARCH
    // ======================================================

    console.log("\n========== 16. PRACTICAL SEARCH ==========");

    const employees = [
        { id: 101, name: "Rahul", role: "Frontend Developer" },
        { id: 102, name: "Priya", role: "Backend Developer" },
        { id: 103, name: "Arjun", role: "Tester" }
    ];

    function searchEmployees(employeeList, searchText = "") {
        if (!Array.isArray(employeeList)) {
            throw new Error("Employee list must be an array.");
        }

        if (typeof searchText !== "string") {
            throw new Error("Search text must be a string.");
        }

        const normalizedSearchText = searchText.trim().toLowerCase();

        return employeeList.filter(function (employee) {
            if (!employee || typeof employee.name !== "string") {
                return false;
            }

            const nameMatches = employee.name
                .toLowerCase()
                .includes(normalizedSearchText);

            const roleMatches =
                typeof employee.role === "string" &&
                employee.role.toLowerCase().includes(normalizedSearchText)

            return nameMatches || roleMatches
        })
    }
    try {
        console.log("Search for Rahul:", searchEmployees(employees, "Rahul"))
        console.log(
            "Search for Developer:",
            searchEmployees(employees, "Developer")
        )
        console.log("Search for everyone:", searchEmployees(employees))
        console.log("Invalid search:", searchEmployees(null, "Rahul"))
    } catch (error) {
        console.log("Search failed:", error.message)
    }

    // END OF DEFENSIVE PROGRAMMING PRACTICE
    console.log("\n========== DEFENSIVE PROGRAMMING COMPLETED ==========")
})()