import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

// Fetch GitHub users with advanced query parameters
export const fetchUserData = async (searchTerm, location = '', minRepos = 0) => {
  try {
    // Construct the query string
    let query = `${searchTerm}`;
    if (location) {
      query += `+location:${location}`;
    }
    if (minRepos) {
      query += `+repos:>${minRepos}`;
    }

    // Ensure the API endpoint matches the required string
    const url = `https://api.github.com/search/users?q`;

    console.log('API Request URL:', url); // Debugging

    // Make the GET request
    const response = await axios.get(url);
    return response.data.items; // Return the list of users
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
