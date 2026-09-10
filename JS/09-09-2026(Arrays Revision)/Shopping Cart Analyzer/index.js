const cart = [
    {
        id: 1,
        name: "Laptop",
        price: 60000,
        quantity: 1,
        category: "Electronics",
        seller: {
            name: "Tech Store",
            location: "Hyderabad"
        }
    },
    {
        id: 2,
        name: "Mouse",
        price: 1200,
        quantity: 2,
        category: "Accessories",
        seller: {
            name: "Computer World",
            location: "Hyderabad"
        }
    },
    {
        id: 3,
        name: "Keyboard",
        price: 2500,
        quantity: 1,
        category: "Accessories",
        seller: {
            name: "Tech Store",
            location: "Bangalore"
        }
    }
]

// --- Your Existing Helper Functions ---

function getProductById(cart, productId){
    return cart.find(product => product.id === productId)
}

function calculateCartTotal(cart) {
    return cart.reduce((total, product) => {
        return total + product.price * product.quantity
    }, 0)
}

function getExpensiveProducts(cart, minimumPrice = 5000){
    return cart.filter(product => product.price >= minimumPrice)
}

function hasOutOfStockProduct(products){
    return products.some(product => product.stock === 0)
}

// Fixed: cart array doesn't have a 'stock' key, so fallback to true if stock is undefined
function allProductsAvailable(products){
    return products.every(product => product.stock === undefined ? true : product.stock > 0)
}

function getCategories(cart) {
    return cart.map(product => product.category)
}

function getUniqueCategories(cart) {
    const categories = getCategories(cart)
    return [...new Set(categories)]
}

function sortProductsByPrice(cart) {
    return [...cart].sort((a, b) => a.price - b.price)
}

function getSellerLocation(product) {
    return product.seller?.location ?? "Location unavailable";
}

function updateProductQuantity(product, newQuantity){
    return {...product, quantity: newQuantity}
}

// --- The Missing Pieces to Generate the Output ---

function calculateTotalQuantity(cart) {
    return cart.reduce((total, product) => total + product.quantity, 0);
}

function printCartSummary(cart) {
    console.log("===== SHOPPING CART =====\n");

    // 1. Loop through products and display details
    cart.forEach(product => {
        console.log(`Product: ${product.name}`);
        console.log(`Price: ₹${product.price}`);
        console.log(`Quantity: ${product.quantity}\n`);
    });

    console.log("--------------------------\n");

    // 2. Display calculated totals
    console.log(`Total Quantity: ${calculateTotalQuantity(cart)}`);
    console.log(`Cart Total: ₹${calculateCartTotal(cart)}\n`);

    // 3. Display expensive product names
    console.log("Expensive Products:");
    const expensive = getExpensiveProducts(cart, 5000);
    expensive.forEach(p => console.log(p.name));
    console.log(""); // Empty line

    // 4. Display unique categories
    console.log("Categories:");
    const uniqueCats = getUniqueCategories(cart);
    uniqueCats.forEach(cat => console.log(cat));
    console.log(""); // Empty line

    // 5. Display seller location (using the first product matching your target string)
    console.log("Seller Location:");
    console.log(getSellerLocation(cart[0])); 
    console.log(""); // Empty line

    // 6. Availability check
    console.log("All Products Available:");
    console.log(allProductsAvailable(cart));
}

// Execute the final output
printCartSummary(cart);