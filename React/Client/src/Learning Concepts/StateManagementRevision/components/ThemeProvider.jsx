import { useState } from "react";
import ThemeContext from "../context/ThemeContext";

function ThemeProvider({ children }) {

    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((currentTheme) =>
            currentTheme === "light" ? "dark" : "light"
        );
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;