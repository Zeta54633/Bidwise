
// TeamPage.js
import React, { useState } from 'react';
import SearchBar from './Components/SearchBar';
import PlayerDisplay from './Components/PlayerDisplay';
import NavBar from '../Components/NavBar'
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';



const TeamPage = () => {
  const [category, setCategory] = useState('Batsmen');
  const [players, setPlayers] = useState([])
  const [selected,setSelected]=useState([]);
  
    const [filteredPlayers, setFilteredPlayers] = useState([]);

  const handleSearch = (searchTerm, filters) => {
    // Filter logic combining searchTerm and filters
    const results = players.filter(player => 
      player.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPlayers(results);
  };

  async function handleAddPlayer(player) 
  {
    const params = new URLSearchParams({
      play: player.name,
  });

  try {
    const response = await fetch(`api/addplayers?${params}`);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();

    console.log("data : "+data.data);
    
    // Assuming `data.players` contains the players array

    setSelected(data.data)

  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
  };

  return (
    <div className="flex h-screen">

      <NavBar type={category} setType={setCategory}/>

      {/* Main Content */}
      <div className="w-3/4 p-8">
        <SearchBar players={players} setPlayers={setPlayers} category={category} onSearch={handleSearch} />
        
        <div className="mt-10">
          <PlayerDisplay 
            players={players} // Combine players and search results in one box
            onAddPlayer={handleAddPlayer}
          />
        </div>
        <SelectedPlayers selected={selected} setSelected={setSelected} />
      </div>
    </div>
  );
};

export default TeamPage;
