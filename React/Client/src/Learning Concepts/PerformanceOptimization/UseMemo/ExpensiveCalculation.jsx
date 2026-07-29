import React, { useMemo, useState } from 'react'

function ExpensiveCalculation() {
    const[count,setCount]=useState(0)
    const[employees,setEmployees]=useState([
        { id: 1, name: "John", salary: 45000 },
        { id: 2, name: "Steve", salary: 52000 },
        { id: 3, name: "Robert", salary: 61000 }
    ])
    const totalSalary=useMemo(()=>{
        console.log("Calculating Total Salary...")
        return employees.reduce((total,employee)=>{
            return total+employee.salary
        })
    },[employees])
    function increaseSalary(){
        setEmployees(previousEmployees =>
            previousEmployees.map(employee =>
                employee.id === 1 
                ? {...employee,salary : employee.salary+5000}
                : employee
            )
        )
    }
  return (
    <div>
        <h1>UseMemo Example</h1>
        <h2>Count : {count}</h2>
        <button onClick={()=>setCount(count+1)}>Increase Count</button>
        <hr />
        <h2>Employees</h2>
        {
            employees.map((employee)=>(
                <div key={employee.id}>
                    <p>
                        {employee.name} - £{employee.salary}
                    </p>
                </div>
            ))
        }
        <button onClick={increaseSalary}>Increase John's Salary</button>
        <hr />
        <h2>Total Salary : £{totalSalary}</h2>
    </div>
  )
}

export default ExpensiveCalculation