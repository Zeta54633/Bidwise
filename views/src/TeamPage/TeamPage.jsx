// TeamPage.js
import React, { useState } from 'react';
import SearchBar from './Components/SearchBar';
import PlayerDisplay from './Components/PlayerDisplay';
import NavBar from '../Components/NavBar'



const TeamPage = () => {
  const [category, setCategory] = useState('Batsmen');
  const [players, setPlayers] = useState([])
    const [filteredPlayers, setFilteredPlayers] = useState([]);

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
    
    addPlayer(player);
    console.log('new global state ',pl);
    
    
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
        <SelectedPlayers players={pl} />
      </div>
    </div>
  );
};

export default TeamPage;
