import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'


function Navbar() {

  return (
    
    <div>
        <nav id='navbar'>
          <div id='SV'><u> Sorting </u> <br />
          <u>Visualizer</u></div>
         {/* <span><input type="number" value={number} onChange={handleInputChange} placeholder='Enter the number of bars you want'/></span> <button id='generate' onClick={handleGenerateClick}>START</button> */}
           <div id='Home'><Link to="/Home">Home</Link> </div>
          <div id='abt'><Link to="/About">About</Link> </div>
        </nav>
    </div>
  )
}

export default Navbar
