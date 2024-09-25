
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
    const results = players.filter(player => 
      player.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPlayers(results);
  };

  const handleAddPlayer = (player) => {
    console.log(`Added player: ${player.name}`);
    // Logic to add player to another component can go here
  };

  return (
    <div className="flex h-screen">
      {/* <nav className="w-[250px] bg-gray-800 text-white p-4">
        <h3 className="text-xl font-semibold mb-4">Categories</h3>
        <ul>
          <li className="mb-2">
            <button onClick={() => setCategory('Batsmen')} className="w-full text-left p-2 hover:bg-gray-600 transition duration-300 ease-in-out">Batsmen</button>
          </li>
          <li className="mb-2">
            <button onClick={() => setCategory('Bowlers')} className="w-full text-left p-2 hover:bg-gray-600 transition duration-300 ease-in-out">Bowlers</button>
          </li>
          <li>
            <button onClick={() => setCategory('Allrounders')} className="w-full text-left p-2 hover:bg-gray-600 transition duration-300 ease-in-out">Allrounders</button>
          </li>bhbhhbhbhbhhbh
        </ul>
      </nav> */}
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
      </div>
    </div>
  );
};

export default TeamPage;
