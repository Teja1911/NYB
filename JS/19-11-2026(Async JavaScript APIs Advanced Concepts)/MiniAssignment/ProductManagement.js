// ========================================
// 1. API CONFIGURATION AND APPLICATION STATE
// ========================================

const API_URL = "https://dummyjson.com/products";

let products = [];
let categories = [];
let isEditing = false;

// ========================================
// 2. DOM ELEMENT REFERENCES
// ========================================

const productForm = document.getElementById("productForm");
const productId = document.getElementById("productId");
const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const productCategory = document.getElementById("productCategory");
const productStock = document.getElementById("productStock");

const productContainer = document.getElementById("productContainer");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortFilter = document.getElementById("sortFilter");
const statusMessage = document.getElementById("statusMessage");

const formTitle = document.getElementById("formTitle");
const submitButton = document.getElementById("submitButton");
const cancelButton = document.getElementById("cancelButton");

// ========================================
// 3. REUSABLE API FUNCTION
// ========================================

async function apiRequest(endpoint, method = "GET", data = null) {
    const options = {
        method,
        headers: {
            "Content-Type": "application/json"
        }
    };

    if (data !== null) {
        options.body = JSON.stringify(data);
    }

    const response = await fetch(`${API_URL}${endpoint}`, options);

    if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
    }

    return response.json();
}

// ========================================
// 4. LOAD PRODUCTS
// ========================================

async function loadProducts() {
    statusMessage.textContent = "Loading products...";
    productContainer.innerHTML = "";

    try {
        const data = await apiRequest("?limit=100");

        if (!data || !Array.isArray(data.products)) {
            throw new Error("Invalid product data received");
        }

        products = data.products;

        await loadCategories();

        renderProducts();
        updateStatistics();

        statusMessage.textContent =
            `${products.length} products loaded successfully.`;

    } catch (error) {
        statusMessage.textContent =
            "Failed to load products: " + error.message;
    }
}

// ========================================
// 5. LOAD CATEGORIES
// ========================================

async function loadCategories() {
    try {
        const data = await apiRequest("/categories");

        categories = data.map(category => {
            return typeof category === "string"
                ? category
                : category.slug;
        });

        categoryFilter.innerHTML =
            '<option value="all">All Categories</option>';

        categories.forEach(category => {
            const option = document.createElement("option");
            option.value = category;
            option.textContent = category;
            categoryFilter.appendChild(option);
        });

    } catch (error) {
        // Category loading is optional; products can still be shown.
        console.error("Category loading failed:", error);
    }
}

// ========================================
// 6. RENDER PRODUCTS
// ========================================

function renderProducts() {
    productContainer.innerHTML = "";

    const searchText = searchInput.value.trim().toLowerCase();
    const selectedCategory = categoryFilter.value;
    const sortValue = sortFilter.value;

    // Search products
    let filteredProducts = products.filter(product => {
        return product.title.toLowerCase().includes(searchText);
    });

    // Filter by category
    if (selectedCategory !== "all") {
        filteredProducts = filteredProducts.filter(product => {
            return product.category === selectedCategory;
        });
    }

    // Sort products
    if (sortValue === "low") {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortValue === "high") {
        filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortValue === "name") {
        filteredProducts.sort((a, b) =>
            a.title.localeCompare(b.title)
        );
    }

    if (filteredProducts.length === 0) {
        statusMessage.textContent = "No matching products found.";
        return;
    }

    statusMessage.textContent =
        `Showing ${filteredProducts.length} products.`;

    filteredProducts.forEach(product => {
        const card = document.createElement("article");
        card.className = "product-card";

        const heading = document.createElement("h3");
        heading.textContent = product.title;

        const price = document.createElement("p");
        price.textContent = `Price: $${product.price}`;

        const category = document.createElement("p");
        category.textContent = `Category: ${product.category}`;

        const stock = document.createElement("p");
        stock.textContent = `Stock: ${product.stock ?? 0}`;

        const actions = document.createElement("div");
        actions.className = "product-actions";

        const editButton = document.createElement("button");
        editButton.className = "edit-button";
        editButton.textContent = "Edit";
        editButton.dataset.id = product.id;

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.textContent = "Delete";
        deleteButton.dataset.id = product.id;

        actions.append(editButton, deleteButton);
        card.append(heading, price, category, stock, actions);

        productContainer.appendChild(card);
    });
}

// ========================================
// 7. UPDATE STATISTICS
// ========================================

