import axios from "axios";

const API_URL =
    "https://jsonplaceholder.typicode.com/users";

export async function fetchUsers(searchTerm = "") {

    const response = await axios.get(API_URL, {
        params: searchTerm.trim()
            ? {
                q: searchTerm.trim()
            }
            : {}
    });

    return response.data;
}