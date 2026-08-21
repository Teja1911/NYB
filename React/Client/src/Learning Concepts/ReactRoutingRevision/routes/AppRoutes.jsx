import { Routes, Route } from "react-router-dom";

import Layout from "../components/Layout";
import ProtectedRoute from "../components/ProtectedRoute";

import Home from "../pages/Home";
import Creators from "../pages/Creators";
import CreatorDetails from "../pages/CreatorDetails";
import Workspace from "../pages/Workspace";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

function AppRoutes() {
    return (
        <Routes>

            <Route path="/" element={<Layout />}>

                {/* Home */}
                <Route index element={<Home />} />

                {/* Creators */}
                <Route
                    path="creators"
                    element={<Creators />}
                />

                {/* Dynamic Route */}
                <Route
                    path="creators/:id"
                    element={<CreatorDetails />}
                />

                {/* Protected + Nested Route */}
                <Route
                    path="workspace"
                    element={
                        <ProtectedRoute>
                            <Workspace />
                        </ProtectedRoute>
                    }
                >
                    <Route
                        path="profile"
                        element={<Profile />}
                    />
                </Route>

                {/* Login */}
                <Route
                    path="login"
                    element={<Login />}
                />

                {/* 404 */}
                <Route
                    path="*"
                    element={<NotFound />}
                />

            </Route>

        </Routes>
    );
}

export default AppRoutes;