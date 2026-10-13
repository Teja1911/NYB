import {createContext,useContext,useReducer} from "react"
const CartContext=createContext(null)
// Initial State
const initialCart={
    items:[
        {id:1,name:"Keyboard",price:1200,quantity:1},
        {id:2,name:"Mouse",price:600,quantity:2}
    ]
}
// Reducer actions
function cartReducer(state,action){
    switch(action.type){
        case "ADD":
            return{
                items:[...state.items,action.payload]
            }
        case "INCREASE":
            return{
                items:state.items.map((item)=>item.id===action.payload ?{...item,quantity: item.quantity+1}:item)
            }
        case "DECREASE":
            return{
                items: state.items
                .map((item)=>item.id===action.payload ?{...item,quantity: item.quantity-1}:item)
                .filter((item)=>item.quantity>0)
            }
        case "DELETE":
            return{
                items: state.items.filter((item)=>item.id!==action.payload)
            }
        case "RESET":
            return initialCart
        default:
            return state
    }
}
function useCart(){
    const context=useContext(CartContext)
    if(!context) throw new Error ("useCart must be inside CartProvider")
    return context
}
function CartProvider({children}){
    const[state,dispatch]=useReducer(cartReducer,initialCart)
    return(
        <CartContext.Provider value={{state,dispatch}}>
            {children}
        </CartContext.Provider>
    )
}
function CartControls(){
    const {dispatch} = useCart()
    function addHeadphones(){
        dispatch({
            type: "ADD",
            payload:{
                id: Date.now(),
                name: "Headphones",
                price: 1800,
                quantity:1,
            }
        })
    }
    return <button onClick={addHeadphones}>Add Headphones</button>
}
function CartList(){
    const {state,dispatch}=useCart()
    return(
        <section>
            <h3>Shopping Cart</h3>
            {state.items.map((item)=>(
                <p key={item.id}>
                    {item.name} - ₹{item.price} * {item.quantity}{" "}
                    <button onClick={()=>dispatch({type:"INCREASE",payload: item.id})}>+</button>{" "}
                    <button onClick={()=>dispatch({type:"DECREASE",payload: item.id})}>-</button>{" "}
                    <button onClick={()=>dispatch({type:"DELETE",payload: item.id})}>Remove</button>
                </p>
            ))}
            {state.items.length===0 && <p>Your cart is empty.</p>}
        </section>
    )
}
function CartSummary(){
    const {state,dispatch}=useCart()
    const total=state.items.reduce((sum,item)=>sum+item.price*item.quantity,0)
    return(
        <section>
            <h3>Cart Summary</h3>
            <p>Total items: {state.items.reduce((sum,item)=>sum+item.quantity,0)}</p>
            <p>Total Price: ₹{total}</p>
            <button onClick={()=>dispatch({type:"RESET"})}>Clear Cart</button>
        </section>
    )
}
export default function ReducerContextAssignement(){
    return(
        <CartProvider>
            <main>
                <h2>Shopping Cart State Manager</h2>
                <CartControls/>
                <CartList/>
                <CartSummary/>
            </main>
        </CartProvider>
    )
}