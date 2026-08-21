import { Link } from "react-router-dom";

function Home() {

    return (
        <section className="grid min-h-[65vh] items-center gap-10 md:grid-cols-2">

            {/* Left */}

            <div>

                <span className="inline-block rounded-full bg-violet-500/10 px-4 py-2 text-sm text-violet-400">
                    React Routing Revision
                </span>

                <h2 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
                    Discover the people behind the sound.
                </h2>

                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
                    Explore independent music creators,
                    view their profiles and access a private
                    creator workspace.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">

                    <Link
                        to="/react-routing-revision/creators"
                        className="rounded-lg bg-violet-600 px-6 py-3 font-medium hover:bg-violet-700"
                    >
                        Explore Creators
                    </Link>

                    <Link
                        to="/react-routing-revision/workspace"
                        className="rounded-lg border border-slate-700 px-6 py-3 font-medium hover:bg-slate-800"
                    >
                        Open Workspace
                    </Link>

                </div>

            </div>


            {/* Right */}

            <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-violet-950 to-slate-900 p-10">

                <div className="text-center">

                    <div className="text-8xl">
                        🎵
                    </div>

                    <h3 className="mt-6 text-2xl font-bold">
                        Today's Mix
                    </h3>

                    <p className="mt-3 text-slate-400">
                        12 new tracks discovered
                    </p>

                </div>

                <div className="mt-8 space-y-3">

                    <div className="h-2 rounded-full bg-violet-500"></div>

                    <div className="h-2 w-3/4 rounded-full bg-violet-400"></div>

                    <div className="h-2 w-1/2 rounded-full bg-violet-300"></div>

                </div>

            </div>

        </section>
    );
}

export default Home;