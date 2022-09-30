import React from 'react'
import useCities from '../../shared/hooks/useCities'
import ButtonList from '../ButtonList'
import ButtonTo from '../ButtonTo'
import Loading from '../Loading'
import Message from '../Message'
import Modal from '../Modal/Modal'
import '../../styles/locationSelect.css'

const LocationSelectModal = ({ close, modalOpen }) => {
  const { location, error, loading } = useCities()
  console.log(location)

  if (loading) return <Loading classe={'categoriesSelect__loader'} />
  if (error)
    return (
      <Modal>
        <Message text={error} />
        <ButtonTo to={'/'} text={'Home'} classe={'modal__button'} />
      </Modal>
    )
  return (
    <section className="locationSelect__container">
      <h3 className="locationSelect__title">Ciudades</h3>
      <ul className="locationSelect__list">
        {location.map((el, index) => {
          return <ButtonList key={index} text={el.location} amount={el.total} />
        })}
      </ul>
      <section className="locationSection__footer__container">
        <button
          onClick={modalOpen && close}
          className="locationSelect__footer__button "
        >
          Cancelar
        </button>
    
      </section>
    </section>
  )
}

export default LocationSelectModal
