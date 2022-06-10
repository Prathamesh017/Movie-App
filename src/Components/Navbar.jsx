import React from 'react'
import "./Navbar.css";
// import {useHistory} from "react-router-dom";
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
function Navbar() {
  // const history=useNavigate();
  const navEvent=(e,id)=>{
    
    // console.log(history);
    // if(id===0){history.push()}
    console.log(id);
  }
  return (
    <div className="navbar" > 
        <ul>
          <div className='navbar-center'> 

            <div className="icon-list">
              <p>🔥</p>
            <li><Link to= "/">Trending</Link></li>
            </div>
            
            <div className="icon-list">
              <p>🎥</p>
              <li><Link to= "/movies">Movies</Link></li>
            </div>
            <div className="icon-list">
              <p>📺</p>
              <li><Link to= "/shows">Tv Shows</Link></li>
            </div>
            <div className="icon-list">
              <p>🔎</p>
              <li><Link to= "/search">Search</Link></li>
            </div>
          </div>
        </ul>
    </div>
  )
}

export default Navbar