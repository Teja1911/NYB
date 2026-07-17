import React, { useReducer } from 'react'

function UseReducer() {
    const initialState = { count: 0 }
    function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}
const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
        <h2>{state.count}</h2>
        <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
    </div>
  )
}

export default UseReducer