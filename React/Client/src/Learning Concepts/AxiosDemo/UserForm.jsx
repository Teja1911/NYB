import { useState } from "react";

function UserForm({ addUser }) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const newUser = {
            name,
            email,
            phone
        };
        addUser(newUser);
        setName("");
        setEmail("");
        setPhone("");
    }
    return (
        <form onSubmit={handleSubmit} className="form">
            <h2>Add User</h2>
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
            <input
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <button type="submit">POST User</button>
        </form>
    )

}

export default UserForm;