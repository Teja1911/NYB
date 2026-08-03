function SearchBar({
    search,
    setSearch
}) {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="🔍 Search Employee..."
                value={search}
                onChange={(event) =>
                    setSearch(event.target.value)
                }
            />
        </div>
    )
}

export default SearchBar