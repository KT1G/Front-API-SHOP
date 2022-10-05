import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import ButtonTo from '../Buttons/ButtonTo'

const Card = ({ section, element }) => {
  const [includeUser, setIncludeUser] = useState(false)
  const location = useLocation().search
  
  useEffect(() => {
    location.includes('user') ? setIncludeUser(true) : setIncludeUser(false)

   }, [element.id, location])

  //img src añadir http://localhost:9000/uploads/products/4/
  console.log('esto es el producto', element.status)
  return (
    <li className="productList__element">
      <Link to={`/${section}/filterBy/id/${element.id}`}>
        <div className="productList__image__container">
          <img
            className="productList__element__image"
            src={`${process.env.REACT_APP_BACKEND_PUBLIC}/${section}/${element.user_id}/${element.image}`}
            alt={element.name}
          />

          {element.status === 'bought' && !includeUser && (
            <ButtonTo to={`users/score/${element.id}` } classe={'productList__button'} text={'Valorar'} />
          )}
        </div>
        <h3 className="productList__element__title">{element.price + '€'}</h3>
        <h4 className="productList__element__subTitle">{`${element.name} | ${element.category} | ${element.location}`}</h4>
        <p className="productList__element__text">{element.caption}</p>
      </Link>
    </li>
  )
}

export default Card
