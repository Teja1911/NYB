import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";

function ThemeCard() {

    const {

        theme,

        toggleTheme

    } = useContext(ThemeContext);

    return (

        <div className="card">

            <h2>

                Theme Settings

            </h2>

            <p>

                Current Theme : <strong>{theme}</strong>

            </p>

            <button

                onClick={toggleTheme}

            >

                Switch Theme

            </button>

        </div>

    );

}

export default ThemeCard;