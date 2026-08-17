import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

function Navbar() {

    const {
        isAuthenticated,
        logout,
    } = useContext(AuthContext);

    return (
        <nav className="navbar">

            <h2>
                Employee Portal
            </h2>

            <div className="nav-links">

                {/* Home */}
                <Link to="/revision-router">
                    Home
                </Link>

                {/* Employees */}
                <Link to="/revision-router/employees">
                    Employees
                </Link>

                {/* About */}
                <Link to="/revision-router/about">
                    About
                </Link>

                {/* Dashboard */}
                {isAuthenticated && (
                    <Link to="/revision-router/dashboard">
                        Dashboard
                    </Link>
                )}

                {/* Login / Logout */}
                {isAuthenticated ? (
                    <button onClick={logout}>
                        Logout
                    </button>
                ) : (
                    <Link to="/revision-router/login">
                        Login
                    </Link>
                )}

            </div>

        </nav>
    );
}

export default Navbar;