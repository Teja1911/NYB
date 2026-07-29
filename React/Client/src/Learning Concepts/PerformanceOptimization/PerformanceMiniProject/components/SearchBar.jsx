function SearchBar({ search, setSearch }) {

    console.log("SearchBar Rendered");

    return (

        <div className="card">

            <h2>

                Search Employee

            </h2>

            <input

                type="text"

                placeholder="Enter employee name"

                value={search}

                onChange={(event) =>

                    setSearch(event.target.value)

                }

            />

        </div>

    );

}

export default SearchBar;