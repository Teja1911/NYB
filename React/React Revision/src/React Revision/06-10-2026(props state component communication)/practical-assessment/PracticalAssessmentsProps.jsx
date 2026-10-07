import { useState } from "react"
import "./Style.css"

function ProductForm({ onAdd, editingProduct, onUpdate, onCancel }) {
  const [name, setName] = useState(editingProduct?.name || "")
  const [price, setPrice] = useState(editingProduct?.price || "")
  function handleSubmit(e) {
    e.preventDefault()
    if (!name || !price) {
      alert("Please enter product name and price")
      return
    }
    const product = {
      id: editingProduct?.id || Date.now(),
      name,
      price: Number(price),
    }
    if (editingProduct) {
      onUpdate(product)
    } else {
      onAdd(product)
    }
    setName("")
    setPrice("")
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>{editingProduct ? "Edit Product" : "Add Product"}</h2>

      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button type="submit">
        {editingProduct ? "Update" : "Add Product"}
      </button>

      {editingProduct && (
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      )}
    </form>
  )
}

function ProductDetails({ product }) {
  if (!product) {
    return <p className="empty">Select a product to view details.</p>
  }

  return (
    <div className="details">
      <h2>Product Details</h2>
      <p><strong>ID:</strong> {product.id}</p>
      <p><strong>Name:</strong> {product.name}</p>
      <p><strong>Price:</strong> ₹{product.price}</p>
    </div>
  )
}

function ProductList({
  products,
  onSelect,
  onEdit,
  onDelete,
}) {
  return (
    <div>
      <h2>Product List</h2>

      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        products.map((product) => (
          <div className="product" key={product.id}>
            <div>
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
            </div>

            <div>
              <button onClick={() => onSelect(product)}>
                View
              </button>

              <button onClick={() => onEdit(product)}>
                Edit
              </button>

              <button onClick={() => onDelete(product.id)}>
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

function PracticalAssessmentProps() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Laptop",
      price: 55000,
    },
    {
      id: 2,
      name: "Keyboard",
      price: 1500,
    },
  ])
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [editingProduct, setEditingProduct] = useState(null)
  function addProduct(product) {
    setProducts([...products, product])
  }
  function updateProduct(updatedProduct) {
    setProducts(
      products.map((product) =>
        product.id === updatedProduct.id
          ? updatedProduct
          : product
      )
    )
    setEditingProduct(null)
    setSelectedProduct(updatedProduct)
  }
  function deleteProduct(id) {
    setProducts(products.filter((product) => product.id !== id))
    if (selectedProduct?.id === id) {
      setSelectedProduct(null)
    }
  }
  return (
    <div className="container">
      <h1>Product Management</h1>

      <ProductForm
        onAdd={addProduct}
        editingProduct={editingProduct}
        onUpdate={updateProduct}
        onCancel={() => setEditingProduct(null)}
      />

      <ProductList
        products={products}
        onSelect={setSelectedProduct}
        onEdit={setEditingProduct}
        onDelete={deleteProduct}
      />

      <ProductDetails product={selectedProduct} />
    </div>
  )
}

export default PracticalAssessmentProps