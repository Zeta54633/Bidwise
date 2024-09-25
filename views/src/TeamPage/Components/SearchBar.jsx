// SearchBar.js
import React, { useState } from 'react';
import FilterDropdown from './FilterDropdown';

const SearchBar = ({ category, onSearch,players,setPlayers }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({});

  const handleSearch = () => {
    // onSearch(searchTerm, filters);
    //API, get the data, whatever
    //[{name:'smthg',avg:347289},{name:'smthgelse'}]
    setPlayers(whatever)
    
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
        
        {/* Search Button */}
        <button 
          onClick={handleSearch}
          className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-300 ease-in-out">
          Search
        </button>
      </div>

      {/* Filters Section */}
      <FilterDropdown 
        category={category} 
        selectedFilters={filters} 
        onChange={setFilters} 
      />
    </div>
  );
};

export default SearchBar;
