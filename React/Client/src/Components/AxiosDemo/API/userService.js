import api from "./axiosConfig";

/*   GET USERS */
export async function getUsers() {
    try {
        const response = await api.get("/users");
        return response.data;
    }
    catch (error) {
        throw error;
    }

}

/* GET SINGLE USER */

export async function getUser(id) {
    try {
        const response = await api.get(`/users/${id}`);
        return response.data;
    }

    catch (error) {
        throw error;
    }

}

/* CREATE USER */

export async function createUser(user) {
    try {

        const response = await api.post("/users", user)
        return response.data;
    }

    catch (error) {
        throw error;
    }

}

/* UPDATE USER */

export async function updateUser(id, user) {
    try {
        const response = await api.put(`/users/${id}`, user);
        return response.data;
    }

    catch (error) {
        throw error;
    }

}

/* PATCH USER*/

export async function patchUser(id, user) {
    try {
        const response = await api.patch(`/users/${id}`, user);
        return response.data;
    }

    catch (error) {
        throw error;
    }
}

/* DELETE USER*/

export async function deleteUser(id) {

    try {
        const response = await api.delete(`/users/${id}`);
        return response.data;
    }
    catch (error) {
        throw error;
    }

}