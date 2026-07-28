import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";

function Header() {

    const {

        theme

    } = useContext(ThemeContext);

    return (

        <header className={`header ${theme}`}>

            <h1>

                Employee Management Dashboard

            </h1>

        </header>

    );

}

export default Header;