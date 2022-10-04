import { ButtonWithoutLike } from "../ButtonWithoutLike"
import { ButtonWithLike } from "../ButtonWithLike"
import { deleteLikeService, postLikeService } from "../../shared/services"
import '../../styles/like.css'
import { useLike } from "../../shared/hooks/useLiked"
import useAuth from "../../shared/hooks/useAuth"


export const Like = ({ productId, userId }) => {
    console.log(productId);
    const { liked, setLiked} = useLike(productId,userId)
    //recuperar el token del contexto de autenticación
    const { token } = useAuth()
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