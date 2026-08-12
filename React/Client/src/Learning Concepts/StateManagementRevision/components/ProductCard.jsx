
import {useDispatch} from "react-redux"
import { addItem } from '../features/cart/cartSlice'
function ProductCard({product}) {
    const dispatch=useDispatch()
    const handleAddToCart=()=>{
        dispatch(addItem(product))
    }
  return (
    <div className="product-card">
        <h3>{product.name}</h3>
        <p>Category : {product.category}</p>
        <p>₹{product.price.toLocaleString("en-IN")}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  )
}

export default ProductCard