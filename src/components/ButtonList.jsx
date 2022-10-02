import React from 'react'
import { useSearchParams } from 'react-router-dom'
import PlusCircle from './Icons/PlusCircle.js'

const ButtonList = ({ text, amount }) => {
  const [params, setParams] = useSearchParams()
  const handleClick = () => {
    if (params.toString() === '') {
      setParams({ location: text })
    } else {
      //si ya esta en la url se borra
      if (params.get('location') === text) {
        params.delete('location')
      } else {
        params.set('location', text)
      }
      setParams(params)
    }
  }

  return (
    <li className="locationSelect__element" onClick={handleClick}>
      <span className="locationSelect__element__textAmount">{'('+ amount + ')'}</span>
      <p className="locationSelect__element__text">{text}</p>
    </li>
  )
}

export default ButtonList
