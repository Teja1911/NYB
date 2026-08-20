import ProductCard from "./ProductCard";

function ProductList({
    products,
    onViewDetails
}) {

    console.log("ProductList rendered");

    return (
        <section className="product-list-section">

            <h3>
                Product List
            </h3>

            {products.length === 0 ? (

                <p>
                    No products found.
                </p>

            ) : (

                <div className="product-list">

                    {products.map((product) => (

                        <ProductCard
                            key={product.id}
                            product={product}
                            onViewDetails={onViewDetails}
                        />

                    ))}

                </div>

            )}

        </section>
    );
}

export default ProductList;