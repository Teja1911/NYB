import { useReducer } from 'react'
import { countReducer, initialState } from '../reducers/counterReducer'

function ReducerDemo() {
    const [state,dispatch]=useReducer(countReducer,initialState)
  return (
    <div className='reducer-demo'>
        <h2>useReducer Demo</h2>
        <p>Task Count: <strong>{state.count}</strong></p>
        <div className='reducer-buttons'>
            <button onClick={()=>dispatch({type:"ADD"})}>Add Task</button>
            <button onClick={()=>dispatch({type:"REMOVE"})}>Remove Task</button>
            <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>
        </div>
    </div>
  )
}

export default ReducerDemo