import axios from 'axios';

// Advanced search functionality using GitHub Search API
export const fetchAdvancedUserData = async ({ username = '', location = '', minRepos = '' }) => {
  const baseUrl = 'https://api.github.com/search/users';
  
  // Construct query parameters dynamically
  let query = '';

  if (username) query += `${username}+`;
  if (location) query += `location:${location}+`;
  if (minRepos) query += `repos:>${minRepos}`;
  
  // Remove trailing '+' if it exists
  query = query.trim().replace(/\+$/, '');

  try {
    // Perform the GET request with the query
    const response = await axios.get(`${baseUrl}?q=${query}`);
    return response.data.items; // Return the list of users from API response
  } catch (error) {
    console.error('Error fetching advanced user data:', error.message);
    throw error;
  }
};
