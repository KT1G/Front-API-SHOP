import React from 'react'
import { Link } from 'react-router-dom'

const NavbarNoLogged = () => {
  return (
    <ul className="navbar__list">
      <li className="navbar__list__item">
        <Link to="/register">Register</Link>
      </li>
      <li className="navbar__list__item">
        <Link to="/login">Login</Link>
      </li>
    </ul>
  )
}

export default NavbarNoLogged