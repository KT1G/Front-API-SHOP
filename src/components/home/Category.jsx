import { Link } from "react-router-dom"

export const Category = ({category}) => {
    // Cada category devuelve un li con Link a su ruta correspondiente
    return (
        <li>
            <Link to={`/products/filterBy/category/${category}`} >
                {category}
            </Link>
        </li>
    )
}