import React from 'react'
import { Link } from 'react-router-dom'

const NavbarLogged = ({ logout }) => {
  return (
    <ul>
      <li>
        <Link to="/" onClick={() => logout()}>
          Logout
        </Link>
      </li>
    </ul>
  )
}

export default NavbarLogged
