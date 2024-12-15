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
      <Search onSearch={handleSearch} results={results} />

      {loading && <p className="text-center text-gray-500 mt-4">Loading...</p>}
      {error && (
        <p className="text-center text-red-500 mt-4">
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
}

export default App;
