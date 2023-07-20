import React from 'react'
import './nav.scss'

function Nav() {
  return (
    <div className='main-container'>
      <div className='nav-container'>
          <h2>Pailodze.dev</h2>
          <ul>
              <li><a href='#Skills'>Skills</a></li>
              <li><a href='#Projects'>Projects</a></li>
          </ul>
          <a href='#contact'>
              <button className='contact'>Contact</button>
          </a>
      </div>
    </div>
  )
}

export default Nav