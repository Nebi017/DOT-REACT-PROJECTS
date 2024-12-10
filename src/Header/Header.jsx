import React from 'react';
import './Header.css'
import {NavLink} from 'react-router-dom'


export const  Header =()=>{
    return(
       <>
            
           <nav>
            <h2>Company name</h2>
            
          <NavLink to='/'>Home</NavLink>
          <NavLink to='enterprise'>Enterprise</NavLink>
          <NavLink to='features'>Features</NavLink>
          <NavLink to='support'>Support</NavLink>

            
           </nav>
          
          
            <hr />
       </>
         
    );
    }

    export default Header;
