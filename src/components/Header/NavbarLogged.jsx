import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../shared/hooks/useAuth'
import ButtonList from '../ButtonList'
import Heart from '../Icons/Heart'
import MeSvg from '../Icons/Me'
import PlusCircle from '../Icons/PlusCircle'


const NavbarLogged = ({ logout }) => {
  //recuperar el usuario del contexto de autenticación
  const { user } = useAuth()

  return (
    <ul className="navbar--logged__list">
      <ButtonList
        to={`/likes/filterBy/loverId/${user.id}`}
        text={'Favoritos'}
        classe={'navbar--logged__list__item'}
      >
        <Heart />
      </ButtonList>
      <ButtonList
        to={`/profile`}
        text={'Tú'}
        classe={'navbar--logged__list__item'}
      >
        <MeSvg />
      </ButtonList>
      <ButtonList
        to={`/`}
        onClick={() => logout()}
        text={'Product'}
        classe={'navbar--logged__list__item'}
      >
        <PlusCircle />
      </ButtonList>
    </ul>
  )
}

export default NavbarLogged
