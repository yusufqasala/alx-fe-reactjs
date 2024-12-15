import { useState } from 'react';
import SearchComponent from './components/SearchComponent';
import { fetchUserData } from './services/githubService';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false); // Renamed to clarify its purpose

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
      <SearchComponent onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {isError && <p>Looks like we can not find the user.</p>}
      {user && (
        <div>
          <img src={user.avatar_url} alt={`${user.login}'s avatar`} width="100" />
          <h2>{user.name || user.login}</h2>
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

export default App;

