// SelectedPlayers.jsx
import React from 'react';
import CardSelect from './CardSelect';

async function remove(name) {
  
    const response = await fetch('/api/removeplayers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(name),
    });
  
  
}





const SelectedPlayers = ({ selected, setSelected }) => {
  console.log("selected: ", selected); // Corrected logging format
  
  return (
    <div className='mt-2 font-bold'>
      Selected Players
      <div className='flex gap-2 overflow-x-auto'>
        {
          selected.map((obj, index) => ( // Changed key to use index
            <CardSelect player={obj} key={index} removePlayer={() => {
              setSelected(selected.filter(item => item !== obj));

              remove(obj.name)

            }} />
          ))
        }
      </div>
    </div>
  );
}

export default SelectedPlayers;
