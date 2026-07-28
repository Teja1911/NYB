import { useContext } from "react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";

import { ThemeContext } from "./context/ThemeContext";

import withAuth from "./hoc/withAuth";

const ProtectedDashboard = withAuth(Dashboard);

function AppLayout() {

    const {

        theme

    } = useContext(ThemeContext);

    return (

        <div className={`container ${theme}`}>

            <Header />

            <div className="main-layout">

                <Sidebar />

                <ProtectedDashboard />

            </div>

            <Footer />

        </div>

    );

}

export default AppLayout;