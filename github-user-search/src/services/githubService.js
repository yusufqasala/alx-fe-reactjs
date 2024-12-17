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



















