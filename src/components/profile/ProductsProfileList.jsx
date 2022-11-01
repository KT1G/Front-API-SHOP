import useProfileProducts from "../../shared/hooks/useProfileProducts";
import ButtonTo from "../Buttons/ButtonTo";
import Loading from "../Loading";
import Message from "../Message";
import Modal from "../Modal/Modal";
import "../../styles/productList.css";
import { Products } from "../products/Products";
import useProducts from "../../shared/hooks/useProducts";
import { useParams } from "react-router-dom";
import { Pagination } from "../products/Pagination";
import HeaderProducts from "../products/HeaderProducts";

export const ProductsProfileList = () => {
  const { id } = useParams();
  const { products, info, loading, error } = useProducts(
    (location) => `/products/filterBy/userId/${id}${location.search}`
  );

  if (products.length === 0 && loading)
    return <Loading classe="loader__products" />;
  if (error)
    return (
      <Modal>
        <Message text={error} />
        <ButtonTo text="Home" classe="modal__button" />
      </Modal>
    );
  return (
    <section className="productProfileList__container">
      <HeaderProducts />
      <Products
        products={products}
        nextPage={info.nextPage}
        totalProducts={info.totalObject}
      />
      <Pagination info={info} />
    </section>
  );
};
