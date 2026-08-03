import {Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

import "./css/style.css";

function BrowserRouting() {

    return (

        

            <div className="container">

                <h1>React Browser Routing</h1>

                <nav>

                    <Link to="/BrowserRouting">Home</Link>

                    <Link to="/BrowserRouting/about">About</Link>

                    <Link to="/BrowserRouting/services">Services</Link>

                    <Link to="/BrowserRouting/contact">Contact</Link>

                </nav>

                <Routes>

                    <Route index element={<Home />} />

                    <Route path="about" element={<About />} />

                    <Route path="services" element={<Services />} />

                    <Route path="contact" element={<Contact />} />

                </Routes>

            </div>


    );

}

export default BrowserRouting;