import { createContext, useState } from "react"

export const AppContext = createContext()
function AppProvider({ children }) {
    const [theme, setTheme] = useState("light")
    const [cartCount, setCartCount] = useState(0)
    const [user] = useState({
        name: "Teja",
        age: 22,
        city: "Hyderabad"
    })
    function toggleTheme() {
        setTheme((prev) => prev === "light" ? "dark" : "light")
    }
    return (
        <AppContext.Provider
            value={{
                theme,
                toggleTheme,
                cartCount,
                setCartCount,
                user
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;