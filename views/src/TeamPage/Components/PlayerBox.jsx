// PlayerBox.js
import React from 'react';

const PlayerBox = ({ player, onAddPlayer }) => {
  return (
    <div className="flex justify-between items-center bg-gray-200 p-2 rounded-lg mb-2 shadow-md hover:bg-gray-300 transition duration-300">
      <div className="flex space-x-4">
        <span className="font-semibold">{player.name}</span>
        <span className="text-sm text-gray-700">{player.stats.join(' | ')}</span>
      </div>
      <button 
        onClick={() => onAddPlayer(player)} 
        className="bg-blue-500 text-white text-xs px-2 py-1 rounded shadow-md hover:bg-blue-600 transition duration-300 ease-in-out">
        Add Player
      </button>
    </div>
  );
};

export default PlayerBox;
