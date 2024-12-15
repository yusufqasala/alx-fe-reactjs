import { useState } from 'react';
import PropTypes from 'prop-types';

function SearchComponent({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter GitHub username..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

SearchComponent.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchComponent;
