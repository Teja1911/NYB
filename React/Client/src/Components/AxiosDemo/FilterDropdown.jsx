function FilterDropdown({

    filter,

    setFilter

}) {
    return (
        <select
            value={filter}
            onChange={(e)=>setFilter(e.target.value)}
        >
            <option value="All">
                All Users
            </option>
            <option value="A-M">
                A-M
            </option>
            <option value="N-Z">
                N-Z
            </option>
        </select>
    )
}

export default FilterDropdown