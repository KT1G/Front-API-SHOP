import useAuth from '../../shared/hooks/useAuth'
import { Like } from './Like'

export const UserInfo = ({ ownerUser, productId, liked, setLiked }) => {
  console.log('ownerUser', ownerUser)

  const { user } = useAuth()

  return (
    <header className="userInfo__container">
      <nav className="userInfo__nav">
        <ul className="userInfo__list">
          <li className="userInfo__element">
            <section className="userInfo__element__container">
              <div className="userInfo__avatar__background">
                {ownerUser.avatar ? (
                  <img
                    className="userInfo__element__avatar"
                    src={`${process.env.REACT_APP_BACKEND_PUBLIC}users/${ownerUser.user_id}/${ownerUser.avatar}`}
                    alt={ownerUser.avatar}
                  />
                ) : (
                  <img
                    className="userInfo__element__avatar"
                    src={`${process.env.REACT_APP_BACKEND_PUBLIC}/users/default/defaultAvatar.png`}
                    alt="Default Avatar"
                  />
                )}
              </div>
            </section>
            <section className="userInfo__element__container">
              <p className="userInfo__element__text--name">{ownerUser.name}</p>

              <p className="userInfo__element__text--products">
                {ownerUser.products} <span>Productos</span>
              </p>
            </section>
          </li>
          <li className="userInfo__element">
            <section className="userInfo__element__container">
              <p className="userInfo__element__text">{ownerUser.score}</p>
              <p className="userInfo__element__text--valoraciones">
                {ownerUser.votes} <span>Valoraciones</span>
              </p>
            </section>
          </li>
          {user && (
            <Like productId={productId} liked={liked} setLiked={setLiked} />
          )}
        </ul>
      </nav>
    </header>
  )
}
