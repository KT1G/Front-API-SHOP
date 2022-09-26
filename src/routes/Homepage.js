import { Link } from "react-router-dom"
import { BestCatergories } from "../components/home/BestCatergories"


const Homepage = () => {
  return (
    <section>
      <BestCatergories />
      <button><Link to='/products' >All Products</Link></button>
    </section>
  )
}

export default Homepage
