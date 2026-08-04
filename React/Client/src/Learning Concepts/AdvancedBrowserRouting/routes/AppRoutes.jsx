import { Routes, Route } from "react-router-dom";

import Layout from "../components/Layout";
import ProtectedRoute from "../components/ProtectedRoute";


import About from "../pages/About";
import Students from "../pages/Students";
import StudentDetails from "../pages/StudentDetails";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";

function AppRoutes() {

    return (

        <Routes>

            {/* Parent Layout */}

            <Route path="/" element={<Layout />}>

                {/* Home */}

                <Route

                    index

                    element={<Home/>}

                />

                {/* About */}

                <Route

                    path="about"

                    element={<About />}

                />

                {/* Students */}

                <Route

                    path="students"

                    element={<Students />}

                />

                {/* Dynamic Route */}

                <Route

                    path="students/:id"

                    element={<StudentDetails />}

                />

                {/* Nested Route */}

                <Route

                    path="dashboard"

                    element={<Dashboard />}

                >

                    <Route

                        path="profile"

                        element={

                            <ProtectedRoute>

                                <Profile />

                            </ProtectedRoute>

                        }

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

    )
}

export default AppRoutes