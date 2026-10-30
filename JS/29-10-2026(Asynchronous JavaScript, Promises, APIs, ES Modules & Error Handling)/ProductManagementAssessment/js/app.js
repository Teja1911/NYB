// app.js
// Main application logic
// API calls are handled by productService.js.

// 1. IMPORT API SERVICE FUNCTIONS
import {
    loadProducts,
    loadProductDetails,
    addProduct,
    editProduct,
    removeProduct,
    createProductData
} from "./productService.js";

// 2. APPLICATION STATE
let products = [];
let editingProductId = null;

// 3. SELECT HTML ELEMENTS
const productForm = document.getElementById("productForm");
const productTitle = document.getElementById("productTitle");
const productPrice = document.getElementById("productPrice");
const productCategory = document.getElementById("productCategory");
const productDescription = document.getElementById("productDescription");
const productImage = document.getElementById("productImage");
const formHeading = document.getElementById("formHeading");
const submitButton = document.getElementById("submitButton");
const cancelEditButton = document.getElementById("cancelEditButton");
const formMessage = document.getElementById("formMessage");
const refreshButton = document.getElementById("refreshButton");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const statusMessage = document.getElementById("statusMessage");
const productCount = document.getElementById("productCount");
const productList = document.getElementById("productList");
const productDetails = document.getElementById("productDetails");
const detailsContent = document.getElementById("detailsContent");
const closeDetailsButton = document.getElementById("closeDetailsButton");

// 4. DISPLAY MESSAGES
function showStatus(message, type = "info") {
    statusMessage.textContent = message;
    statusMessage.className = `message ${type}`;
}
function showFormMessage(message, type = "error") {
    formMessage.textContent = message;
    formMessage.className = `message ${type}`;
}

// 5. LOAD PRODUCTS FROM THE API
async function loadProductList() {
    refreshButton.disabled = true;
    showStatus("Loading products...");
    productList.replaceChildren();
    productCount.textContent = "";
    try {
        products = await loadProducts();
        populateCategoryFilter();
        renderProducts();
        showStatus(
            `Successfully loaded ${products.length} products.`,
            "success"
        );
    } catch (error) {
        console.error("Failed to load products:", error);
        products = [];
        renderProducts();
        showStatus(
            `Unable to load products. ${error.message}`,
            "error"
        );
    } finally {
        refreshButton.disabled = false;
    }
}

// 6. POPULATE CATEGORY FILTER
function populateCategoryFilter() {
    const previousCategory = categoryFilter.value;
    const categories = [
        ...new Set(
            products
                .map((product) => product.category)
                .filter(Boolean)
        )
    ];
    categoryFilter.replaceChildren();
    const allCategoriesOption = document.createElement("option");
    allCategoriesOption.value = "all";
    allCategoriesOption.textContent = "All categories";
    categoryFilter.append(allCategoriesOption);
    categories.forEach((category) => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent =
            category.charAt(0).toUpperCase() + category.slice(1);

        categoryFilter.append(option);
    });
    // Keep the selected category if it still exists.
    const categoryStillExists = categories.includes(previousCategory);
    categoryFilter.value = categoryStillExists
        ? previousCategory
        : "all";
}

// 7. SEARCH AND FILTER PRODUCTS
function getFilteredProducts() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const selectedCategory = categoryFilter.value;
    return products.filter((product) => {
        const title = String(product.title || "").toLowerCase();
        const description = String(
            product.description || ""
        ).toLowerCase();
        const matchesSearch =
            title.includes(searchTerm) ||
            description.includes(searchTerm);
        const matchesCategory =
            selectedCategory === "all" ||
            product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });
}

// 8. CREATE A PRODUCT CARD
function createProductCard(product) {
    const card = document.createElement("article");
    card.className = "product-card";
    const image = document.createElement("img");
    image.className = "product-image";
    image.src = product.image || "";
    image.alt = product.title || "Product image";
    image.loading = "lazy";
    image.addEventListener("error", () => {
        image.hidden = true;
    });
    const title = document.createElement("h3");
    title.textContent = product.title || "Untitled product";
    const price = document.createElement("p");
    price.textContent = `Price: $${Number(product.price).toFixed(2)}`;
    const category = document.createElement("p");
    category.textContent = `Category: ${product.category || "Uncategorized"}`;
    const description = document.createElement("p");
    description.textContent = product.description || "No description available.";
    const actions = document.createElement("div");
    actions.className = "product-actions";
    const detailsButton = createActionButton(
        "View Details",
        "details",
        product.id
    );
    const editButton = createActionButton(
        "Edit",
        "edit",
        product.id
    );
    const deleteButton = createActionButton(
        "Delete",
        "delete",
        product.id
    );
    actions.append(detailsButton, editButton, deleteButton);
    card.append(image, title, price, category, description, actions);
    return card;
}

// 9. CREATE ACTION BUTTONS
function createActionButton(label, action, productId) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.dataset.action = action;
    button.dataset.id = productId;
    return button;
}

// 10. RENDER PRODUCTS
function renderProducts() {
    const filteredProducts = getFilteredProducts();
    productList.replaceChildren();
    productCount.textContent =
        `Showing ${filteredProducts.length} of ${products.length} products`;
    if (filteredProducts.length === 0) {
        const emptyMessage = document.createElement("p");
        emptyMessage.className = "empty-message";
        emptyMessage.textContent = products.length === 0
            ? "No products available. Click Refresh Products to try again."
            : "No products match your search or selected category.";
        productList.append(emptyMessage);
        return;
    }
    filteredProducts.forEach((product) => {
        productList.append(createProductCard(product));
    });
}

