import { useDispatch } from "react-redux";

import { addToCart } from "../redux/cartSlice";

function ProductCard({ product }) {

    const dispatch = useDispatch();

    const handleAddToCart = () => {

        dispatch(addToCart(product));

    };

    return (
        <article className="product-card">

            <h3>
                {product.name}
            </h3>

            <p>
                Category: {product.category}
            </p>

            <p>
                Price: ₹{product.price}
            </p>

            <button
                type="button"
                onClick={handleAddToCart}
            >
                Add to Cart
            </button>

        </article>
    );
}

export default ProductCard;