import { useNavigate, useParams } from 'react-router-dom'
import useProducts from '../../shared/hooks/useProducts'
import ButtonTo from '../ButtonTo'
import Message from '../Message'
import Loading from '../Loading'
import Modal from '../Modal/Modal'
import { Products } from './Products'
import '../../styles/productList.css'
import HeaderProducts from './HeaderProducts'
import { Pagination } from './Pagination'
import '../../styles/pagination.css'


export const ProductsList = () => {
  //Recuperara el resultado de la busqueda
  const { products, info, loading, error } = useProducts()

  //Para navegar entre las paginas
  const navigate = useNavigate()

  //Recuperar el parametro de la url con useParams
  
  const { filter } = useParams()
  if (loading) return <Loading classe="loader__products" />
  if (error)
    return (
      <Modal>
        <Message text={error} />
        <ButtonTo text="Home" classe="modal__button" />
      </Modal>
    )
  return (
    <section className="productList__container">
      <HeaderProducts/>
      <Products products={products} />
      <Pagination info={info} />
    </section>
  )
}
