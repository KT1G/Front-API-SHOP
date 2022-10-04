import useAuth from "../shared/hooks/useAuth"
import { deleteProductService } from "../shared/services"

export const ButtonDelete = ({ productId}) => {
    const {token} = useAuth()
    const handleClick = () => {
        deleteProductService(productId, token)
    }
    return (
        <li>
            <button onClick={handleClick} className="pruductInfo__info__button">Borrar</button>
        </li>
    )
}