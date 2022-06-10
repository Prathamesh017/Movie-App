import React from 'react'
import "./Header.css";
function Header() {
  return (
    <h1 className='header' onClick={()=>{window.scroll(0,0)}}> 🎥 Movie App</h1>
  )
}

export default Header