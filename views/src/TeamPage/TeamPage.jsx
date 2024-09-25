import React, { useState } from 'react'
import NavBar from '../Components/NavBar'


const TeamPage = () => {
    const [type,setType]=useState('batsman')

  return (
    <div className='flex'>
        <NavBar type={type} setType={setType}/>
        

    </div>
  )
}

export default TeamPage
