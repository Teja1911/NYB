import UserCard from "./UserCard";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import useUsers from "../hooks/useUsers";
import { useRef, useState } from "react";

function UserDashboard() {

    const{users,loading,error}=useUsers()
    const searchInputRef=useRef(null)
    const[searchTerm,setSearchTerm]=useState("")

    const handleFocus = () => {

        searchInputRef.current.focus();

    };

    const filteredUsers=users.filter((user)=>{
        return(
            user.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            ||
            user.username
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
        )
    })

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <ErrorMessage message={error} />;
    }

    return (
        <div className="user-dashboard">

            <div className="search-section">

                <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(event)=>{
                        setSearchTerm(event.target.value)
                    }}
                />

                <button onClick={handleFocus}>
                    Focus Search
                </button>

            </div>

            <div className="users-list">

                {filteredUsers.length > 0 ? (

                    filteredUsers.map((user) => (

                        <UserCard
                            key={user.id}
                            name={user.name}
                            username={user.username}
                            email={user.email}
                        />

                    ))

                ) : (

                    <p>No users found.</p>

                )}

            </div>

        </div>
    );
}

export default UserDashboard;