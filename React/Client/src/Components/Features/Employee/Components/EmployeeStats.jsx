import React from 'react'

function EmployeeStats({employees}) {
    const totalEmployees = employees.length;
    const frontendCount = employees.filter(employee => employee.department === "IT").length;
    const backendCount = employees.filter(employee => employee.department === "Finance").length;
    const qaCount = employees.filter(employee => employee.department === "Support").length;
    const hrCount = employees.filter(employee => employee.department === "HR").length;
    const totalSalary = employees.reduce((sum, employee) => sum + Number(employee.salary || 0),0);
    const averageSalary =totalEmployees === 0 ? 0: Math.round(totalSalary / totalEmployees);
    const highestSalary = totalEmployees === 0 ? 0 : Math.max(
                ...employees.map(
                employee => Number(employee.salary)
                )
              );
  return (
    <div className="stats-grid">
            <div className="stat-card">
                <h3>Total Employees</h3>
                <h1>{totalEmployees}</h1>
            </div>
            <div className="stat-card">
                <h3>IT</h3>
                <h1>{frontendCount}</h1>
            </div>
            <div className="stat-card">
                <h3>Finance</h3>
                <h1>{backendCount}</h1>
            </div>
            <div className="stat-card">
                <h3>Support</h3>
                <h1>{qaCount}</h1>
            </div>
            <div className="stat-card">
                <h3>HR</h3>
                <h1>{hrCount}</h1>
            </div>
            <div className="stat-card">
                <h3>Average Salary</h3>
                <h1>₹{averageSalary}</h1>
            </div>
            <div className="stat-card">
                <h3>Highest Salary</h3>
                <h1>₹{highestSalary}</h1>
            </div>
    </div>
  )
}

export default EmployeeStats