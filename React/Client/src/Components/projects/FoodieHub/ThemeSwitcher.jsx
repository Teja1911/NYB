import { useContext } from "react";
import { AppContext } from "./AppContext";

function ThemeSwitcher() {
    const {theme,toggleTheme} = useContext(AppContext)
    return (
      <button onClick={toggleTheme}>Switch To{theme === "light"?"Dark" :"Light" }Theme</button>
    )
}

export default ThemeSwitcher