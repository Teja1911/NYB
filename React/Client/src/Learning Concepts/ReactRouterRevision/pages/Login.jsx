import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

function Login() {

    const {
        isAuthenticated,
        login,
    } = useContext(AuthContext);

    const location = useLocation();

    if (isAuthenticated) {
        return (
            <Navigate
                to={location.state?.from?.pathname || "../dashboard"}
                replace
            />
        );
    }

    const handleLogin = () => {
        login();
    };

    return (
        <div className="page login-page">

            <h1>Login</h1>

            <p>
                Login to access the protected dashboard.
            </p>

            <button onClick={handleLogin}>
                Login
            </button>

        </div>
    );
}

export default Login;