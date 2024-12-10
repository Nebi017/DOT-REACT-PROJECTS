import React from 'react'
import './index.css'
import {useNavigate} from 'react-router-dom'

function Support() {
    const navigate = useNavigate();

  return (
    <>
        <div className='Content'>
            Support Page
        </div>
       <div className='btn'>
     <button onClick={()=>navigate('/')}>Go back</button>
      </div>
    </>
  )
}

export default Support