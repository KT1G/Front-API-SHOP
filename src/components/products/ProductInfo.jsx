import { Link } from 'react-router-dom'
import modalEffects from '../../shared/helpers/modalEffects'
import useModal from '../../shared/hooks/useModal'
import Button from '../../components/Buttons/Button'
import ButtonCancelAccept from '../Buttons/ButtonCancelAccept'
import Message from '../Message'
import Modal from '../Modal/Modal'
import useAuth from '../../shared/hooks/useAuth'
import { useState } from 'react'
import { getBuyProductsService } from '../../shared/services'

import ButtonTo from '../Buttons/ButtonTo'
import Loading from '../Loading'
import { ButtonListActions } from '../Buttons/ButtonListActions'

export const ProductInfo = ({ product }) => {
  const { close, modalOpen, open } = useModal()
  const { user, token } = useAuth()

  const { sliceMid } = modalEffects()
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const text = 'Se le enviará un correo con la solicitud de compra al vendedor.'

  const handleClick = async () => {
    let path = `/products/${product.id}/buy`
    try {
      setLoading(true)
      setError('')
      const data = await getBuyProductsService(path, token)
      setLoading(false)
      setResponse(data.message)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }
  if (loading) return <Loading classe="loader__products" />
 
  if (error)
    return (
      <Modal>
        <Message text={error} />
        <ButtonTo text="Home" classe="modal__button" />
      </Modal>
    )

  return (
    <article className="productInfo__container">
      <header className="productInfo__image__container">
        <img
          className="productInfo__image"
          src={`${process.env.REACT_APP_BACKEND_PUBLIC}/products/${product.user_id}/${product.image}`}
          alt={product.image}
        />
      </header>
      <section className="productInfo__info__container">
        <div>
          <h2 className="productInfo__info__title">
            {product.price} <span>EUR</span>
          </h2>
          <h3 className="productInfo__info__subTitle">{product.name}</h3>
        </div>
        <ButtonListActions open={open} user={user} product={product} />
      </section>
      <footer className="productInfo__footer">
        <p className="productInfo__info__text"> {product.caption}</p>
        <ul className="productInfo__info__list">
          <li>
            <button className="productInfo__footer__button">
              <Link to={`/products/filterBy/category/${product.category}`}>
                {product.category}
              </Link>
            </button>
            <span> / </span>
            <button className="productInfo__footer__button">
              <Link to={`/products/filterBy/name/${product.name}`}>
                {product.name}
              </Link>
            </button>
          </li>
          <li>
            <p>{`❤️ ${product.likes}`}</p>
          </li>
        </ul>
      </footer>
      {modalOpen && (
        <Modal
          classe={'modal__buy'}
          classeBack={'white'}
          variant={sliceMid}
          handleClose={close}
        >
          {!response ? (
            <>
              <Message text={text} />
              <ButtonCancelAccept
                modalOpen={modalOpen}
                close={close}
                handleClick={handleClick}
              />
            </>
          ) : (
            <>
              <Message text={response} />
              <Button
                handleClick={close}
                classe={'button__cancel'}
                text={'close'}
              />
            </>
          )}
        </Modal>
      )}
    </article>
  )
}
