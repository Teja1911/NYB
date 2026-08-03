import { useState } from "react";

import useTheme from "../hooks/useTheme";
import WithAuth from "../hoc/WithAuth";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import DashboardHome from "../components/DashboardHome";
import EmployeeList from "../components/EmployeeList";
import Reports from "../pages/Reports"
import Settings from "../pages/Settings";

function Dashboard() {

    const { theme } = useTheme();

    const [currentPage, setCurrentPage] = useState("dashboard");

    function renderPage() {

        switch (currentPage) {

            case "employees":

                return <EmployeeList />;

            case "reports":

                return <Reports />;

            case "settings":

                return <Settings />;

            default:

                return <DashboardHome />;

        }

    }

    return (

        <div className={`dashboard ${theme}`}>

            <Header />

            <div className="dashboard-layout">

                <Sidebar

                    currentPage={currentPage}

                    setCurrentPage={setCurrentPage}

                />

                <main className="dashboard-main">

                    {renderPage()}

                </main>

            </div>

        </div>

    );

}

export default WithAuth(Dashboard);