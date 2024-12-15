import axios from "axios";

const API_BASE_URL = "https://api.github.com";

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${username}`);
    return response.data; // Returns user data
  // eslint-disable-next-line no-unused-vars
  } catch (error) {
    throw new Error("User not found"); // Handle API errors
  }
};
