import { useState,useEffect } from "react";

function ListsFormsEventsAssignment() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState("");
    useEffect(() => {
        console.log("User list changed:", users);
    }, [users]);
    function handleSubmit(e) {
        e.preventDefault();
        if (!name || !email) {
            setMessage("Please fill all fields");
        return;
    }
    const newUser = {
        id: Date.now(),
        name: name,
        email: email,
    };
    setUsers([...users, newUser]);
    setName("");
    setEmail("");
    setMessage("User added successfully");
    }
    function deleteUser(id) {
        setUsers(
            users.filter((user) => user.id !== id)
        );
    }
    return (
        <div>
            <h1>User Management</h1>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />  
                <button type="submit">Add User</button>
            </form>
            {message && <p>{message}</p>}
            <h2>User List</h2>
            {users.length === 0 ? (
              <p>No users available</p>
            ) : (
            <ul>
              {users.map((user) => (
              <li key={user.id}>
              {user.name} - {user.email}
              <button onClick={() => deleteUser(user.id)}>Delete</button>
              </li>
              ))}
            </ul>
            )}
        </div>
  )
}

export default ListsFormsEventsAssignment