import { Link } from 'react-router-dom'

export const ProductInfo = ({ product }) => {
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
        <button className="pruductInfo__info__button">Comprar</button>
      </section>
      <footer className="productInfo__footer">
        <p className="productInfo__info__text"> {product.caption}</p>
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
      </footer>
    </article>
  )
}
