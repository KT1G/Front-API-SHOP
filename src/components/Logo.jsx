import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo2.png'

const Logo = () => {
  return (
    <Link to="/">
      <img className="header__logo" src={logo} alt="logo" />
    </Link>
  )
}

export default Logo