// 11. RESET FORM
function resetProductForm() {
    productForm.reset();
    editingProductId = null;
    formHeading.textContent = "Add Product";
    submitButton.textContent = "Add Product";
    cancelEditButton.hidden = true;
    formMessage.textContent = "";
    formMessage.className = "message";
}

// 12. ADD OR UPDATE A PRODUCT
async function handleProductSubmit(event) {
    event.preventDefault();
    if (!productForm.reportValidity()) {
        return;
    }
    let productData;
    try {
        productData = createProductData({
            title: productTitle.value,
            price: productPrice.value,
            category: productCategory.value,
            description: productDescription.value,
            image: productImage.value
        });
    } catch (error) {
        showFormMessage(error.message);
        return;
    }
    submitButton.disabled = true;
    cancelEditButton.disabled = true;
    try {
        if (editingProductId !== null) {
            const productId = editingProductId;
            const updatedProduct = await editProduct(
                productId,
                productData
            );
            products = products.map((product) => {
                if (String(product.id) === String(productId)) {
                    return {
                        ...product,
                        ...productData,
                        ...(updatedProduct || {}),
                        id: product.id
                    };
                }
                return product;
            });
            showStatus("Product updated successfully.", "success");
        } else {
            const createdProduct = await addProduct(productData);
            const newProduct = {
                ...productData,
                ...(createdProduct || {})
            };
            products = [newProduct, ...products];
            showStatus("Product added successfully.", "success");
        }
        resetProductForm();
        populateCategoryFilter();
        renderProducts();
    } catch (error) {
        console.error("Saving product failed:", error);
        showFormMessage(error.message);
    } finally {
        submitButton.disabled = false;
        cancelEditButton.disabled = false;
    }
}

// 13. START EDITING A PRODUCT
function handleEditProduct(productId) {
    const selectedProduct = products.find(
        (product) => String(product.id) === String(productId)
    );
    if (!selectedProduct) {
        showStatus("Product not found.", "error");
        return;
    }
    editingProductId = selectedProduct.id;
    productTitle.value = selectedProduct.title || "";
    productPrice.value = selectedProduct.price ?? "";
    productCategory.value = selectedProduct.category || "";
    productDescription.value = selectedProduct.description || "";
    productImage.value = selectedProduct.image || "";
    formHeading.textContent = "Edit Product";
    submitButton.textContent = "Save Changes";
    cancelEditButton.hidden = false;
    formMessage.textContent = "";
    productForm.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// 14. DELETE A PRODUCT
async function handleDeleteProduct(productId) {
    const confirmed = window.confirm(
        "Are you sure you want to delete this product?"
    );
    if (!confirmed) {
        return;
    }
    try {
        await removeProduct(productId);
        products = products.filter(
            (product) => String(product.id) !== String(productId)
        );
        if (String(editingProductId) === String(productId)) {
            resetProductForm();
        }
        renderProducts();
        showStatus("Product deleted successfully.", "success");
    } catch (error) {
        console.error("Deleting product failed:", error);
        showStatus(
            `Unable to delete product. ${error.message}`,
            "error"
        );
    }
}

// 15. VIEW PRODUCT DETAILS
async function handleViewProductDetails(productId) {
    productDetails.hidden = false;
    detailsContent.textContent = "Loading product details...";
    productDetails.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
    try {
        const details = await loadProductDetails(productId);
        const title = document.createElement("h3");
        title.textContent = details.title || "Untitled product";
        const image = document.createElement("img");
        image.src = details.image || "";
        image.alt = details.title || "Product image";
        image.className = "product-image";
        image.addEventListener("error", () => {
            image.hidden = true;
        });
        const price = document.createElement("p");
        price.textContent = `Price: $${Number(details.price).toFixed(2)}`;
        const category = document.createElement("p");
        category.textContent = `Category: ${details.category || "Uncategorized"}`;
        const description = document.createElement("p");
        description.textContent =
            details.description || "No description available.";
        detailsContent.replaceChildren(
            title,
            image,
            price,
            category,
            description
        );
        showStatus("Product details loaded.", "success");
    } catch (error) {
        console.error("Loading product details failed:", error);
        detailsContent.textContent =
            `Unable to load product details: ${error.message}`;
    }
}

// 16. EVENT DELEGATION FOR PRODUCT ACTIONS
productList.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");
    if (!button || !productList.contains(button)) {
        return;
    }
    const action = button.dataset.action;
    const productId = button.dataset.id;
    if (action === "details") {
        handleViewProductDetails(productId);
    } else if (action === "edit") {
        handleEditProduct(productId);
    } else if (action === "delete") {
        handleDeleteProduct(productId);
    }
});

// 17. REGISTER EVENT LISTENERS
productForm.addEventListener("submit", handleProductSubmit);
refreshButton.addEventListener("click", loadProductList);
searchInput.addEventListener("input", renderProducts);
categoryFilter.addEventListener("change", renderProducts);
cancelEditButton.addEventListener("click", resetProductForm);
closeDetailsButton.addEventListener("click", () => {
    productDetails.hidden = true;
    detailsContent.replaceChildren();
});

// 18. START THE APPLICATION
loadProductList();
