import { useCallback, useMemo, useState } from "react";

import EmployeeCard from "./EmployeeCard";
import useCounter from "../hooks/useCounter";
import expensiveCalculation from "../utils/expensiveCalculation";

function EmployeeDashboard() {

    const [employees] = useState([
        {
            id: 1,
            name: "Rahul",
            department: "Frontend",
            salary: 60000,
        },
        {
            id: 2,
            name: "Priya",
            department: "Backend",
            salary: 70000,
        },
        {
            id: 3,
            name: "Arun",
            department: "Testing",
            salary: 55000,
        },
    ]);

    const [search, setSearch] = useState("");

    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const {
        count,
        increment,
        decrement,
        reset,
    } = useCounter();

    const filteredEmployees = useMemo(() => {

        return employees.filter((employee) =>
            employee.name
                .toLowerCase()
                .includes(search.toLowerCase())
        );

    }, [employees, search]);

    const totalSalary = useMemo(() => {

        return expensiveCalculation(employees);

    }, [employees]);

    const handleSelect = useCallback((employee) => {

        setSelectedEmployee(employee);

    }, []);

    return (
        <div className="employee-dashboard">

            <h2>Employee Dashboard</h2>

            <div className="search-section">

                <input
                    type="text"
                    placeholder="Search employee..."
                    value={search}
                    onChange={(event) =>
                        setSearch(event.target.value)
                    }
                />

            </div>

            <div className="dashboard-info">

                <p>
                    Total Employees: {employees.length}
                </p>

                <p>
                    Total Salary: ₹
                    {totalSalary.toLocaleString("en-IN")}
                </p>

                {selectedEmployee && (
                    <p>
                        Selected Employee:{" "}
                        {selectedEmployee.name}
                    </p>
                )}

            </div>

            <div className="counter-section">

                <h3>Custom Hook Counter: {count}</h3>

                <button onClick={increment}>
                    +
                </button>

                <button onClick={decrement}>
                    -
                </button>

                <button onClick={reset}>
                    Reset
                </button>

            </div>

            <div className="employee-list">

                {filteredEmployees.map((employee) => (

                    <EmployeeCard
                        key={employee.id}
                        employee={employee}
                        onSelect={handleSelect}
                    />

                ))}

            </div>

        </div>
    );
}

export default EmployeeDashboard;