import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

    const isLoggedIn = false;

    if (!isLoggedIn) {

        return <Navigate to="/advancedbrowserrouting/login" />

    }

    return children

}

export default ProtectedRoute