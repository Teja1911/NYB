import { useDispatch, useSelector } from "react-redux"
import {removeItem,increaseQuantity,decreaseQuantity,clearCart} from "../features/cart/cartSlice"
function Cart() {
    const dispatch=useDispatch()
    const cartItems=useSelector(
        (state)=>state.cart.items
    )
    const totalAmount=cartItems.reduce(
        (total,item)=>total+item.price*item.quantity,0
    )
  return (
    <div className="cart">
        <div className="cart-header">
            <h2>Shopping Cart</h2>
            <span>Items: {cartItems.length}</span>
        </div>
        { cartItems.length === 0 ? (
            <p className="empty-cart">Your cart is empty </p>
        ):(
            <>
                <div className="cart-items">
                    {cartItems.map((item)=>(
                        <div className="cart-item" key={item.id}>
                            <div>
                                <h3>{item.name}</h3>
                                <p>₹{item.price.toLocaleString("en-IN")}</p>
                            </div>
                            <div className="quality-controls">
                                <button onClick={()=>dispatch(decreaseQuantity(item.id))}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={()=>dispatch(increaseQuantity(item.id))}>+</button>
                                </div>
                                    <p>₹{(
                                        item.price * item.quantity
                                        ).toLocaleString("en-IN")}
                                    </p>
                                    <button onClick={() =>dispatch(removeItem(item.id))}>Remove</button>
                        </div> 
                    ))}
                </div>
                <div className="cart-footer">
                        <h3>Total: ₹{totalAmount.toLocaleString("en-IN")}</h3>
                        <button onClick={() =>dispatch(clearCart())}>Clear Cart</button>
                </div>
            </>
        )

        }
    </div>
  )
}

export default Cart