import ProductCard from "./ProductCard";

const products = [
    {
        id: 1,
        name: "Laptop",
        price: 60000,
        category: "Electronics",
    },
    {
        id: 2,
        name: "Headphones",
        price: 3000,
        category: "Audio",
    },
    {
        id: 3,
        name: "Keyboard",
        price: 1500,
        category: "Accessories",
    },
    {
        id: 4,
        name: "Mouse",
        price: 800,
        category: "Accessories",
    },
];

function ProductList() {

    return (
        <section className="product-list-section">

            <h2>
                Products
            </h2>

            <div className="product-list">

                {products.map((product) => (

                    <ProductCard
                        key={product.id}
                        product={product}
                    />

                ))}

            </div>

        </section>
    );
}

export default ProductList;