import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { fetchUserData } from '../services/githubService';
import axios from 'axios';

function Search({ onSearch, results }) {
  const [username, setUsername] = useState('');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ username, location, minRepos });
  };
 const handleSearch = async (e) => {
    e.preventDefault(); // Prevent form reload
    setLoading(true);
    setError(false);
    setResults(null);

    try {
      // API call using async/await
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setResults(response.data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  
    try {
      const data = await fetchUserData(searchTerm, location, minRepos);
      setResults(data); 
    } catch (err) {
      setError('Failed to fetch user data.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-md shadow-md">
      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-4 justify-center items-center"
      >
        <input
          type="text"
          placeholder="GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full md:w-1/3 p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Location (e.g., London)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full md:w-1/3 p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Min Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full md:w-1/3 p-2 border rounded"
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
        >
          Search
        </button>
      </form>

      {/* Results Rendering */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {results && results.length > 0 ? (
          results.map((user) => (
            <div
              key={user.id}
              className="p-4 border rounded shadow-md flex flex-col items-center"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-24 h-24 rounded-full"
              />
              <h2 className="mt-2 text-lg font-semibold">{user.login}</h2>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-1"
              >
                View Profile
              </a>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-4">
            No results found. Please try again.
          </p>
        )}
      </div>
    </div>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
  results: PropTypes.array.isRequired,
};

export default Search;



