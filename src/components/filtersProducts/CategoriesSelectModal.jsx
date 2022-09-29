import React from 'react'
import useCategories from '../../shared/hooks/useCategories'
import ButtonList from '../ButtonList'
import ButtonTo from '../ButtonTo'
import Loading from '../Loading'
import Message from '../Message'
import '../../styles/categoriesSelectModal.css'
import useModal from '../../shared/hooks/useModal'
import Modal from '../../components/Modal/Modal'

const CategoriesSelectModal = ({ close, modalOpen }) => {
  const { ranking, loading, error } = useCategories()

  if (loading) return <Loading classe={'categoriesSelect__loader'} />
  if (error)
    return (
      <Modal>
        <Message text={error} />
        <ButtonTo to={'login'} text={'login'} classe={'modal__button'} />
      </Modal>
    )
  return (
    <section className="categoriesSelect__container">
      <h3 className="categoriesSelect__title">Categorías</h3>
      <ul className="categoriesSelect__list">
        {ranking.map((el) => {
          return <ButtonList text={el.category} />
        })}
      </ul>
      <button onClick={modalOpen && close} className="categoriesSelect__button">Cancelar</button>
    </section>
  )
}

export default CategoriesSelectModal
