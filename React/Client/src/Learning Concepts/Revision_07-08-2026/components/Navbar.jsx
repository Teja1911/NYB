import { Link, NavLink } from "react-router-dom";

function Navbar() {

    return (

        <nav className="navbar">

            <NavLink
                to="/revision"
                end
                className={({ isActive }) =>
                    isActive ? "active-link" : ""
                }
            >
                Home
            </NavLink>

            <NavLink
                to="/revision/about"
                className={({ isActive }) =>
                    isActive ? "active-link" : ""
                }
            >
                About
            </NavLink>

            <NavLink
                to="/revision/services"
                className={({ isActive }) =>
                    isActive ? "active-link" : ""
                }
            >
                Services
            </NavLink>

            <NavLink
                to="/revision/contact"
                className={({ isActive }) =>
                    isActive ? "active-link" : ""
                }
            >
                Contact
            </NavLink>

            <NavLink
                to="/revision/students"
                className={({ isActive }) =>
                    isActive ? "active-link" : ""
                }
            >
                Students
            </NavLink>

            <NavLink
                to="/revision/dashboard"
                className={({ isActive }) =>
                    isActive ? "active-link" : ""
                }
            >
                Dashboard
            </NavLink>

            <Link
                to="/revision/login"
            >
                Login
            </Link>

        </nav>

    );

}

export default Navbar