// TeamPage.js
import React, { useState } from 'react';
import SearchBar from './Components/SearchBar';
import PlayerDisplay from './Components/PlayerDisplay';
import NavBar from '../Components/NavBar';

const TeamPage = () => {
  const [category, setCategory] = useState('Batsmen'); // Default category is 'Batsmen'
  const [players, setPlayers] = useState([]); // Full list of players
  const [filteredPlayers, setFilteredPlayers] = useState([]); // Filtered players based on search and filters

  const handleSearch = (searchTerm, filters) => {
    // Filter logic combining searchTerm and filters
    const filteredResults = players.filter((player) => {
      // Check if player name matches the search term
      const matchesSearchTerm = player.name.toLowerCase().includes(searchTerm.toLowerCase());

      // Apply category-specific filters (like Power, Certainty, etc.)
      const matchesFilters = Object.entries(filters).every(([filter, isChecked]) => {
        if (isChecked) {
          return player.stats[filter] !== undefined;
        }
        return true;
      });

      return matchesSearchTerm && matchesFilters;
    });

    setFilteredPlayers(filteredResults);
  };

  const handleAddPlayer = (player) => {
    console.log(`Added player: ${player.name}`);
    // Logic to add player to another component can go here
  };

  return (
    <div className="flex h-screen">
      {/* Left Navigation Bar */}
      <NavBar type={category} setType={setCategory} />

      {/* Main Content */}
      <div className="w-3/4 p-8">
        {/* Search Bar */}
        <SearchBar 
          players={players} 
          setPlayers={setPlayers} 
          category={category} 
          onSearch={handleSearch} 
        />

        {/* Player Display */}
        <div className="mt-10">
          <PlayerDisplay 
            players={filteredPlayers.length > 0 ? filteredPlayers : players} // Show filtered players if available
            category={category} // Pass the current category to PlayerDisplay for stat headings
            onAddPlayer={handleAddPlayer}
          />
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
