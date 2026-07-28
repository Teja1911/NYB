import {

    createContext,

    useEffect,

    useState

} from "react";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {

    const [theme, setTheme] = useState(() => {

        return localStorage.getItem("theme") || "light";

    });

    useEffect(() => {

        localStorage.setItem(

            "theme",

            theme

        );

    }, [theme]);

    function toggleTheme() {

        setTheme((previousTheme) =>

            previousTheme === "light"

                ? "dark"

                : "light"

        );

    }

    return (

        <ThemeContext.Provider

            value={{

                theme,

                toggleTheme

            }}

        >

            {children}

        </ThemeContext.Provider>

    );

}

export default ThemeProvider;