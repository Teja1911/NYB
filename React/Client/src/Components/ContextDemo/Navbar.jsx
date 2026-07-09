import { useContext } from "react";
import { AppContext } from "./AppContext";

function Navbar() {
    const { theme, cartCount, user} = useContext(AppContext)
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "20px",
                background: theme === "light" ? "#eeeeee" : "#222",
                color:theme === "light" ? "black"  : "white"
            }}>
            <h2>FoodieHub</h2>
            <h3>Hello {user.name}</h3>
            <h3>Cart : {cartCount}</h3>
        </div>
    )
}

export default Navbar