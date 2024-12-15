import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Search({ onSearch }) {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ username, location, minRepos });
  };

  return (
    <div className="p-6 bg-gray-100 rounded-md shadow-md">
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
    </div>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;
