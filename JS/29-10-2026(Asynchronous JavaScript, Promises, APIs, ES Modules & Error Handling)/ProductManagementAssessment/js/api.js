import { API_BASE_URL } from "./config.js";

async function request(endpoint, options = {}) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers: {
            ...(options.headers || {}),
            Accept: "application/json"
        }
    });

    if (!response.ok) {
        throw new Error(`API request failed: HTTP ${response.status}`);
    }

    // DELETE endpoints may return 204 No Content.
    if (response.status === 204) {
        return null;
    }

    return response.json();
}

export function getProducts() {
    return request("/products");
}

export function getProductById(productId) {
    return request(`/products/${productId}`);
}

export function createProduct(productData) {
    return request("/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(productData)
    });
}

export function updateProduct(productId, productData) {
    return request(`/products/${productId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(productData)
    });
}

export function deleteProduct(productId) {
    return request(`/products/${productId}`, {
        method: "DELETE"
    });
}