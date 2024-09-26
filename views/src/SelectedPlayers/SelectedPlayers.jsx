import React from 'react'
import selectedplayers from '../selectedplayers'
import CardSelect from './CardSelect'
const SelectedPlayers = ({selected,setSelected}) => 
{
  
  return (
    <div className='mt-2 font-bold'>
      Selected Players
      <div className='flex gap-2 overflow-x-hidden'>
        {
          selected.map((obj,_)=>(
            <CardSelect player={obj} key={_}/>
          ))
        }

      </div>

    </div>
  )
}

export default SelectedPlayers
