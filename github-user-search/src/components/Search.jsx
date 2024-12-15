import React, { useState } from 'react';
import axios from 'axios';

function Search() {
  const [username, setUsername] = useState('');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Handle the search with async/await
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

  return (
    <div className="p-6 bg-gray-100 rounded-md shadow-md">
      {/* Search Form */}
      <form onSubmit={handleSearch} className="flex flex-col gap-4 items-center">
        <input
          type="text"
          placeholder="Enter GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
        >
          Search
        </button>
      </form>

      {/* Results Section */}

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
      
      <div className="mt-6">
        {loading && <p className="text-gray-500">Loading...</p>}
        {error && <p className="text-red-500">Looks like we can't find the user.</p>}
        {results && (
          <div className="flex flex-col items-center p-4 border rounded shadow">
            <img
              src={results.avatar_url}
              alt={results.login}
              className="w-24 h-24 rounded-full"
            />
            <h2 className="mt-2 text-lg font-semibold">{results.login}</h2>
            <a
              href={results.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mt-2"
            >
              View Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
