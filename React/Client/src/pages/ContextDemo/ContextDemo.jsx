import AppProvider from "../../Components/ContextDemo/AppContext"
import Navbar from "../../Components/ContextDemo/Navbar"
import Dashboard from "../../Components/ContextDemo/Dashboard"
import Footer from "../../Components/ContextDemo/Footer"

function ContextDemo() {
    return (
        <AppProvider>
            <Navbar />
            <Dashboard />
            <Footer />
        </AppProvider>
    )
}

export default ContextDemo