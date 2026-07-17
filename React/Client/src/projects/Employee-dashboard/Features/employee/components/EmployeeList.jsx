import EmployeeCard from "./EmployeeCard";

function EmployeeList({employees,search,filters,dispatch}){
    const filteredEmployees = employees.filter((employee) => {
    const matchesSearch =
        employee.name.toLowerCase()
        .includes(search.toLowerCase());
    const matchesDepartment =
    filters.department === "All" || employee.department?.trim().toLowerCase() === filters.department?.trim().toLowerCase();
    const matchesRole =
    filters.role === "All" || employee.role?.trim().toLowerCase() === filters.role?.trim().toLowerCase();
    return (matchesSearch&&matchesDepartment&&matchesRole);
    });
    if (filteredEmployees.length === 0) {
        return <h3>No Employees Found</h3>;
    }
    
    return (
        <div className="employee-grid">
            {filteredEmployees.map((employee) => (
                <EmployeeCard
                    key={employee.id}
                    employee={employee}
                    dispatch={dispatch}
                />
            ))}
        </div>
    )
}

export default EmployeeList