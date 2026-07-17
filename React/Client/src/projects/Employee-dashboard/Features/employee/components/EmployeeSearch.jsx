import React from 'react'
import { EMPLOYEE_ACTIONS } from '../reducer/employeeActionTypes'
function EmployeeSearch({state,dispatch}) {
  return (
     <div className="search-container">
            <input
                type="text"
                placeholder="Search Employee..."
                value={state.search}
                onChange={(e)=>
                    dispatch({
                        type:EMPLOYEE_ACTIONS.UPDATE_SEARCH,
                        payload:e.target.value
                    })
                }
            />
    </div>
  )
}

export default EmployeeSearch