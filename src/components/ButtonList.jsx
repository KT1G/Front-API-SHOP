import React from 'react'
import PlusCircle from './Icons/PlusCircle.js'

const ButtonList = ({ text,amount }) => {
  const handleClick = () => {}

  return (
    <li className="locationSelect__element" onClick={handleClick}>
      <span className="locationSelect__element__textAmount">{'('+ amount + ')'}</span>
      <p className="locationSelect__element__text">{text}</p>
    </li>
  )
}

export default ButtonList
