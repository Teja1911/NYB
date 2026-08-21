import { Link } from "react-router-dom";

function NotFound() {

    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">

            <div className="text-8xl font-black text-violet-500">
                404
            </div>

            <h2 className="mt-5 text-3xl font-bold">
                Sound Not Found
            </h2>

            <p className="mt-3 text-slate-400">
                Looks like this page disappeared from the playlist.
            </p>

            <Link
                to="/react-routing-revision"
                className="mt-7 rounded-lg bg-violet-600 px-6 py-3 font-medium hover:bg-violet-700"
            >
                Back Home
            </Link>

        </div>
    );
}

export default NotFound;