import React from 'react'
import '../styles/link.css'

import { Link } from 'react-router-dom'

const ButtonList = ({ to = '/', render, text, classe, children, }) => {
  return (
    <li className={!classe ? 'navbar__list__item' : classe}>
      <Link
        className='link'
        to={to}
        onClick={!render ? null : render}
      >
        {children}
        {text}
      </Link>
    </li>
  )
}

export default ButtonList
