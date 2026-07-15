import React, { useReducer } from 'react'

const initialState={
    name: "",
    role: "",
    salary: ""
}
const actions = {
    UPDATE_NAME: (state, action) => ({
        ...state,
        name: action.payload
    }),
    UPDATE_ROLE: (state, action) => ({
        ...state,
        role: action.payload
    }),
    UPDATE_SALARY: (state, action) => ({
        ...state,
        salary: action.payload
    }),
    RESET: () => initialState
}
function employeeReducer(state,action){
    return actions[action.type]?actions[action.type](state,action):state
}
function EmployeeForm() {
    const[state,dispatch]=useReducer(employeeReducer,initialState)
  return (
    <div className="card">
            <h2>Employee Form (useReducer)</h2>
            <hr />
            <br />
            <input
                type="text"
                placeholder="Employee Name"
                value={state.name}
                onChange={(e) =>
                    dispatch({
                        type: "UPDATE_NAME",
                        payload: e.target.value
                    })
                }
            />
            <br /><br />
            <input
                type="text"
                placeholder="Employee Role"
                value={state.role}
                onChange={(e) =>
                    dispatch({
                        type: "UPDATE_ROLE",
                        payload: e.target.value
                    })
                }
            />
            <br /><br />
            <input
                type="number"
                placeholder="Salary"
                value={state.salary}
                onChange={(e) =>
                    dispatch({
                        type: "UPDATE_SALARY",
                        payload: e.target.value
                    })
                }
            />
            <br /><br />
            <button
                onClick={() =>
                    dispatch({
                        type: "RESET"
                    })
                }
            >Reset Form</button>
            <hr />
            <h3>Employee Details</h3>
            <p><strong>Name :</strong>{state.name}</p>
            <p><strong>Role :</strong>{state.role}</p><p>
            <strong>Salary :</strong>₹ {state.salary}</p>
     </div>
  )
}

export default EmployeeForm