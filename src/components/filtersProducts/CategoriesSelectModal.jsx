import React from 'react'
import useCategories from '../../shared/hooks/useCategories'
import ButtonListCategory from '../ButtonListCategory'
import ButtonTo from '../ButtonTo'
import Loading from '../Loading'
import Message from '../Message'
import '../../styles/categoriesSelectModal.css'
import Modal from '../../components/Modal/Modal'

const CategoriesSelectModal = ({ close, modalOpen }) => {
  const { ranking, loading, error } = useCategories()
  console.log(ranking)

  if (loading) return <Loading classe={'categoriesSelect__loader'} />
  if (error)
    return (
      <Modal>
        <Message text={error} />
        <ButtonTo to={'/'} text={'Home'} classe={'modal__button'} />
      </Modal>
    )
  return (
    <section className="categoriesSelect__container">
      <h3 className="categoriesSelect__title">Categorías</h3>
      <ul className="categoriesSelect__list">
        {ranking.map((el) => {
          return <ButtonListCategory text={el.category} />
        })}
      </ul>
      <button onClick={modalOpen && close} className="categoriesSelect__button">Cancelar</button>
    </section>
  )
}

export default CategoriesSelectModal

