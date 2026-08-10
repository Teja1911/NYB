import { useState } from 'react'
import Employee from './Employee'
import TaskList from './TaskList'
import employees from '../data/employees'

function EmployeeDashboard() {
    const [isAvailable,setIsAvailable]=useState(true)
  
    const handleStatusChang=()=>{
        setIsAvailable(!isAvailable)
    }
  return (
    <div className='employee-dashboard'>
        <h2>Employee Dashboard</h2>
        {
            employees.map((employee)=>(
                <div key={employee.id}>
                    <Employee name={employee.name} department={employee.department}/>
                    <TaskList tasks={employee.tasks}/>
                    <p className={isAvailable?"is-Available":"is-NotAvailable"}>
                        Status:{" "} 
                        {isAvailable ?"Available":"Not Available"}
                    </p>
                    <hr />
                </div>
            ))
        }
        <button onClick={handleStatusChang} className='status-button'>Change Status</button>
    </div>
  )
}

export default EmployeeDashboard