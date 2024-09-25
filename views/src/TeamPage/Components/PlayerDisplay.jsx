// PlayerDisplay.js
import React from 'react';
import PlayerBox from './PlayerBox';

const PlayerDisplay = ({ players, onAddPlayer }) => {
  return (
    <div className="mt-8 w-full h-64 overflow-y-auto border-2 border-gray-300 p-4 rounded-lg bg-white shadow-lg">
      {/* Players List */}
      {players.length > 0 ? (
        players.map((player, index) => (
          <PlayerBox 
            key={index} 
            player={player} 
            onAddPlayer={onAddPlayer}
          />
        ))
      ) : (
        <p className="text-gray-500 text-center">No players found based on search criteria</p>
      )}
    </div>
  );
};

export default PlayerDisplay;
