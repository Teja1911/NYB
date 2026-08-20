import {
    lazy,
    Suspense,
    useCallback,
    useMemo,
    useState
} from "react";

import products from "../data/products";

import ProductList from "./ProductList";
import Counter from "./Counter";


const ProductDetails = lazy(
    () => import("./ProductDetails")
);


function PerformanceDashboard() {

    const [count, setCount] = useState(0);

    const [searchTerm, setSearchTerm] = useState("");

    const [selectedProduct, setSelectedProduct] =
        useState(null);


    console.log("PerformanceDashboard rendered");


    const handleViewDetails = useCallback((product) => {

        console.log("Opening product details");

        setSelectedProduct(product);

    }, []);


    const handleCloseDetails = useCallback(() => {

        setSelectedProduct(null);

    }, []);


    const filteredProducts = useMemo(() => {

        console.log("Filtering products...");

        return products.filter((product) => {

            return product.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase());

        });

    }, [searchTerm]);


    return (
        <section className="performance-dashboard">

            <h2>
                React Performance Dashboard
            </h2>


            {/* Counter */}

            <div className="counter-section">

                <h3>
                    Counter: {count}
                </h3>

                <button
                    type="button"
                    onClick={() => setCount(count + 1)}
                >
                    Increase Counter
                </button>

            </div>


            {/* Search */}

            <div className="search-section">

                <input
                    type="text"
                    value={searchTerm}
                    onChange={(event) =>
                        setSearchTerm(event.target.value)
                    }
                    placeholder="Search products..."
                />

            </div>


            {/* Counter Component */}

            <Counter
                count={count}
            />


            {/* Product List */}

            <ProductList
                products={filteredProducts}
                onViewDetails={handleViewDetails}
            />


            {/* Lazy Loaded Product Details */}

            {selectedProduct && (

                <Suspense
                    fallback={
                        <div className="loading-details">
                            Loading product details...
                        </div>
                    }
                >

                    <ProductDetails
                        product={selectedProduct}
                        onClose={handleCloseDetails}
                    />

                </Suspense>

            )}

        </section>
    );
}

export default PerformanceDashboard;