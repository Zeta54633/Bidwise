// TeamPage.js
import React, { useState } from 'react';
import SearchBar from './Components/SearchBar';
import PlayerDisplay from './Components/PlayerDisplay';
import NavBar from '../Components/NavBar';

const TeamPage = () => {

  const [category, setCategory] = useState('Batsmen');
  const [players, setPlayers] = useState([])
  const [selected,setSelected]=useState([]);
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


  async function handleAddPlayer(player) 
  {
    const params = new URLSearchParams({
      play: player.name,
      table: category
  });

  try {
    const response = await fetch(`api/addplayers?${params}`);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const d = await response.json();

    let plat = d.data

    console.log("data : "+ plat[plat.length-1].name );
    
    // Assuming `data.players` contains the players array

    setSelected(plat)

  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
  };

  return (
    <div className="flex h-screen">

      <NavBar type={category} setType={setCategory}/>


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

        <SelectedPlayers selected={selected} setSelected={setSelected} />

      </div>
    </div>
  );
};

export default TeamPage;
