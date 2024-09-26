// PlayerDisplay.js
import React from 'react';
import PlayerBox from './PlayerBox';

const filterOptions = {
  Batsmen: ['Power', 'Certainty', 'SR', 'Finishing', 'Boundary Hit', 'Match Impact'],
  Bowlers: ['Pace', 'Spin', 'Economy', 'Wickets', 'Average'],
  Allrounders: ['Batting Avg', 'Bowling Avg', 'Power', 'Certainty', 'Versatility'],
};

const PlayerDisplay = ({ players, category }) => {
  // Get the filters based on the category selected
  const statHeadings = filterOptions[category] || [];

  return (
    <div className="mt-8 w-[1200px] h-64 overflow-y-auto border-2 border-gray-300 p-4 rounded-lg bg-white shadow-lg">
      {/* Header for Player Data */}
      <div className="grid grid-cols-8 gap-1 font-bold text-gray-900 mb-4">
        <span className="col-span-1">Name</span>
        {statHeadings.map((stat, index) => (
          <span key={index} className="col-span-1">{stat}</span>
        ))}
        <span className="col-span-1">Actions</span>
      </div>

      {/* Players List */}
      {players.length > 0 ? (
        players.map((player, index) => (
          <PlayerBox 
            key={index} 
            player={player} 
            statHeadings={statHeadings}  // Pass filter names as stat headings
          />
        ))
      ) : (
        <p className="text-gray-500 text-center">No players found based on search criteria</p>
      )}
    </div>
  );
};

export default PlayerDisplay;
