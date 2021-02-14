import React, {useContext} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../../context/AuthContext'
import './NavbarGame.scss'
export const NavbarGame = () => {
 

  const history = useHistory()
  const auth = useContext(AuthContext)

  const logoutHandler = event => {
    event.preventDefault()
    auth.logout()
    history.push('/')
  }

  return (
    <nav>
      <div className="nav-wrapper">
        <span className="brand-logo">Snake</span>
        <ul className="nav-list">
          <li><NavLink to="/score" className="nav-list__item">TopScore</NavLink></li>
          <li><NavLink to="/game" className="nav-list__item">Game</NavLink></li>
          <li><a className="nav-list__item" href="/" onClick={logoutHandler}>Вийти</a></li>
        </ul>
      </div>
    </nav>
    
  )
}
