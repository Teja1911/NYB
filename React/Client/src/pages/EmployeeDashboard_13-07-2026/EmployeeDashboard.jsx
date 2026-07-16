import AppProvider, { AppContext } from "../../Components/EmployeeDashboard/ContextAPIDemo/AppContext";
import React, { useContext } from 'react'
import Navbar from "../../Components/EmployeeDashboard/ContextAPIDemo/Navbar";
import Sidebar from "../../Components/EmployeeDashboard/ContextAPIDemo/Sidebar";
import Dashboard from "../../Components/EmployeeDashboard/ContextAPIDemo/Dashboard";
// import ThemeSwitcher from "../../Components/EmployeeDashboard/ContextAPIDemo/ThemeSwitcher";
// import LoginFrom from "../../Components/EmployeeDashboard/ContextAPIDemo/LoginForm";
// import UserProfile from "../../Components/EmployeeDashboard/ContextAPIDemo/UserProfile";
// import "../../Components/EmployeeDashboard/ContextAPIDemo/ContextDemo.css";
import "../../Components/EmployeeDashboard/ContextAPIDemo/ContextDemo.css"
import EmployeeSection from "../../Components/Features/Employee/EmployeeSection";


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