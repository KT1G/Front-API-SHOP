import { useNavigate, useParams } from "react-router-dom";
import useProducts from "../../shared/hooks/useProducts";
import { Products } from "./Products";

export const ProductsList = () => {
    //Recuperara el resultado de la busqueda
    const { products, info, loading, error } = useProducts();
    
    //Para navegar entre las paginas
    const navigate = useNavigate();

    //Recuperar el parametro de la url con useParams
    console.log(products);
    console.log(info);
    const { category } = useParams();
    console.log(category);
    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>
    return (
        <section>
            <header className="header__container">
                <nav className="navbar--list">
                    <button onClick={() => info.prevPage && navigate(info.prevPage)}>Prev</button>
                    <h1>Products List: {category}</h1>
                    <button onClick={() => info.nextPage && navigate(info.nextPage)}>Next</button>
                </nav>
            </header>
            <Products products={products} info={info} />
        </section>
    )
}