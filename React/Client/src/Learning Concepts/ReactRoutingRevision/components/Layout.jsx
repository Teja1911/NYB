import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Layout() {

    const { isLoggedIn, logout } = useAuth();

    return (
        <div className="min-h-screen bg-slate-950 text-white">

            {/* Header */}

            <header className="border-b border-slate-800 bg-slate-900">

                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

                    <div>
                        <h1 className="text-2xl font-bold text-violet-400">
                            🎧 SoundSpace
                        </h1>

                        <p className="text-sm text-slate-400">
                            Music Creator Hub
                        </p>
                    </div>

                    <div>

                        {isLoggedIn ? (

                            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400">
                                ● Online
                            </span>

                        ) : (

                            <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-400">
                                ● Guest
                            </span>

                        )}

                    </div>

                </div>

            </header>


            {/* Navigation */}

            <nav className="border-b border-slate-800 bg-slate-900">

                <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-6 py-3">

                    <NavLink
                        to="/react-routing-revision"
                        end
                        className={({ isActive }) =>
                            `rounded-lg px-4 py-2 text-sm transition ${
                                isActive
                                    ? "bg-violet-600 text-white"
                                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                            }`
                        }
                    >
                        Home
                    </NavLink>


                    <NavLink
                        to="/react-routing-revision/creators"
                        className={({ isActive }) =>
                            `rounded-lg px-4 py-2 text-sm transition ${
                                isActive
                                    ? "bg-violet-600 text-white"
                                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                            }`
                        }
                    >
                        Creators
                    </NavLink>


                    <NavLink
                        to="/react-routing-revision/workspace"
                        className={({ isActive }) =>
                            `rounded-lg px-4 py-2 text-sm transition ${
                                isActive
                                    ? "bg-violet-600 text-white"
                                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                            }`
                        }
                    >
                        Workspace
                    </NavLink>


                    {!isLoggedIn && (

                        <NavLink
                            to="/react-routing-revision/login"
                            className={({ isActive }) =>
                                `rounded-lg px-4 py-2 text-sm transition ${
                                    isActive
                                        ? "bg-violet-600 text-white"
                                        : "text-slate-400 hover:bg-slate-800 hover:text-white"
                                }`
                            }
                        >
                            Login
                        </NavLink>

                    )}


                    {isLoggedIn && (

                        <button
                            onClick={logout}
                            className="ml-auto rounded-lg bg-red-500 px-4 py-2 text-sm font-medium hover:bg-red-600"
                        >
                            Logout
                        </button>

                    )}

                </div>

            </nav>


            {/* Page Content */}

            <main className="mx-auto min-h-[75vh] max-w-6xl px-6 py-8">

                <Outlet />

            </main>


            {/* Footer */}

            <footer className="border-t border-slate-800 bg-slate-900">

                <div className="mx-auto max-w-6xl px-6 py-6 text-center text-sm text-slate-500">

                    SoundSpace © 2026 · React Routing Revision

                </div>

            </footer>

        </div>
    );
}

export default Layout;