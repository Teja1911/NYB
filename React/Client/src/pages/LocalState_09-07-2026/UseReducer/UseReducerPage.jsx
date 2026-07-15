import React from 'react'
import Counter from '../../../Components/State/LocalState/useReducer/Counter'
import EmployeeForm from '../../../Components/State/LocalState/useReducer/EmployeeForm'
import ShoppingCart from '../../../Components/State/LocalState/useReducer/ShoppingCart'
import Comparison from '../../../Components/State/LocalState/useReducer/Comparison'
import ReducerInfo from '../../../Components/State/LocalState/useReducer/ReducerInfo'
import AdvanceReducer from '../../../Components/State/LocalState/useReducer/AdvanceReducer'

function UseReducerPage() {
  return (
    <div className="reducer-container">
       <h1 className="page-title">useReducer Hook Demonstration</h1>
       <Counter/>
       <AdvanceReducer/>
       <EmployeeForm/>
       <ShoppingCart/>
       <Comparison/>
       <ReducerInfo/>
    </div>
  )
}

export default UseReducerPage