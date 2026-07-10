import AppProvider from "../../Components/projects/FoodieHub/AppContext"
import Navbar from "../../Components/projects/FoodieHub/Navbar"
import Dashboard from "../../Components/projects/FoodieHub/Dashboard"
import Footer from "../../Components/projects/FoodieHub/Footer"

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