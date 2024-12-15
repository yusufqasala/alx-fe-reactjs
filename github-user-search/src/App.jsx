import React, { useState } from 'react';
import Search from './components/Search';
import { fetchUserData } from './services/githubService';

function App() {
  const [user, setUser] = useState(null); // Holds user data
  const [loading, setLoading] = useState(false); // Tracks loading state
  const [isError, setIsError] = useState(false); // Tracks error state

  const handleSearch = async (username) => {
    setLoading(true);
    setIsError(false);
    setUser(null);

    try {
      const userData = await fetchUserData(username);
      setUser(userData);
    } catch {
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <Search onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {isError && <p>Looks like we can't find the user.</p>}
      {user && (
        <div>
          <img
            src={user.avatar_url}
            alt={`${user.login}'s avatar`}
            width="100"
          />
          <h2>{user.name || user.login}</h2>
          <p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit GitHub Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
