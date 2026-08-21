import { useState } from "react";
import {
    useLocation,
    useNavigate
} from "react-router-dom";

import { useAuth } from "../context/AuthContext";

function Login() {

    const [username, setUsername] = useState("");

    const { login } = useAuth();

    const navigate = useNavigate();

    const location = useLocation();


    const handleLogin = (event) => {

        event.preventDefault();

        if (!username.trim()) {
            return;
        }

        login();

        const destination =
            location.state?.from ||
            "/react-routing-revision/workspace";

        navigate(destination);
    };


    return (
        <section className="mx-auto max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-8">

            <span className="rounded-full bg-violet-500/10 px-4 py-2 text-sm text-violet-400">
                Member Login
            </span>

            <h2 className="mt-6 text-3xl font-bold">
                Enter SoundSpace
            </h2>

            <p className="mt-3 text-slate-400">
                Login to access your private workspace.
            </p>


            <form
                onSubmit={handleLogin}
                className="mt-7 space-y-4"
            >

                <input
                    type="text"
                    placeholder="Enter your name"
                    value={username}
                    onChange={(event) =>
                        setUsername(event.target.value)
                    }
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-violet-500"
                />

                <button
                    type="submit"
                    className="w-full rounded-lg bg-violet-600 px-5 py-3 font-medium hover:bg-violet-700"
                >
                    Login
                </button>

            </form>

        </section>
    );
}

export default Login;