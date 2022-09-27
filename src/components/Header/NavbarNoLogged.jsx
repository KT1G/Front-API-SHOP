import React from 'react'
import { Link } from 'react-router-dom'
import ButtonList from '../ButtonList'


const NavbarNoLogged = () => {
  return (
    <ul className="navbar__list">
      <ButtonList to={"register"} text={ "Register"} />
      <ButtonList to={"login"} text={ "Login"} />
    </ul>
  )
}

export default NavbarNoLogged