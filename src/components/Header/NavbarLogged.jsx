import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../shared/hooks/useAuth'
import { ProductsList } from '../products/ProductsList'

const NavbarLogged = ({ logout }) => {
  //recuperar el usuario del contexto de autenticación
  const { user } = useAuth()
  return (
    <ul className="navbar__list">
      <li className="navbar__list__item">
        <Link to="">Add</Link>
      </li>
      <li className="navbar__list__item">
        <Link to={`/likes/filterBy/loverId/${user.id}`} onClick={() => {return <ProductsList />}}>Likes</Link>
      </li>
      <li className="navbar__list__item">
        <Link to="/" onClick={() => logout()}>
          Logout
        </Link>
      </li>
    </ul>
  )
}

export default NavbarLogged
