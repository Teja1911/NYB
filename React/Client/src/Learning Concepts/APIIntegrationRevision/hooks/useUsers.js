import { useEffect, useState } from "react";

import {
    fetchUsers as fetchUsersWithFetch
} from "../services/userService";

import {
    fetchUsers as fetchUsersWithAxios
} from "../services/axiosUserService";


function useUsers(method = "fetch") {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    useEffect(() => {

        const loadUsers = async () => {

            try {

                setLoading(true);
                setError("");

                let data;

                if (method === "axios") {

                    data = await fetchUsersWithAxios();

                } else {

                    data = await fetchUsersWithFetch();

                }

                setUsers(data);

            } catch (error) {

                setError(error.message);

            } finally {

                setLoading(false);

            }
        };

        loadUsers();

    }, [method]);


    return {
        users,
        loading,
        error,
    };
}

export default useUsers;