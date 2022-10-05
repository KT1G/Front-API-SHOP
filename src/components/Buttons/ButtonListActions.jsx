import { ButtonDelete } from "./ButtonDelete"

export const ButtonListActions = ({ open, user, product }) => {
    console.log('esto es el product', product )
    return(
        <ul className="pruductInfo__list__button">
            {(user && user.id !== product.user_id && product.status !== 'bought') && (
                <li>
                    <button onClick={open} className="pruductInfo__info__button">Comprar</button>
                </li>
            )}
            {user && (user.id === product.user_id || user.status === 'admin') && (
                <>
                    <li>
                        <button className="pruductInfo__info__button">
                        Editar
                        </button>
                    </li>
                    <ButtonDelete productId={product.id} />
                </>
            )}
        </ul>
    )
}