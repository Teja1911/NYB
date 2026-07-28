import ThemeProvider from "./context/ThemeContext";

import AppLayout from "./AppLayout";

import "./css/style.css";

function AdvancedReactMiniProject() {

    return (

        <ThemeProvider>

            <AppLayout />

        </ThemeProvider>

    );

}

export default AdvancedReactMiniProject;