import { useProduct } from '../shared/hooks/useProduct'
import ButtonTo from '../components/Buttons/ButtonTo'
import Loading from '../components/Loading'
import Message from '../components/Message'
import Modal from '../components/Modal/Modal'
import { ProductInfo } from '../components/products/ProductInfo'
import { UserInfo } from '../components/products/UserInfo'
import '../styles/productDetail.css'

export const ProductDetail = () => {
  //Recuperara el resultado de la busqueda
  const { product, ownerUser, loading, error } = useProduct()

  //Guardar el owner user en el localstarage
  localStorage.setItem('ownerUser', JSON.stringify(ownerUser))
  if (loading) return <Loading classe="loader__products" />
  if (error)
    return (
      <Modal>
        <Message text={error} />
        <ButtonTo text="Home" classe="modal__button" />
      </Modal>
    )
  return (
    <div className='page__container'>
      <section className="product__container">
        <UserInfo
          userInfo={ownerUser}
          productId={product?.id}
          productStatus={product?.status}
        />
        <ProductInfo product={product} />
      </section>
    </div>
  )
}
