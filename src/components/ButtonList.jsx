import React from 'react'
import PlusCircle from './Icons/PlusCircle.js'

const ButtonList = ({ text }) => {
  const handleClick = () => {
   
  }

  
  return (
    <li className="categoriesSelect__element" onClick={handleClick}>
      <span className="categoriesSelect__element__image">
        <PlusCircle />
      </span>
      <p className="categoriesSelect__element__text">{text}</p>
    </li>
  )
}

export default ButtonList
