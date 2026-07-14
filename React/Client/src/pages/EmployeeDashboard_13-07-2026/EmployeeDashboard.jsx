import AppProvider, { AppContext } from "../../Components/EmployeeDashboard/AppContext";
import React, { useContext } from 'react'
import Navbar from "../../Components/EmployeeDashboard/Navbar";
import Sidebar from "../../Components/EmployeeDashboard/Sidebar";
import Dashboard from "../../Components/EmployeeDashboard/Dashboard";
import ThemeSwitcher from "../../Components/EmployeeDashboard/ThemeSwitcher";
import LoginFrom from "../../Components/EmployeeDashboard/LoginForm";
import UserProfile from "../../Components/EmployeeDashboard/UserProfile";
import HomeContent from "../../Components/EmployeeDashboard/HomeContent";
import "../../Components/EmployeeDashboard/ContextDemo.css";
import ConsumerExample from "../../Components/EmployeeDashboard/ConsumerExample";

function ContextContent() {

    const{theme}=useContext(AppContext)

    return (

        <div className={`container ${theme}`}>

            <Navbar/>

            <div className="main-layout">

                <Sidebar/>

                <div className="content">
                    <Dashboard/>
                    <ThemeSwitcher/>
                    <LoginFrom/>
                    <UserProfile/>
                    <HomeContent/>
                    <ConsumerExample/>

                </div>

            </div>

        </div>

    );

}
function ContextPage() {
  return (
    <AppProvider>   
        <ContextContent/>
    </AppProvider>
  )
}

export default ContextPage