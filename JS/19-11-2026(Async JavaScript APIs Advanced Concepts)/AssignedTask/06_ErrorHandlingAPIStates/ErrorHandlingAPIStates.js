const statusMessage = document.getElementById("status")
const productList = document.getElementById("productList")
async function loadProducts() {
    statusMessage.textContent = "Loading products..."
    productList.innerHTML = ""
    try {
        const response = await fetch("https://dummyjson.com/products")
        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`)
        }
        const data = await response.json()
        if (!data || !Array.isArray(data.products)) {
            throw new Error("Unexpected API response format")
        }
        if (data.products.length === 0) {
            statusMessage.textContent = "No products found."
            return
        }
        data.products.forEach(product => {
            const li = document.createElement("li")
            li.textContent = `${product.title} - $${product.price}`
            productList.appendChild(li)
        })
        statusMessage.textContent = "Products loaded successfully."
    } catch (error) {
        statusMessage.textContent = "Failed to load products: " + error.message
    }
}
document.getElementById("loadButton")
    .addEventListener("click", loadProducts)