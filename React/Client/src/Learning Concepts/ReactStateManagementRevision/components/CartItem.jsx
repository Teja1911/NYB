import { useDispatch } from "react-redux";

import {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
} from "../redux/cartSlice";

function CartItem({ item }) {

    const dispatch = useDispatch();

    const handleIncrease = () => {

        dispatch(
            increaseQuantity(item.id)
        );

    };

    const handleDecrease = () => {

        dispatch(
            decreaseQuantity(item.id)
        );

    };

    const handleRemove = () => {

        dispatch(
            removeFromCart(item.id)
        );

    };

    return (
        <article className="cart-item">

            <div className="cart-item-details">

                <h3>
                    {item.name}
                </h3>

                <p>
                    Price: ₹{item.price}
                </p>

                <p>
                    Quantity: {item.quantity}
                </p>

            </div>

            <div className="cart-item-actions">

                <button
                    type="button"
                    onClick={handleDecrease}
                    disabled={item.quantity === 1}
                >
                    -
                </button>

                <span>
                    {item.quantity}
                </span>

                <button
                    type="button"
                    onClick={handleIncrease}
                >
                    +
                </button>

                <button
                    type="button"
                    onClick={handleRemove}
                >
                    Remove
                </button>

            </div>

        </article>
    );
}

export default CartItem;