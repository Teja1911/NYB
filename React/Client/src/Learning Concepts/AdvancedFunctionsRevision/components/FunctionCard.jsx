function FunctionCard({
    title,
    description,
    children
}) {
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

            <h2 className="text-xl font-bold text-violet-400">
                {title}
            </h2>

            <p className="mt-2 leading-6 text-slate-400">
                {description}
            </p>

            <div className="mt-5">
                {children}
            </div>

        </div>
    );
}

export default FunctionCard;