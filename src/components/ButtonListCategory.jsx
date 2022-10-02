import React from 'react'
import { useSearchParams } from 'react-router-dom'
import PlusCircle from './Icons/PlusCircle.js'

const ButtonListCategory = ({ text }) => {
  const [params, setParams] = useSearchParams()
  const handleClick = () => {

    if (params.toString() === '') {
      setParams({ category: text })
    } else {
      params.set('category', text)
      setParams(params)
    }
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

export default ButtonListCategory
