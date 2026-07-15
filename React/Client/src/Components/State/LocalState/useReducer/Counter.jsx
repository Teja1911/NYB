import React, { useReducer } from 'react'

const initialState={
    count:0
}
function counterReducer(state,action){
    switch(action.type){
        case "Increase":
            return {count:state.count+1}
            case "Decrease":
                return{count:state.count-1}
                case "Reset":
                    return initialState
                    default:
                        return state
    }
} 
function Counter() {
    const[state,dispatch]=useReducer(counterReducer,initialState)
  return (
    <div className="card">
            <h2>Using Switch Counter Example</h2>
            <hr />
            <h1>{state.count}</h1>
            <div
                style={{
                    display: "flex",
                    gap: "10px",
                    marginTop: "15px"
                }}
            >
                <button
                    onClick={() =>
                        dispatch({
                            type: "Increase"
                        })
                    }
                >Increase</button>
                <button
                    onClick={() =>
                        dispatch({
                            type: "Decrease"
                        })
                    }
                >Decrease</button>
                <button
                    onClick={() =>
                        dispatch({
                            type: "Reset"
                        })
                    }
                >Reset</button>
            </div>
     </div>
  )
}

export default Counter