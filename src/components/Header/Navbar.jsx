import React from 'react'
import useAuth from '../../shared/hooks/useAuth'
import '../../styles/navbar.css'
import NavbarLogged from './NavbarLogged'
import NavbarNoLogged from './NavbarNoLogged'

const Navbar = () => {

  const { user, logout } = useAuth()
  console.log("mensaja desde el navbar" + user)
  
  return (
    user ? <NavbarLogged logout={logout} /> : <NavbarNoLogged/>
  )
}

export default Navbar