import React, { useReducer } from 'react'
import { employeeReducer } from './reducer/employeeReducer'
import { initialState } from './reducer/employeeInitialState'
import EmployeeForm from './components/EmployeeForm'
import EmployeeList from './components/EmployeeList'
import EmployeeSearch from './components/EmployeeSearch'
import EmployeeFilter from './components/EmployeeFilter'
import EmployeeStats from './components/EmployeeStats'
import './styles/Employee.css'

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