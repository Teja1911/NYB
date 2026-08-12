import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function ThemeDemo() {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={`theme-demo ${theme}`}>

            <h2>Context API + useContext</h2>

            <p>
                Current Theme: <strong>{theme}</strong>
            </p>

            <button onClick={toggleTheme}>
                Toggle Theme
            </button>

        </div>
    );
}

export default ThemeDemo;