import React from 'react'
import selectedplayers from '../selectedplayers'
const SelectedPlayers = () => {
  const removePlayer = selectedplayers((state) => state.removePlayer);
    const listSelected = selectedplayers((state) => state.players);
  return (
    <div className='mt-2 font-bold'>
      Selected Players
      <div className='flex gap-2 overflow-x-hidden'>
        {
          listSelected.map((obj,_)=>(
            <CardSelect removePlayer={removePlayer} key={_}/>
          ))
        }

      </div>

    </div>
  )
}

export default SelectedPlayers
