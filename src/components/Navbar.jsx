import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <ul className='navbar--list'>
      <li className='navbar--list__item'>
        <Link to="/register">Register</Link>
      </li>
      <li className='navbar--list__item'>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  )
}

export default Navbar