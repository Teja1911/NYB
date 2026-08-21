import { Link } from "react-router-dom";

function CreatorCard({ creator }) {

    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-violet-500">

            <div className="mb-5 text-5xl">
                {creator.icon}
            </div>

            <h3 className="text-xl font-semibold">
                {creator.name}
            </h3>

            <p className="mt-2 text-sm text-violet-400">
                {creator.genre}
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-400">
                {creator.description}
            </p>

            <Link
                to={`/react-routing-revision/creators/${creator.id}`}
                className="mt-5 inline-block rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium hover:bg-violet-700"
            >
                View Creator
            </Link>

        </div>
    );
}

export default CreatorCard;