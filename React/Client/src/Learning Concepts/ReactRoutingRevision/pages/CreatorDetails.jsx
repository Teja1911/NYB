import { useNavigate, useParams } from "react-router-dom";

function CreatorDetails() {

    const { id } = useParams();

    const navigate = useNavigate();

    const creators = {
        1: {
            name: "Maya",
            genre: "Lo-Fi",
            icon: "🌙",
            description:
                "Creates calm late-night beats for study and relaxation."
        },

        2: {
            name: "Arjun",
            genre: "Electronic",
            icon: "⚡",
            description:
                "Builds energetic electronic sounds and experimental beats."
        },

        3: {
            name: "Nila",
            genre: "Indie",
            icon: "🌿",
            description:
                "Creates simple indie tracks inspired by everyday life."
        },

        4: {
            name: "Kiran",
            genre: "Ambient",
            icon: "🌊",
            description:
                "Designs peaceful ambient soundscapes."
        }
    };

    const creator = creators[id];

    if (!creator) {

        return (
            <div className="mx-auto max-w-xl rounded-2xl border border-slate-800 bg-slate-900 p-10 text-center">

                <h2 className="text-3xl font-bold">
                    Creator Not Found
                </h2>

                <p className="mt-3 text-slate-400">
                    This creator does not exist.
                </p>

                <button
                    onClick={() =>
                        navigate(
                            "/react-routing-revision/creators"
                        )
                    }
                    className="mt-6 rounded-lg bg-violet-600 px-5 py-3 hover:bg-violet-700"
                >
                    Back to Creators
                </button>

            </div>
        );
    }


    return (
        <div className="mx-auto max-w-2xl rounded-3xl border border-slate-800 bg-slate-900 p-10 text-center">

            <div className="text-8xl">
                {creator.icon}
            </div>

            <span className="mt-6 inline-block rounded-full bg-violet-500/10 px-4 py-2 text-sm text-violet-400">
                Creator Profile
            </span>

            <h2 className="mt-5 text-4xl font-bold">
                {creator.name}
            </h2>

            <h3 className="mt-2 text-lg text-violet-400">
                {creator.genre}
            </h3>

            <p className="mt-5 leading-7 text-slate-400">
                {creator.description}
            </p>

            <p className="mt-5 text-sm text-slate-500">
                Creator ID:
                <span className="ml-2 font-bold text-slate-300">
                    {id}
                </span>
            </p>

            <button
                onClick={() =>
                    navigate(
                        "/react-routing-revision/creators"
                    )
                }
                className="mt-7 rounded-lg bg-violet-600 px-5 py-3 hover:bg-violet-700"
            >
                ← Back to Creators
            </button>

        </div>
    );
}

export default CreatorDetails;