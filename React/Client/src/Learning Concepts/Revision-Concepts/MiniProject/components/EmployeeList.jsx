import EmployeeCard from "./EmployeeCard"

function EmployeeList({ employees }) {
  if (employees.length === 0) {
    return <h2>No Employees Found</h2>
  }
  return (
    <div className="employee-list">
      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
        />
      ))}
    </div>
  )
}

export default EmployeeList