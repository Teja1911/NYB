import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";

function Footer() {

    const {

        theme

    } = useContext(ThemeContext);

    return (

        <footer className={`footer ${theme}`}>

            © 2026 Employee Dashboard

        </footer>

    );

}

export default Footer;