import axios from 'axios';

export const fetchAdvancedUserData = async ({ username, location, minRepos }) => {
  let query = '';

  // Build query parameters
  if (username) query += `${username} `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  // Make API request
  const response = await axios.get(
    `https://api.github.com/search/users?q=${query.trim()}`
  );

  return response.data.items; // 'items' contains the list of users
};
