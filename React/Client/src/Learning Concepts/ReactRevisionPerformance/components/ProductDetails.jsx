function ProductDetails({ product, onClose }) {

    console.log("ProductDetails component loaded");

    return (
        <div className="product-details">

            <div className="product-details-header">

                <h3>
                    Product Details
                </h3>

                <button
                    type="button"
                    onClick={onClose}
                >
                    Close
                </button>

            </div>


            <div className="product-details-content">

                <h4>
                    {product.name}
                </h4>

                <p>
                    Price: ₹{product.price}
                </p>

                <p>
                    Category: {product.category}
                </p>

                <p>
                    Product ID: {product.id}
                </p>

            </div>

        </div>
    );
}

export default ProductDetails;