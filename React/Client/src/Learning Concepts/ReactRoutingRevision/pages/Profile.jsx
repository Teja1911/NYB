import { useState } from "react";

function Profile() {

    const [name, setName] = useState("Music Creator");

    return (
        <div>

            <h3 className="text-2xl font-bold">
                Creator Profile
            </h3>

            <p className="mt-2 text-slate-400">
                This page is inside the Workspace route.
            </p>

            <div className="mt-6">

                <label className="mb-2 block text-sm text-slate-400">
                    Creator Name
                </label>

                <input
                    value={name}
                    onChange={(event) =>
                        setName(event.target.value)
                    }
                    className="w-full max-w-md rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-violet-500"
                />

            </div>

            <p className="mt-5 text-slate-400">
                Welcome,
                <span className="ml-2 font-semibold text-violet-400">
                    {name}
                </span>
            </p>

        </div>
    );
}

export default Profile;