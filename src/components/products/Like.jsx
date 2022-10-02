import useAuth from "../../shared/hooks/useAuth"
import { ButtonWithoutLike } from "../ButtonWithoutLike"
import { ButtonWithLike } from "../ButtonWithLike"
import { deleteLikeService, postLikeService } from "../../shared/services"

export const Like = ({ productId, liked, setLiked }) => {
    console.log(productId);
    //recuperar el token del contexto de autenticación
    const { token } = useAuth() //todo: No me llegan datos del 
    console.log(token);
    const handleClick = () => {
        //Si liked es true llamar a la funcion de deleteLikeService y pasarle el productId y el token y cambiar el estado de liked a false y viceversa
        if (liked) {
            deleteLikeService(productId, token)
            setLiked(false)
        } else {
            postLikeService(productId, token)
            setLiked(true)
        }
    }
    return (
        <li>
            {liked ? <ButtonWithLike onClick={handleClick} /> : <ButtonWithoutLike onClick={handleClick} />}
        </li>
    )
}