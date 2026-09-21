
// API CONFIGURATION


const API_URL = "https://jsonplaceholder.typicode.com/posts";



// APPLICATION STATE


let productList = [];

let currentSearch = "";

let currentFilter = "all";



// DOM ELEMENTS


const productContainer =
    document.querySelector("#productContainer");

const searchInput =
    document.querySelector("#searchInput");

const filterSelect =
    document.querySelector("#filterSelect");

const productForm =
    document.querySelector("#productForm");

const productTitle =
    document.querySelector("#productTitle");

const productPrice =
    document.querySelector("#productPrice");

const statusMessage =
    document.querySelector("#statusMessage");

const productCount =
    document.querySelector("#productCount");

const refreshButton =
    document.querySelector("#refreshButton");



// LOCAL STORAGE FUNCTIONS


function saveProducts() {

    localStorage.setItem(
        "productList",
        JSON.stringify(productList)
    );
}


function getStoredProducts() {

    const storedProducts =
        localStorage.getItem("productList");

    return storedProducts
        ? JSON.parse(storedProducts)
        : [];
}



// STATUS FUNCTION


function showStatus(message) {

    statusMessage.textContent = message;
}



// LOADING STATE


function showLoading() {

    productContainer.innerHTML = `
        <div class="empty-state">
            <h3>Loading products...</h3>
            <p>Please wait.</p>
        </div>
    `;

    showStatus("Fetching data from API...");
}

// ERROR STATE


function showError(message) {

    productContainer.innerHTML = `
        <div class="error-state">
            <h3>Something went wrong</h3>
            <p>${message}</p>
        </div>
    `;

    showStatus("");
}



// EMPTY STATE


function showEmptyState() {

    productContainer.innerHTML = `
        <div class="empty-state">
            <h3>No products found</h3>
            <p>Try another search or filter.</p>
        </div>
    `;
}



// API GET


async function fetchProducts() {

    try {

        showLoading();


        const response =
            await fetch(API_URL);


        if (!response.ok) {

            throw new Error(
                `HTTP Error: ${response.status}`
            );
        }


        const apiProducts =
            await response.json();


        // Convert API objects into our application objects

        const formattedProducts =
            apiProducts.slice(0, 20).map(
                (item) => {

                    return {
                        id: item.id,

                        title: item.title,

                        price: (item.id * 5) + 10
                    };
                }
            );


        const localProducts =
            getStoredProducts();


        // Keep locally added products

        productList = [
            ...formattedProducts,
            ...localProducts
        ];


        saveProducts();

        renderProducts();


        showStatus(
            "Products loaded successfully."
        );

    } catch (error) {

        console.error(error);

        // If API fails, try local data

        const localProducts =
            getStoredProducts();


        if (localProducts.length > 0) {

            productList = localProducts;

            renderProducts();

            showStatus(
                "API failed. Showing saved local products."
            );

        } else {

            showError(
                "Unable to load products."
            );
        }
    }
}

// SEARCH


function searchProducts(products) {

    return products.filter(
        (product) => {

            return product.title
                .toLowerCase()
                .includes(
                    currentSearch.toLowerCase()
                );
        }
    );
}



// FILTER


function filterProducts(products) {

    if (currentFilter === "low") {

        return products.filter(
            (product) => product.price < 50
        );
    }


    if (currentFilter === "high") {

        return products.filter(
            (product) => product.price >= 50
        );
    }


    return products;
}



// COMBINED SEARCH + FILTER


function getVisibleProducts() {

    const searchedProducts =
        searchProducts(productList);


    const filteredProducts =
        filterProducts(searchedProducts);


    return filteredProducts;
}



// UPDATE PRODUCT COUNT


function updateProductCount(count) {

    productCount.textContent =
        `${count} Product${count !== 1 ? "s" : ""}`;
}

// CREATE PRODUCT CARD
function createProductCard(product) {

    const card =
        document.createElement("div");

    card.className =
        "product-card";


    card.innerHTML = `
        <h3>${product.title}</h3>

        <p>
            Product ID: ${product.id}
        </p>

        <span class="price">
            $${product.price}
        </span>

        <button
            class="delete-button"
            data-id="${product.id}"
        >
            Delete
        </button>
    `
    return card;
}

// DYNAMIC DOM RENDERING
function renderProducts() {

    const visibleProducts =
        getVisibleProducts();


    productContainer.innerHTML = "";


    if (visibleProducts.length === 0) {

        showEmptyState();

        updateProductCount(0);

        return;
    }


    const productFragment =
        document.createDocumentFragment();


    visibleProducts.forEach(
        (product) => {

            const card =
                createProductCard(product);


            productFragment.appendChild(card);
        }
    );


    productContainer.appendChild(
        productFragment
    );


    updateProductCount(
        visibleProducts.length
    );
}

// POST API
async function createProduct(title, price) {

    try {

        showStatus(
            "Adding product..."
        )
        const response =
            await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type":
                        "application/json"
                },
                body: JSON.stringify({

                    title: title,

                    price: price
                })
            })
        if (!response.ok) {
            throw new Error(
                `HTTP Error: ${response.status}`
            )
        }
        const createdProduct =
            await response.json()
        // Create local object
        const newProduct = {
            id:
                Date.now(),
            title:
                createdProduct.title,
            price:
                Number(createdProduct.price)
        }
        productList.unshift(
            newProduct
        )
        saveProducts()
        renderProducts()
        showStatus(
            "Product added successfully."
        )
        productForm.reset()
    } catch (error) {
        console.error(error)
        showStatus(
            "Failed to add product."
        )
    }
}

async function deleteProduct(productId) {
    try {
        showStatus(
            "Deleting product..."
        )
        const response =
            await fetch(
                `${API_URL}/${productId}`,
                {
                    method: "DELETE"
                }
            )
        if (!response.ok) {
            throw new Error(
                `HTTP Error: ${response.status}`
            )
        }
        productList =
            productList.filter(
                (product) =>
                    product.id !== productId
            )
        saveProducts()
        renderProducts()
        showStatus(
            "Product deleted successfully."
        )
    } catch (error) {
        console.error(error)
        showStatus(
            "Failed to delete product."
        )
    }
}

productForm.addEventListener(
    "submit",
    function (event) {
        event.preventDefault()
        const title =
            productTitle.value.trim()
        const price =
            Number(productPrice.value)
        if (!title || price <= 0) {
            showStatus(
                "Please enter valid product details."
            )
            return
        }
        createProduct(
            title,
            price
        )
    }
)

searchInput.addEventListener(
    "input",
    function (event) {
        currentSearch =
            event.target.value
        renderProducts()
    }
)

filterSelect.addEventListener(
    "change",
    function (event) {
        currentFilter =
            event.target.value
        renderProducts()
    }
)

productContainer.addEventListener(
    "click",
    function (event) {
        if (
            event.target.classList
                .contains("delete-button")
        ) {
            const productId =
                Number(
                    event.target.dataset.id
                )
            deleteProduct(productId)
        }
    }
)

refreshButton.addEventListener(
    "click",
    function () {
        fetchProducts()
    }
)

fetchProducts()