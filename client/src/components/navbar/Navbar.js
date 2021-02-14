import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.scss'
export const Navbar = () => {
 
  return (
    <nav>
      <div className="nav-wrapper">
        <span className="brand-logo">Snake</span>
        <ul className="nav-list">
          <li><NavLink to="/score" className="nav-list__item">TopScore</NavLink></li>
          <li><NavLink to="/auth" className="nav-list__item">Login</NavLink></li>
        </ul>
      </div>
    </nav>
    
  )
}
