import React, { useReducer } from 'react'

const initialState={
    count:0
}

    const actions = {
    INCREMENT: (state) => ({
        ...state,
        count: state.count + 1
    }),
    DECREMENT: (state) => ({
        ...state,
        count: state.count - 1
    }),
    RESET: () => ({
        count: 0
    })

};
function advanceReducer(state,action){
    return actions[action.type]?actions[action.type](state,action):state
}

function AdvanceReducer() {
    const [state,dispatch]=useReducer(advanceReducer,initialState)
  return (
     <div className="card">
            <h2>Using Action Map Counter Example</h2>
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
                            type: "INCREMENT"
                        })
                    }
                >Increase</button>
                <button
                    onClick={() =>
                        dispatch({
                            type: "DECREMENT"
                        })
                    }
                >Decrease</button>
                <button
                    onClick={() =>
                        dispatch({
                            type: "RESET"
                        })
                    }
                >Reset</button>
            </div>
     </div>
  )
}

export default AdvanceReducer