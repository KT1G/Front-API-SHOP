import { deleteLikeService, postLikeService } from '../../shared/services'
import '../../styles/like.css'
import { useLike } from '../../shared/hooks/useLiked'
import useAuth from '../../shared/hooks/useAuth'
import { ButtonWithLike } from '../Buttons/ButtonWithLike'
import { ButtonWithoutLike } from '../Buttons/ButtonWithoutLike'

export const Like = ({ productId, userId }) => {
  const { liked, setLiked } = useLike(productId, userId)
  //recuperar el token del contexto de autenticación
  const { token } = useAuth()

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
      {liked ? (
        <ButtonWithLike onClick={handleClick} />
      ) : (
        <ButtonWithoutLike onClick={handleClick} />
      )}
    </li>
  )
}
