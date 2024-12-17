import axios from 'axios';

// GitHub API endpoint
const BASE_URL = 'https://api.github.com/search/users';

// Fetch GitHub users with advanced query parameters
export const fetchUserData = async (searchTerm, location = '', minRepos = 0) => {
  try {
    // Construct the query string based on provided parameters
    let query = `${searchTerm}`;
    if (location) {
      query += `+location:${location}`;
    }
    if (minRepos) {
      query += `+repos:>${minRepos}`;
    }

    // Make the GET request to the GitHub Search API
    const response = await axios.get(`${BASE_URL}?q=${query}`);

    // Return the user data
    return response.data.items; // 'items' contains the list of users
  } catch (error) {
    console.error('Error fetching GitHub users:', error.message);
    throw error;
  }
};
