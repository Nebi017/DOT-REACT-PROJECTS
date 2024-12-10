import React from 'react'
import './index.css'
import {useNavigate} from 'react-router-dom'
function Enterprise() {
    const navigate = useNavigate();
  return (
    <>
        <div className='Content'>
           <p> Enterprise Page</p> 
            
           <button onClick={()=>navigate('/')}>Go back</button>
      
        </div>
    </>
  )
}

export default Enterprise