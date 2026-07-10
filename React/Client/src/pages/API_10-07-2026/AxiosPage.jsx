import { useEffect, useState } from "react";
// import { getUsers } from "../../Components/AxiosDemo/api/userService";
import SearchBar from "../../Components/AxiosDemo/SearchBar";
import FilterDropdown from "../../Components/AxiosDemo/FilterDropdown";
import Loading from "../../Components/AxiosDemo/Loading";
import Error from "../../Components/AxiosDemo/Error";
import UserList from "../../Components/AxiosDemo/UserList";
import UserForm from "../../Components/AxiosDemo/UserForm";

import ActionButtons from "../../Components/AxiosDemo/ActionButtons";

import {

getUsers,

createUser,

updateUser,

patchUser,

deleteUser

}

from "../../Components/AxiosDemo/api/userService";

function AxiosPage() {
    const [users, setUsers] = useState([]);
    const [search,setSearch]=useState("");
    const [filter,setFilter]=useState("All");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    async function addUser(user) {
    try {
        const data = await createUser(user);
        alert("POST Success");
        console.log(data);
    }
    catch {
        alert("POST Failed");
    }
}
    async function loadUsers() {
        setLoading(true);
        setError("");
        try {
            const data = await getUsers();
            setUsers(data);
        }
        catch (err) {
            setError("Unable to fetch users");
        }
        finally {
            setLoading(false);
        }
    }
    async function handlePut() {

    try {
        const data = await updateUser(
            1,
            {
                name: "Updated User",
                email: "updated@gmail.com",
                phone: "9999999999"
            }
        );
        console.log(data);
        alert("PUT Success");
    }
    catch {
        alert("PUT Failed");
    }
    }
    async function handlePatch() {
    try {
        const data = await patchUser(
            1,
            {
                name: "Patched User"
            }
        );
        console.log(data);
        alert("PATCH Success");
    }
    catch {
        alert("PATCH Failed");
    }
    }
    async function handleDelete() {
    try {
        await deleteUser(1);
        alert("DELETE Success");
    }
    catch {
        alert("DELETE Failed");
    }
    }
    // useEffect(() => {
    //     loadUsers();
    // }, []);
    if (loading) {
        return <Loading />;
    }
    if (error) {
        return <Error message={error} />;
    }
    const filteredUsers = users.filter((user) => {

    const matchesSearch = user.name
        .toLowerCase()
        .includes(search.trim().toLowerCase());

    let matchesFilter = true;

    if (filter === "A-M") {

        matchesFilter = user.name[0].toUpperCase() <= "M";

    } else if (filter === "N-Z") {

        matchesFilter = user.name[0].toUpperCase() >= "N";

    }

    return matchesSearch && matchesFilter;

});
console.log("Search:", search);
console.log("Users:", users);
console.log("Filtered Users:", filteredUsers);
    return (
    <div>

        <h1>Axios CRUD Operations</h1>

        <button onClick={loadUsers}>
            GET Users
        </button>

        <UserForm addUser={addUser} />

        <ActionButtons
            updateUser={handlePut}
            patchUser={handlePatch}
            deleteUser={handleDelete}
        />

        {loading && <Loading />}

        {error && <Error message={error} />}
        <SearchBar

        search={search}setSearch={setSearch}/>
        <FilterDropdown filter={filter} setFilter={setFilter}/>
        {!loading && !error && (
        <UserList users={filteredUsers} />
        )}
    </div>
)
}

export default AxiosPage