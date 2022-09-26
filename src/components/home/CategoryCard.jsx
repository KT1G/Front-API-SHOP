import { Link } from "react-router-dom"

export const CategoryCard = ({ category, total }) => {
    // Cada category devuelve un li con Link a su ruta correspondiente
    return (
        <li>
            <Link to={`/products/filterBy/category/${category}`} >
                <img
                    src={`${process.env.REACT_APP_BACKEND_PUBLIC}/categories/${category}.png`}
                    alt={category}
                />
                <h3>{`${category}`}</h3>
                <p>{total} products</p>
            </Link>
        </li>
    )
}