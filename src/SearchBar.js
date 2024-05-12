// SearchBar.js
import React, { useState } from 'react';
import { debounce } from 'lodash';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const debouncedSearch = debounce((value) => {
    onSearch(value);
  }, 300); // Adjust the debounce delay as needed

  const handleChange = (event) => {
    const { value } = event.target;
    setQuery(value);
    debouncedSearch(value);
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleChange}
      placeholder="Search for books..."
      className="search-input"
    />
  );
};

export default SearchBar;
