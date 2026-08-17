import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Employees from "./pages/Employees";
import EmployeeDetails from "./pages/EmployeeDetails";
import About from "./pages/About";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

import "./css/style.css";

function ReactRouterRevisionPage() {

    return (
        <AuthProvider>

            <Navbar />

            <Routes>

                {/* Home */}
                <Route
                    index
                    element={<Home />}
                />

                {/* Employees */}
                <Route
                    path="employees"
                    element={<Employees />}
                />

                {/* Dynamic Employee Route */}
                <Route
                    path="employees/:id"
                    element={<EmployeeDetails />}
                />

                {/* About */}
                <Route
                    path="about"
                    element={<About />}
                />

                {/* Login */}
                <Route
                    path="login"
                    element={<Login />}
                />

                {/* Protected Dashboard */}
                <Route
                    path="dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />

                {/* 404 */}
                <Route
                    path="*"
                    element={<NotFound />}
                />

            </Routes>

        </AuthProvider>
    );
}

export default ReactRouterRevisionPage;