import React from 'react'
import Counter from '../../../Learning Concepts/State/LocalState/useReducer/Counter'
import EmployeeForm from '../../../Learning Concepts/State/LocalState/useReducer/EmployeeForm'
import ShoppingCart from '../../../Learning Concepts/State/LocalState/useReducer/ShoppingCart'
import Comparison from '../../../Learning Concepts/State/LocalState/useReducer/Comparison'
import ReducerInfo from '../../../Learning Concepts/State/LocalState/useReducer/ReducerInfo'
import AdvanceReducer from '../../../Learning Concepts/State/LocalState/useReducer/AdvanceReducer'

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