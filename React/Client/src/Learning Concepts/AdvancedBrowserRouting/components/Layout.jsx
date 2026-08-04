import { NavLink, Outlet } from "react-router-dom";

import "../css/style.css";

function Layout() {

    return (

        <div className="container">

            <header>

                <h1>

                    Advanced Browser Routing

                </h1>

            </header>

            <nav>

                <NavLink
                    to="/advancedbrowserrouting"
                    end
                    className={({ isActive }) =>
                        isActive ? "active-link" : ""
                    }
                >
                    Home
                </NavLink>
                
                <NavLink
                    to="/advancedbrowserrouting/about"
                    className={({ isActive }) =>
                        isActive ? "active-link" : ""
                    }
                >
                    About
                </NavLink>
                
                        <NavLink
                    to="/advancedbrowserrouting/students"
                    className={({ isActive }) =>
                        isActive ? "active-link" : ""
                    }
                >
                    Students
                </NavLink>
                
                <NavLink
                    to="/advancedbrowserrouting/dashboard"
                    className={({ isActive }) =>
                        isActive ? "active-link" : ""
                    }
                >
                    Dashboard
                </NavLink>
                
                <NavLink
                    to="/advancedbrowserrouting/login"
                    className={({ isActive }) =>
                        isActive ? "active-link" : ""
                    }
                >
                    Login
                </NavLink>

            </nav>

            <Outlet />

        </div>

    )

}

export default Layout