import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [query, setQuery] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError(false);
    setUser(null);

    try {
      const userData = await fetchUserData(query);
      setUser(userData);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Looks like we cant find the user.</p>}

      {user && (
        <div>
          <img
            src={user.avatar_url}
            alt={`${user.login}'s avatar`}
            width="100"
          />
          <h2>{user.login}</h2>
          <p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              Visit GitHub Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func,
};

export default Search;
