import React from "react";
import { EMPLOYEE_ACTIONS } from "../Reducer/Actions/employeeActionTypes";
function EmployeeCard({employee,dispatch}){
    return (
        <div className="employee-card">
            <h3>{employee.name}</h3>
            <p>{employee.role}</p>
            <p>{employee.department}</p>
            <p>₹ {employee.salary}</p>
            <p>{employee.email}</p>
            <button onClick={()=>
                    dispatch({
                        type:EMPLOYEE_ACTIONS.DELETE_EMPLOYEE,
                        payload:employee.id
                    })
                }
            > Delete</button>
            <button onClick={()=>
                    dispatch({
                        type:EMPLOYEE_ACTIONS.EDIT_EMPLOYEE,
                        payload:employee
                    })
                }
            >Edit</button>
        </div>
    )
}

export default EmployeeCard