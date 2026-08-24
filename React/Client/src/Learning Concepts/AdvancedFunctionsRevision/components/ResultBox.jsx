function ResultBox({ result }) {
    return (
        <div className="mt-5 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4">
            <p className="text-sm text-slate-400">
                Result
            </p>

            <p className="mt-2 text-lg font-semibold text-emerald-400">
                {result}
            </p>
        </div>
    );
}

export default ResultBox;