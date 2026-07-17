import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const getStudents = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.log("Error fetching students:", error);
    return [];
  }
};