import { Link } from "react-router-dom"
import { CategoriesList } from "../components/home/CategoriesList"


const Homepage = () => {
  return (
    <section>
      <CategoriesList />
      <button><Link to='/products' >All Products</Link></button>
    </section>
  )
}

export default Homepage
