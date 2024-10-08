// SearchBar.js
import React, { useState } from 'react';
import FilterDropdown from './FilterDropdown';

const SearchBar = ({ category, onSearch, players, setPlayers }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({});

  const [showFilters, setShowFilters] = useState(false);

  async function handleSearch() 
  {
    const params = new URLSearchParams({
      search: searchTerm,
      filter: JSON.stringify(filters),
      type: category
  });


  const toggleFilterDropdown = () => {
    setShowFilters((prev) => !prev);
  };

const toggleFilterDropdown = () => {
  setShowFilters((prev) => !prev);
};

  return (
    <div className="mb-8">
      {/* Search and Filter Section */}
      <div className="flex items-center justify-between mb-4 space-x-4">
        {/* Search by Player Name */}
        <input 
          type="text" 
          placeholder="Search by player name..." 
          className="border border-gray-300 p-2 rounded-lg w-full shadow-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button 
          onClick={toggleFilterDropdown}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out">
          Filters
        </button>
        
        {/* Filter Button */}
        <button 
          onClick={toggleFilterDropdown}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out">
          Filters
        </button>

        {/* Search Button */}
        <button 
          onClick={handleSearch}
          className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-300 ease-in-out">
          Search
        </button>
      </div>

      {showFilters && (
        <FilterDropdown 
          category={category} 
          selectedFilters={filters} 
          onChange={setFilters} 
        />
      )}
    </div>
  );
};

export default SearchBar;
