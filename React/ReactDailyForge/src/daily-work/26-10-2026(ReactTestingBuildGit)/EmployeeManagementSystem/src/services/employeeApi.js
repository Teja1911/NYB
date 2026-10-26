const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";

async function request(endpoint, options = {}) {
  let response;

  try {
    response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers
      }
    });
  } catch {
    throw new Error(
      "Unable to connect to the server. Check whether the API is running."
    );
  }

  if (!response.ok) {
    throw new Error(
      `Request failed with status ${response.status}.`
    );
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}

export const employeeApi = {
  getAll() {
    return request("/employees");
  },

  getById(id) {
    return request(`/employees/${encodeURIComponent(id)}`);
  },

  create(employee) {
    return request("/employees", {
      method: "POST",
      body: JSON.stringify(employee)
    });
  },

  update(id, employee) {
    return request(`/employees/${encodeURIComponent(id)}`, {
      method: "PUT",
      body: JSON.stringify(employee)
    });
  },

  remove(id) {
    return request(`/employees/${encodeURIComponent(id)}`, {
      method: "DELETE"
    });
  }
};