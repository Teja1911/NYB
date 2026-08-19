import { useDispatch, useSelector } from "react-redux";

import { clearCart } from "../redux/cartSlice";

import CartItem from "./CartItem";

function Cart() {

    const dispatch = useDispatch();

    const cartItems = useSelector(
        (state) => state.cart.items
    );

    const totalItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const totalPrice = cartItems.reduce(
        (total, item) =>
            total + item.price * item.quantity,
        0
    );

    const handleClearCart = () => {

        dispatch(clearCart());

    };

    return (
        <section className="cart-section">

            <div className="cart-header">

                <h2>
                    Shopping Cart
                </h2>

                {cartItems.length > 0 && (

                    <button
                        type="button"
                        className="clear-cart-button"
                        onClick={handleClearCart}
                    >
                        Clear Cart
                    </button>

                )}

            </div>

            <div className="cart-summary">

                <p>
                    Total Items: <strong>{totalItems}</strong>
                </p>

                <p>
                    Total Price: <strong>₹{totalPrice}</strong>
                </p>

            </div>

            {cartItems.length === 0 ? (

                <p className="empty-cart">
                    Your cart is empty.
                </p>

            ) : (

                <div className="cart-list">

                    {cartItems.map((item) => (

                        <CartItem
                            key={item.id}
                            item={item}
                        />

                    ))}

                </div>

            )}

        </section>
    );
}

export default Cart;