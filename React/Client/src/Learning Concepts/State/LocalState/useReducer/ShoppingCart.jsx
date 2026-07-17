import React, { useReducer } from 'react'

const initialState={
    items:0,
    total:0
}
const actions = {
    ADD_ITEM: (state) => ({
        ...state,
        items: state.items + 1,
        total: state.total + 500
    }),
    REMOVE_ITEM: (state) => {
        if (state.items === 0)
            return state;
        return {
            ...state,
            items: state.items - 1,
            total: state.total - 500
        };
    },
    CLEAR_CART: () => initialState

};
function cartReducer(state,action){
    return actions[action.type]?actions[action.type](state,action):state
}
function ShoppingCart() {
    const[state,dispatch]=useReducer(cartReducer,initialState)
  return (
    <div className="card">
            <h2>Shopping Cart</h2>
            <hr />
            <h3>Total Items : {state.items}</h3>
            <h3>Total Amount : ₹ {state.total}</h3>
            <div
                style={{
                    display: "flex",
                    gap: "10px",
                    marginTop: "20px"
                }}
            >
                <button onClick={() =>dispatch({type: "ADD_ITEM"})}>Add Item</button>
                <button onClick={() =>dispatch({type: "REMOVE_ITEM"})}>Remove Item</button>
                <button onClick={() =>dispatch({type: "CLEAR_CART"})}>Clear Cart</button>
            </div>
    </div>
  )
}

export default ShoppingCart