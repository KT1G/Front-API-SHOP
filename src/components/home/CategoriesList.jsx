import useCategories from '../../shared/hooks/useCategories'
import { Categories } from './Categories'
import '../../styles/categories.css'
import { getItem } from 'localforage'
import Loading from '../Loading'
import Modal from '../Modal/Modal'
import ErrorMessage from '../ErrorMessage'
import ButtonTo from '../ButtonTo'

export const CategoriesList = () => {
  const { ranking, loading, error } = useCategories()
  console.log(ranking)

  const totalProducts = ranking
    .slice(0, 5)
    .map((item) => item.total)
    .reduce((acc, el) => acc + el, 0) - 3

  if (loading) return <Loading classe={'loader__products'} />
  if (error) return (
    <Modal>
      <ErrorMessage error={error} />
      <ButtonTo to={'login'} text={'login'} classe={'card__button'} />
    </Modal>
  )
  return (
    <section className="categories__container">
      <h2 className="categories__title"> Mejores Categorias</h2>
      <p className='categories__text'>Mas de {totalProducts} productos en nuestras mejores categorias</p>
      <Categories ranking={ranking} />
      <ButtonTo to='products' text={'¡Ver todos los Productos!'}/>
    </section>
  )
}
