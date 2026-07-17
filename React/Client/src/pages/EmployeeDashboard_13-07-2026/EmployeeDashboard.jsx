import AppProvider, { AppContext } from "../../projects/Employee-dashboard/Features/dashboard/context/AppContext";
import React, { useContext } from 'react'
import Navbar from "../../projects/Employee-dashboard/layouts/Navbar";
// import Sidebar from "../../Components/EmployeeDashboard/ContextAPIDemo/Sidebar";
import Dashboard from "../../projects/Employee-dashboard/Features/dashboard/DashboardSection";
import Sidebar from '../../projects/Employee-dashboard/layouts/Sidebar'
// import ThemeSwitcher from "../../Components/EmployeeDashboard/ContextAPIDemo/ThemeSwitcher";
// import LoginFrom from "../../Components/EmployeeDashboard/ContextAPIDemo/LoginForm";
// import UserProfile from "../../Components/EmployeeDashboard/ContextAPIDemo/UserProfile";
// import "../../Components/EmployeeDashboard/ContextAPIDemo/ContextDemo.css";
import "../../projects/Employee-dashboard/Features/dashboard/styles/ContextDemo.css"
import EmployeeSection from "../../projects/Employee-dashboard/Features/employee/EmployeeSection";


function ContextContent() {

    const{theme}=useContext(AppContext)

    return (

        <div className={`container ${theme}`}>

            <Navbar/>

            <div className="main-layout">

                <Sidebar/>

                <div className="content">
                    <Dashboard/>
                    <EmployeeSection/>
                </div>

            </div>

        </div>

    );

}
function EmployeeDashboard() {
  return (
    <AppProvider>   
        <ContextContent/>
    </AppProvider>
  )
}

export default EmployeeDashboard