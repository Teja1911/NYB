import { useMemo, useState } from "react";

import useUsers from "../hooks/useUsers";
import { useSearchParams } from "react-router-dom";
import UserCard from "./UserCard";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";

function UserDashboard() {
    const [searchInput, setSearchInput] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const [apiMethod, setApiMethod] = useState("fetch");

    const {
        users,
        loading,
        error,
    } = useUsers(apiMethod);

    const handleSearch = () => {

    const value = searchInput.trim();

    setSearchTerm(value);

    if (value) {
        setSearchParams({
            search: value
        });
    } else {
        setSearchParams({});
    }
    };

    const handleReset = () => {

    setSearchInput("");
    setSearchTerm("");

    setSearchParams({});
    };

    const filteredUsers = useMemo(() => {
        if (!searchTerm) {
            return users;
        }

        const search = searchTerm.toLowerCase();

        return users.filter((user) => {
            return (
                user.name.toLowerCase().includes(search) ||
                user.username.toLowerCase().includes(search) ||
                user.email.toLowerCase().includes(search)
            );
        });
    }, [users, searchTerm]);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <ErrorMessage message={error} />;
    }

    return (
        <section className="user-dashboard">

            <h2>User Dashboard</h2>

            {/* API Method */}

            <div className="api-method-container">

                <label htmlFor="api-method">
                    API Method:
                </label>

                <select
                    id="api-method"
                    value={apiMethod}
                    onChange={(event) =>
                        setApiMethod(event.target.value)
                    }
                >
                    <option value="fetch">
                        Fetch
                    </option>

                    <option value="axios">
                        Axios
                    </option>
                </select>

            </div>

            {/* Search */}

            <div className="search-container">

                <input
                    type="text"
                    value={searchInput}
                    onChange={(event) =>
                        setSearchInput(event.target.value)
                    }
                    placeholder="Search by name, username or email"
                />

                <button
                    type="button"
                    onClick={handleSearch}
                >
                    Search
                </button>

                <button
                    type="button"
                    onClick={handleReset}
                >
                    Reset
                </button>

            </div>

            {/* Users */}

            <div className="user-list">

                {filteredUsers.length > 0 ? (

                    filteredUsers.map((user) => (
                        <UserCard
                            key={user.id}
                            user={user}
                        />
                    ))

                ) : (

                    <p className="no-users">
                        No users found.
                    </p>

                )}

            </div>

        </section>
    );
}

export default UserDashboard;