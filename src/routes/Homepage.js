import { Link } from "react-router-dom"
import { CategoriesList } from "../components/home/CategoriesList"


const Homepage = () => {
  return (
    <section className="homepage___container">
      <CategoriesList />
    </section>
  )
}

export default Homepage
