import { useNavigate, useParams } from 'react-router-dom'
import useProducts from '../../shared/hooks/useProducts'
import ButtonTo from '../Buttons/ButtonTo'
import Message from '../Message'
import Loading from '../Loading'
import Modal from '../Modal/Modal'
import { Products } from './Products'
import '../../styles/productList.css'
import HeaderProducts from './HeaderProducts'
import { Pagination } from './Pagination'
import '../../styles/pagination.css'
import Button from '../Buttons/Button'

export const ProductsList = () => {
  //Recuperara el resultado de la busqueda
  const { products, info, loading, error } = useProducts()
  const navigate = useNavigate()

  if (loading) return <Loading classe="loader__products" />
  if (error)
    return (
      <Modal>
        <Message text={error} />
        <Button handleClick={() => navigate(-1)} text={'Volver'} />
      </Modal>
    )
  return (
    <section className="productList__container">
      <HeaderProducts />
      <Products products={products} />
      <Pagination info={info} />
    </section>
  )
}
