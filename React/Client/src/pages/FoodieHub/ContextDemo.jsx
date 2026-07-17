import AppProvider from "../../projects/FoodieHub/AppContext"
import Navbar from "../../projects/FoodieHub/Navbar"
import Dashboard from "../../projects/FoodieHub/Dashboard"
import Footer from "../../projects/FoodieHub/Footer"

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