function updateStatistics() {
    document.getElementById("totalProducts").textContent =
        products.length;

    const uniqueCategories = new Set(
        products.map(product => product.category)
    );

    document.getElementById("totalCategories").textContent =
        uniqueCategories.size;

    const totalPrice = products.reduce((total, product) => {
        return total + product.price;
    }, 0);

    const average = products.length
        ? totalPrice / products.length
        : 0;

    document.getElementById("averagePrice").textContent =
        `$${average.toFixed(2)}`;
}

// ========================================
// 8. ADD PRODUCT - POST
// ========================================

async function addProduct(productData) {
    statusMessage.textContent = "Adding product...";

    try {
        const result = await apiRequest("/add", "POST", productData);

        // Keep the new product in the local application state.
        products.unshift(result);

        resetForm();
        renderProducts();
        updateStatistics();

        statusMessage.textContent = "Product added successfully.";
    } catch (error) {
        statusMessage.textContent =
            "Unable to add product: " + error.message;
    }
}

// ========================================
// 9. UPDATE PRODUCT - PUT
// ========================================

async function updateProduct(id, productData) {
    statusMessage.textContent = "Updating product...";

    try {
        const result = await apiRequest(`/${id}`, "PUT", productData);

        products = products.map(product => {
            return product.id === id
                ? { ...product, ...result }
                : product;
        });

        resetForm();
        renderProducts();
        updateStatistics();

        statusMessage.textContent = "Product updated successfully.";
    } catch (error) {
        statusMessage.textContent =
            "Unable to update product: " + error.message;
    }
}

// ========================================
// 10. EDIT PRODUCT - LOAD FORM DATA
// ========================================

function editProduct(id) {
    const product = products.find(item => item.id === id);

    if (!product) return;

    productId.value = product.id;
    productName.value = product.title;
    productPrice.value = product.price;
    productCategory.value = product.category;
    productStock.value = product.stock ?? 0;

    isEditing = true;

    formTitle.textContent = "Edit Product";
    submitButton.textContent = "Update Product";

    productForm.scrollIntoView({ behavior: "smooth" });
}

// ========================================
// 11. DELETE PRODUCT - DELETE
// ========================================

async function deleteProduct(id) {
    const confirmed = confirm("Are you sure you want to delete this product?");

    if (!confirmed) return;

    statusMessage.textContent = "Deleting product...";

    try {
        await apiRequest(`/${id}`, "DELETE");

        products = products.filter(product => product.id !== id);

        renderProducts();
        updateStatistics();

        statusMessage.textContent = "Product deleted successfully.";
    } catch (error) {
        statusMessage.textContent =
            "Unable to delete product: " + error.message;
    }
}

// ========================================
// 12. FORM SUBMISSION
// ========================================

productForm.addEventListener("submit", event => {
    event.preventDefault();

    const name = productName.value.trim();
    const price = Number(productPrice.value);
    const category = productCategory.value.trim();
    const stock = Number(productStock.value);

    if (!name || !category || price <= 0 || stock < 0) {
        statusMessage.textContent = "Please enter valid product details.";
        return;
    }

    const productData = {
        title: name,
        price,
        category,
        stock
    };

    if (isEditing) {
        updateProduct(Number(productId.value), productData);
    } else {
        addProduct(productData);
    }
});

// ========================================
// 13. EVENT DELEGATION FOR EDIT AND DELETE
// ========================================

productContainer.addEventListener("click", event => {
    const button = event.target.closest("button");

    if (!button) return;

    const id = Number(button.dataset.id);

    if (button.classList.contains("edit-button")) {
        editProduct(id);
    }

    if (button.classList.contains("delete-button")) {
        deleteProduct(id);
    }
});

// ========================================
// 14. SEARCH, FILTER AND SORT EVENTS
// ========================================

searchInput.addEventListener("input", renderProducts);

categoryFilter.addEventListener("change", renderProducts);

sortFilter.addEventListener("change", renderProducts);

// ========================================
// 15. RESET FORM
// ========================================

function resetForm() {
    productForm.reset();
    productId.value = "";
    isEditing = false;

    formTitle.textContent = "Add New Product";
    submitButton.textContent = "Add Product";
}

cancelButton.addEventListener("click", resetForm);

// ========================================
// 16. REFRESH PRODUCTS
// ========================================

document.getElementById("refreshButton")
    .addEventListener("click", loadProducts);

// ========================================
// 17. INITIAL APPLICATION LOAD
// ========================================

loadProducts()