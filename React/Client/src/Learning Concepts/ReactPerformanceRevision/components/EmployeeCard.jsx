import { memo } from "react";

function EmployeeCard({ employee, onSelect }) {

    console.log("EmployeeCard rendered:", employee.name);

    return (
        <div className="employee-card">

            <h3>{employee.name}</h3>

            <p>
                Department: {employee.department}
            </p>

            <p>
                Salary: ₹{employee.salary.toLocaleString("en-IN")}
            </p>

            <button onClick={() => onSelect(employee)}>
                Select Employee
            </button>

        </div>
    );
}

export default memo(EmployeeCard);