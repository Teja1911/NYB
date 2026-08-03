import Dashboard from "./components/Dashboard";
import  ThemeProvider  from "./context/ThemeContext";


function MiniProject() {
    return (
        <ThemeProvider>
            <Dashboard/>
        </ThemeProvider>
    );
}

export default MiniProject;