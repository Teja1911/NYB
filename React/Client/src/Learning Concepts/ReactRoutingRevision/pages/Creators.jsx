import { useState } from "react";
import CreatorCard from "../components/CreatorCard";

function Creators() {

    const [search, setSearch] = useState("");

    const creators = [
        {
            id: 1,
            name: "Maya",
            genre: "Lo-Fi",
            icon: "🌙",
            description:
                "Creates calm late-night beats for study and relaxation."
        },
        {
            id: 2,
            name: "Arjun",
            genre: "Electronic",
            icon: "⚡",
            description:
                "Builds energetic electronic sounds and experimental beats."
        },
        {
            id: 3,
            name: "Nila",
            genre: "Indie",
            icon: "🌿",
            description:
                "Creates simple indie tracks inspired by everyday life."
        },
        {
            id: 4,
            name: "Kiran",
            genre: "Ambient",
            icon: "🌊",
            description:
                "Designs peaceful ambient soundscapes."
        }
    ];

    const filteredCreators = creators.filter((creator) =>
        creator.name
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    return (
        <section>

            <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">

                <div>

                    <span className="rounded-full bg-violet-500/10 px-4 py-2 text-sm text-violet-400">
                        Explore
                    </span>

                    <h2 className="mt-4 text-3xl font-bold">
                        Featured Creators
                    </h2>

                    <p className="mt-2 text-slate-400">
                        Explore creators and open their profiles.
                    </p>

                </div>


                <input
                    type="text"
                    value={search}
                    onChange={(event) =>
                        setSearch(event.target.value)
                    }
                    placeholder="Search creator..."
                    className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-violet-500"
                />

            </div>


            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                {filteredCreators.length > 0 ? (

                    filteredCreators.map((creator) => (

                        <CreatorCard
                            key={creator.id}
                            creator={creator}
                        />

                    ))

                ) : (

                    <p className="col-span-full rounded-xl border border-slate-800 bg-slate-900 p-8 text-center text-slate-400">
                        No creator found.
                    </p>

                )}

            </div>

        </section>
    );
}

export default Creators;