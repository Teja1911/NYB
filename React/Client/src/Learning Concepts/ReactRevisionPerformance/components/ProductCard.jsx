import { memo } from "react";

const ProductCard = memo(function ProductCard({
    product,
    onViewDetails
}) {

    console.log(
        `ProductCard ${product.id} rendered`
    );

    return (
        <article className="product-card">

            <h4>
                {product.name}
            </h4>

            <p>
                Price: ₹{product.price}
            </p>

            <p>
                Category: {product.category}
            </p>

            <button
                type="button"
                onClick={() => onViewDetails(product)}
            >
                View Details
            </button>

        </article>
    );
});

export default ProductCard;