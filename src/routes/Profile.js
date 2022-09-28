import React from 'react'
import ButtonTo from '../components/ButtonTo'
import NavbarNoLogged from '../components/Header/NavbarNoLogged'
import useAuth from '../shared/hooks/useAuth'

const Profile = () => {
  const {user, logout} = useAuth()
  return user ? <ButtonTo handleclick={logout} text={'Logout'} classe={'profile__button'} /> : <NavbarNoLogged />
}

export default Profile