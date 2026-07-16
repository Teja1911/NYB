import React from 'react'
import { EMPLOYEE_ACTIONS } from '../Reducer/Actions/employeeActionTypes'
function EmployeeFilter({state,dispatch}) {
    
  return (
    <div className="filter-container">
            <select
                value={state.filters.department}
                onChange={(e)=>
                    dispatch({
                        type:EMPLOYEE_ACTIONS.UPDATE_FILTER,
                        field:"department",
                        value:e.target.value
                    })
                }
            >
                <option value="All">All Departments</option>
                <option value="IT">IT</option>
                <option value="Finance">Finance</option>
                <option value="Support">Support</option>
                <option value="HR">HR</option>
            </select>
            <select
                value={state.filters.role}
                onChange={(e)=>
                    dispatch({
                        type:EMPLOYEE_ACTIONS.UPDATE_FILTER,
                        field:"role",
                        value:e.target.value
                    })
                }
            >
                <option value="All">All Roles</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="QA Engineer">QA Engineer</option>
                <option value="HR Manager">HR Manager</option>
            </select>
    </div>
  )
}

export default EmployeeFilter