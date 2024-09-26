// PlayerBox.js
import React from 'react';

const PlayerBox = ({ player, statHeadings }) => {
  return (
    <div className="grid grid-cols-7 gap-4 items-center bg-gray-200 p-2 rounded-lg mb-2 shadow-md hover:bg-gray-300 transition duration-300">
      {/* Player Name */}
      <span className="font-semibold col-span-1">{player.name}</span>
      
      {/* Display stats based on active filters */}
      {statHeadings.map((heading, index) => (
        <span key={index} className="text-sm text-gray-700 col-span-1">
          {player.stats[heading] || 'N/A'} {/* If stat doesn't exist, show 'N/A' */}
        </span>
      ))}
      
      {/* Add Player Button */}
      <button 
        onClick={() => console.log("Add Player:", player.name)} 
        className="bg-blue-500 text-white text-xs px-2 py-1 rounded shadow-md hover:bg-blue-600 transition duration-300 ease-in-out col-span-1">
        Add Player
      </button>
    </div>
  );
};

export default PlayerBox;
