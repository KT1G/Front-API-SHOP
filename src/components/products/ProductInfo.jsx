import { Link } from "react-router-dom"

export const ProductInfo = ({ product }) => {
    return (
        <article>
            <h2>Product Info</h2>
            <header>
                <img src={`${process.env.REACT_APP_BACKEND_PUBLIC}/products/${product.user_id}/${product.image}`} alt={product.image} />
            </header>
            <section>
                <h3>{product.price}</h3>
                <h4>{product.name}</h4>
                <p>{product.caption}</p>
            </section>
            <footer>
                <button>
                    <Link to={`/products/filterBy/category/${product.category}`}>{product.category}</Link>
                </button>
                <button>
                    <Link to={`/products/filterBy/name/${product.name}`}>{product.name}</Link>
                </button>
            </footer>
        </article>
    )
}