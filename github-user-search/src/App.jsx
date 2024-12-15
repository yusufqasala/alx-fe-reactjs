import React, { useState } from 'react';
import Search from './components/Search';
import { fetchAdvancedUserData } from './services/githubService';

function App() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (filters) => {
    setLoading(true);
    setError(false);
    setResults([]);

    try {
      const userData = await fetchAdvancedUserData(filters);
      setResults(userData);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">GitHub User Search</h1>
      <Search onSearch={handleSearch} />

      {loading && <p className="text-center text-gray-500 mt-4">Loading...</p>}
      {error && (
        <p className="text-center text-red-500 mt-4">
          Something went wrong. Please try again.
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {results.map((user) => (
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
        ))}
      </div>
    </div>
  );
}

export default App;
