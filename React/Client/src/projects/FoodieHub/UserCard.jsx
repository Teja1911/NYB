import { useContext } from "react";
import { AppContext } from "./AppContext";

function UserCard() {
const { user } = useContext(AppContext);
    return (
        <div>
            <h2>User Details</h2>
            <p>Name : {user.name}</p>
            <p>Age : {user.age}</p>
            <p>City : {user.city}</p>
        </div>
    )
}

export default UserCard