import { useContext, useState } from "react";
import { AppContext } from "./AppContext";

function ProductCard({ name, price}){
    const [quantity,setQuantity] = useState(1);
    const {setCartCount}= useContext(AppContext)
    function increase() {
        setQuantity((prev) => prev + 1)
    }
    function decrease() {
      setQuantity((prev) => prev > 1 ? prev - 1 : 1)
    }
    function addCart() {
      setCartCount((prev) =>prev + quantity)
    }
    return (
        <div style={{
            border: "1px solid gray",
            padding: "20px",
            marginBottom: "20px"}}>
            <h2>{name}</h2>
            <p>₹ {price}</p>
            <p>Quantity : {quantity}</p>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
            <button onClick={addCart}> Add To Cart</button>
        </div>
    )
}

export default ProductCard;