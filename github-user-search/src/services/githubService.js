import axios from 'axios';

// Function to fetch users based on advanced search criteria
export const fetchAdvancedUserData = async ({ username, location, minRepos }) => {
  const baseUrl = 'https://api.github.com/search/users';
  let query = '';

  // Build the search query dynamically
  if (username) query += `${username}+`;
  if (location) query += `location:${location}+`;
  if (minRepos) query += `repos:>${minRepos}`;

  try {
    // Make the API request to GitHub Search API
    const response = await axios.get(`${baseUrl}?q=${query}`);
    return response.data.items; // Extract the list of users
  } catch (error) {
    console.error('Error fetching advanced user data:', error.message);
    throw error;
  }
};
