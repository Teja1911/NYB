import React, { useReducer } from 'react'
import { employeeReducer } from './Reducer/employeeReducer'
import { initialState } from './Reducer/employeeInitialState'
import EmployeeForm from './Components/EmployeeForm'
import EmployeeList from './Components/EmployeeList'
import EmployeeSearch from './Components/EmployeeSearch'
import EmployeeFilter from './Components/EmployeeFilter'
import EmployeeStats from './Components/EmployeeStats'
import './Employee.css'

function EmployeePage() {
    const[state,dispatch]=useReducer(employeeReducer,initialState)
    console.log(state.employees);
  return (
    <div className="employee-page">
        <EmployeeStats employees={state.employees}/>
        <EmployeeForm state={state} dispatch={dispatch} />
        <EmployeeSearch state={state} dispatch={dispatch}/>
        <EmployeeFilter state={state} dispatch={dispatch}/>
        <EmployeeList employees={state.employees} dispatch={dispatch} search={state.search} filters={state.filters}/>
    </div>
  )
}

export default EmployeePage