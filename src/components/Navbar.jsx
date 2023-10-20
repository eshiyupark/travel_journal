import React from 'react'
import Globe from '../../public/images/globe.png'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar--content'>
        <img src={Globe} alt="Globe Icon" className='navbar--icon'/>
        <h1 className='navbar--title'>traveljournal.</h1>
      </div>
    </nav>
  )
}
