const Card = ({ section, element }) => {
    //img src añadir http://localhost:9000/uploads/products/4/
    return (
        <li className="element">
            <img
                src={`${process.env.REACT_APP_BACKEND_PUBLIC}/${section}/${element.user_id}/${element.image}`}
                alt={element.name}
            />
            <h3>{element.price}</h3>
            <h4>{element.name}</h4>
            <p>{element.caption}</p>
        </li>
    );
};

export default Card;
