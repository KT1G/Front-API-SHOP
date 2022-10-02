import React from 'react'
import { useSearchParams } from 'react-router-dom'
import PlusCircle from './Icons/PlusCircle.js'

const ButtonListCategory = ({ text }) => {
  const [params, setParams] = useSearchParams()
  const handleClick = () => {
    if (params.toString() === '') {
      setParams({ category: text })
    } else {
      //si la categoria es igual a la que esta en la url se borra
      if (params.get('category') === text) {
        params.delete('category')
      } else {
        params.set('category', text)
      }
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
