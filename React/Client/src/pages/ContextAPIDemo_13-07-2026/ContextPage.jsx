import AppProvider, { AppContext } from "../../Components/ContextAPIDemo/AppContext";
import React, { useContext } from 'react'
import Navbar from "../../Components/ContextAPIDemo/Navbar";
import Sidebar from "../../Components/ContextAPIDemo/Sidebar";
import Dashboard from "../../Components/ContextAPIDemo/Dashboard";
import ThemeSwitcher from "../../Components/ContextAPIDemo/ThemeSwitcher";
import LoginFrom from "../../Components/ContextAPIDemo/LoginForm";
import UserProfile from "../../Components/ContextAPIDemo/UserProfile";
import HomeContent from "../../Components/ContextAPIDemo/HomeContent";
import "../../Components/ContextAPIDemo/ContextDemo.css";
import ConsumerExample from "../../Components/ContextAPIDemo/ConsumerExample";

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