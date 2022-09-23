import React from 'react'
import { Link } from 'react-router-dom'

const ButtonNav = ({to = '/',classe = 'button',text}) => {
  return (
    <Link to={to}>
      <button className={classe}>{text}</button>
    </Link>
  )
}

export default ButtonNav