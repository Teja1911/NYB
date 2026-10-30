import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from "./api.js";

export async function loadProducts() {
    const products = await getProducts();

    if (!Array.isArray(products)) {
        throw new Error("The API returned an invalid product list.");
    }

    return products;
}

export async function loadProductDetails(productId) {
    return getProductById(productId);
}

export async function addProduct(productData) {
    return createProduct(productData);
}

export async function editProduct(productId, productData) {
    return updateProduct(productId, productData);
}

export async function removeProduct(productId) {
    return deleteProduct(productId);
}

export function createProductData(formValues) {
    const title = formValues.title.trim();
    const description = formValues.description.trim();
    const category = formValues.category;
    const price = Number(formValues.price);
    const image = formValues.image.trim();

    if (!title || !description || !category || !image) {
        throw new Error("Please complete all product fields.");
    }

    if (!Number.isFinite(price) || price <= 0) {
        throw new Error("Price must be a number greater than zero.");
    }

    return {
        title,
        description,
        category,
        price,
        image
    };
}