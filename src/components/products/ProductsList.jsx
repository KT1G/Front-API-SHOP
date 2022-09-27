import { useNavigate, useParams } from "react-router-dom";
import Homepage from "../../routes/Homepage";
import useProducts from "../../shared/hooks/useProducts";
import ButtonTo from "../ButtonTo";
import ErrorMessage from "../ErrorMessage";
import Loading from "../Loading";
import Modal from "../Modal/Modal";
import { Products } from "./Products";
import '../../styles/productList.css'


export const ProductsList = () => {
    //Recuperara el resultado de la busqueda
    const { products, info, loading, error } = useProducts();
    
    //Para navegar entre las paginas
    const navigate = useNavigate();

    //Recuperar el parametro de la url con useParams
    console.log(products);
    console.log(info);
    const { filter } = useParams();
    console.log(filter);
    if (loading) return <Loading classe={"loader__products"}/>
    if (error) return (
      <Modal>
        <ErrorMessage error={error} />
        <ButtonTo  text={'Home'} classe={'card__button'} />
      </Modal>
    )
    return (
        <section className="productList__container">
            <header className="producList__header">
                <nav className="productList__header__nav">
                    <button onClick={() => info.prevPage && navigate(info.prevPage)}>Prev</button>
                    <h1>Products List: {filter}</h1>
                    <button onClick={() => info.nextPage && navigate(info.nextPage)}>Next</button>
                </nav>
            </header>
            <Products products={products} />
        </section>
    )
}