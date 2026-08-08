import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

    const isLoggedIn = localStorage.getItem("isLoggedIn");

    return isLoggedIn
        ? children
        : <Navigate to="/revision/login" replace />;

}

export default ProtectedRoute;