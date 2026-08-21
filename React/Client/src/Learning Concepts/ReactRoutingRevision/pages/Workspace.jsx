import { Link, Outlet } from "react-router-dom";

function Workspace() {

    return (
        <section>

            <span className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
                🔒 Protected Area
            </span>

            <h2 className="mt-5 text-3xl font-bold">
                Creator Workspace
            </h2>

            <p className="mt-2 text-slate-400">
                This page is available only after login.
            </p>


            <div className="mt-8 flex gap-3">

                <Link
                    to="/react-routing-revision/workspace"
                    className="rounded-lg bg-slate-800 px-4 py-2 text-sm hover:bg-slate-700"
                >
                    Overview
                </Link>

                <Link
                    to="/react-routing-revision/workspace/profile"
                    className="rounded-lg bg-slate-800 px-4 py-2 text-sm hover:bg-slate-700"
                >
                    Profile
                </Link>

            </div>


            <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-900 p-8">

                <Outlet />

            </div>

        </section>
    );
}

export default Workspace;