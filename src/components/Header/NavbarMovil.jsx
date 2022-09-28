import { motion } from 'framer-motion'
import React from 'react'
import useAuth from '../../shared/hooks/useAuth'
import ButtonList from '../ButtonList'
import HeartMovil from '../Icons/HeartMovil'
import Home from '../Icons/Home'
import Mail from '../Icons/Mail'
import MeMovil from '../Icons/MeMovil'
import PlusCircleMovil from '../Icons/PlusCircleMovil'
import useNavMovilLinks from '../../shared/hooks/useLinks'

const NavbarMovil = () => {
  const { user } = useAuth()
  const buttons = ['Inicio', 'Favoritos', 'Subelo', 'Mail', 'Perfil']
  const { selectLinkTo, selected, setSelected } = useNavMovilLinks(buttons)

  let fillContent = null
  let linkClass = null
  let text = null

  return (
    <nav className="navbar--movil__container">
      <ul className="navbar--movil__list">
        {buttons.map((buttonNav) => {
          linkClass = selected === buttonNav ? 'selected' : ''
          fillContent = selected === buttonNav ? '#FF6B67' : 'white'
          text = buttons.find((el) => el === buttonNav)

          const render = {
            Inicio: <Home fill={fillContent} />,
            Favoritos: <HeartMovil fill={fillContent} />,
            Subelo: <PlusCircleMovil fill={fillContent} />,
            Mail: <Mail fill={fillContent} />,
            Perfil: <MeMovil fill={fillContent} />,
          }

          return (
            <ButtonList
              key={buttonNav}
              render={() => setSelected(buttonNav)}
              to={selectLinkTo(user, buttonNav)}
              classe={`navbar--movil__list__item ${linkClass}`}
              text={text}
            >
              {render[buttonNav]}
              {selected === buttonNav ? (
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
