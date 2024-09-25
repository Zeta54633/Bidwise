import NavBar from '../Components/NavBar'
import { useState } from 'react'
const TalentScout = () => {
    const [type,setType]=useState('batsman')
  return (
    <div className='flex'>
      <NavBar type={type} setType={setType}/>

    </div>
  )
}

export default TalentScout
