import {motion} from 'framer-motion'
import React from 'react'
import { useState } from 'react'
import useAuth from '../../shared/hooks/useAuth'
import ButtonList from '../ButtonList'
import HeartMovil from '../Icons/HeartMovil'
import Home from '../Icons/Home'
import Mail from '../Icons/Mail'
import MeMovil from '../Icons/MeMovil'

import PlusCircleMovil from '../Icons/PlusCircleMovil'

const NavbarMovil = () => {
  const { user } = useAuth()
  const [selected, setSelected] = useState()

  const elementos = ['Inicio', 'Favoritos', 'Subelo', 'Mail', 'Perfil']

  const links = {
    Inicio: '/',
    Favoritos: `/likes/filterBy/loverId/${user?.id}`,
    Subelo: '/products',
    Mail: '/',
    Perfil: '/profile',
  }
  

  const text = {
    Inicio: 'Inicio',
    Favoritos: `Favoritos`,
    Subelo: 'Subelo',
    Mail: 'mail',
    Perfil: 'perfil',
  }
  let fillContent = null
  let linkClass = null

  return (
    <nav className="navbar--movil__container">
      <ul className="navbar--movil__list">
        {elementos.map((link) => {
          linkClass = selected === link ? 'selected' : ''
          fillContent = selected === link ? '#FF6B67' : 'white'

          const render = {
            Inicio: <Home fill={fillContent} />,
            Favoritos: <HeartMovil fill={fillContent} />,
            Subelo: <PlusCircleMovil fill={fillContent} />,
            Mail: <Mail fill={fillContent} />,
            Perfil: <MeMovil fill={fillContent} />,
          }

          return (
            <ButtonList
            key={link}
            render={() => setSelected(link)}
            to={user ? links[link]:'login'}
            classe={`navbar--movil__list__item ${linkClass}`}
            text={text[link]}
            >
              {render[link]}
              {selected === link ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </ButtonList>
           
          )
        })}
      </ul>
    </nav>
  )
}

export default NavbarMovil
