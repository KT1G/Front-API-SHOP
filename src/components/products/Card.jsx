import { Link } from "react-router-dom";

const Card = ({ section, element }) => {
    //img src añadir http://localhost:9000/uploads/products/4/
    return (
      <li className="productList__element">
        <Link to={`/${section}/filterBy/id/${element.id}`}>
          <img
          className="productList__element__image"
          src={`${process.env.REACT_APP_BACKEND_PUBLIC}/${section}/${element.user_id}/${element.image}`}
          alt={element.name}
          />  
          <h3 className="productList__element__title">{element.price + "€"}</h3>
          <h4 className="productList__element__subTitle">{`${element.name} | ${element.category} | ${element.location}`}</h4>
          <p className="productList__element__text">{element.caption}</p>
        </Link>
      </li>
    )
};

export default Card;
