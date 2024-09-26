// CardSelect.jsx
import React from 'react';

const CardSelect = ({ player, removePlayer }) => { // Corrected prop name to match SelectedPlayers

  console.log("player: ", player); // Corrected logging format

  return (
    <div className="min-w-[200px] bg-white rounded-lg shadow-md p-4 m-2 flex flex-col justify-between">
      <h3 className="text-lg font-semibold mb-2">{player.name}</h3> {/* Corrected access to player object */}
      <button
        className="bg-red-500 text-white rounded-md px-4 py-2 hover:bg-red-600 transition"
        onClick={removePlayer} // Removed unnecessary arrow function
      >
        Delete
      </button>
    </div>
  );
};

export default CardSelect;
