import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search GitHub user..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

// Define PropTypes for the component
SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
