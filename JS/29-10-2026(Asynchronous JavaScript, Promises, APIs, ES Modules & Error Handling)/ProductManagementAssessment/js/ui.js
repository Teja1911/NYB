export const elements = {
    productForm: document.getElementById("productForm"),
    productTitle: document.getElementById("productTitle"),
    productPrice: document.getElementById("productPrice"),
    productCategory: document.getElementById("productCategory"),
    productDescription: document.getElementById("productDescription"),
    productImage: document.getElementById("productImage"),

    formHeading: document.getElementById("formHeading"),
    submitButton: document.getElementById("submitButton"),
    cancelEditButton: document.getElementById("cancelEditButton"),
    formMessage: document.getElementById("formMessage"),

    refreshButton: document.getElementById("refreshButton"),
    searchInput: document.getElementById("searchInput"),
    categoryFilter: document.getElementById("categoryFilter"),

    statusMessage: document.getElementById("statusMessage"),
    productCount: document.getElementById("productCount"),
    productList: document.getElementById("productList"),

    productDetails: document.getElementById("productDetails"),
    detailsContent: document.getElementById("detailsContent"),
    closeDetailsButton: document.getElementById("closeDetailsButton")
};

export function showStatus(message, type = "") {
    elements.statusMessage.textContent = message;
    elements.statusMessage.className = `message ${type}`.trim();
}

export function showFormMessage(message, type = "") {
    elements.formMessage.textContent = message;
    elements.formMessage.className = `message ${type}`.trim();
}

export function setLoading(isLoading) {
    elements.refreshButton.disabled = isLoading;
    elements.submitButton.disabled = isLoading;
    elements.searchInput.disabled = isLoading;
    elements.categoryFilter.disabled = isLoading;
}

export function updateFormMode(isEditing) {
    elements.formHeading.textContent = isEditing
        ? "Edit Product"
        : "Add Product";

    elements.submitButton.textContent = isEditing
        ? "Save Changes"
        : "Add Product";

    elements.cancelEditButton.hidden = !isEditing;
}

export function resetForm() {
    elements.productForm.reset();
    elements.productImage.value =
        "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg";

    showFormMessage("");
    updateFormMode(false);
}

export function fillForm(product) {
    elements.productTitle.value = product.title;
    elements.productPrice.value = product.price;
    elements.productCategory.value = product.category;
    elements.productDescription.value = product.description;
    elements.productImage.value = product.image;

    showFormMessage("");
    updateFormMode(true);
}

export function updateCategoryOptions(products) {
    const previousCategory = elements.categoryFilter.value;

    const categories = [
        ...new Set(products.map((product) => product.category))
    ].sort();

    elements.categoryFilter.replaceChildren();

    const allOption = document.createElement("option");
    allOption.value = "all";
    allOption.textContent = "All categories";
    elements.categoryFilter.append(allOption);

    categories.forEach((category) => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        elements.categoryFilter.append(option);
    });

    if (categories.includes(previousCategory)) {
        elements.categoryFilter.value = previousCategory;
    }
}

export function renderProducts(products, onEmptyMessage) {
    elements.productList.replaceChildren();

    elements.productCount.textContent =
        `${products.length} product${products.length === 1 ? "" : "s"} displayed`;

    if (products.length === 0) {
        const emptyMessage = document.createElement("p");
        emptyMessage.className = "empty-state";
        emptyMessage.textContent = onEmptyMessage;

        elements.productList.append(emptyMessage);
        return;
    }

    products.forEach((product) => {
        const card = document.createElement("article");
        card.className = "product-card";

        const image = document.createElement("img");
        image.src = product.image;
        image.alt = product.title;
        image.loading = "lazy";

        image.addEventListener("error", () => {
            image.hidden = true;
        });

        const title = document.createElement("h3");
        title.textContent = product.title;

        const price = document.createElement("p");
        price.className = "product-price";
        price.textContent = `$${Number(product.price).toFixed(2)}`;

        const category = document.createElement("p");
        category.className = "product-category";
        category.textContent = product.category;

        const actions = document.createElement("div");
        actions.className = "card-actions";

        const detailsButton = createActionButton(
            "Details",
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

        deleteButton.classList.add("delete-button");

        actions.append(detailsButton, editButton, deleteButton);

        card.append(image, title, price, category, actions);
        elements.productList.append(card);
    });
}

function createActionButton(label, action, productId) {
    const button = document.createElement("button");

    button.type = "button";
    button.textContent = label;
    button.dataset.action = action;
    button.dataset.id = String(productId);

    return button;
}

export function showProductDetails(product) {
    elements.detailsContent.replaceChildren();

    const title = document.createElement("h3");
    title.textContent = product.title;

    const image = document.createElement("img");
    image.className = "details-image";
    image.src = product.image;
    image.alt = product.title;

    image.addEventListener("error", () => {
        image.hidden = true;
    });

    const price = document.createElement("p");
    price.textContent = `Price: $${Number(product.price).toFixed(2)}`;

    const category = document.createElement("p");
    category.textContent = `Category: ${product.category}`;

    const description = document.createElement("p");
    description.textContent = product.description;

    elements.detailsContent.append(
        title,
        image,
        price,
        category,
        description
    );

    elements.productDetails.hidden = false;
    elements.productDetails.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

export function closeProductDetails() {
    elements.productDetails.hidden = true;
    elements.detailsContent.replaceChildren();
}