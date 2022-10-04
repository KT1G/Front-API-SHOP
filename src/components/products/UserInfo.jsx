import useAuth from '../../shared/hooks/useAuth'
import { Like } from './Like'

export const UserInfo = ({ userInfo, productId, liked, setLiked }) => {
 

  const { user } = useAuth()

  return (
    <header className="userInfo__container">
      <nav className="userInfo__nav">
        <ul className="userInfo__list">
          <li className="userInfo__element">
            <section className="userInfo__element__container">
              <div className="userInfo__avatar__background">
                {userInfo.avatar ? (
                  <img
                    className="userInfo__element__avatar"
                    src={`${process.env.REACT_APP_BACKEND_PUBLIC}users/${userInfo.user_id}/${userInfo.avatar}`}
                    alt={userInfo.avatar}
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
              <p className="userInfo__element__text--name">{userInfo.name}</p>

              <p className="userInfo__element__text--products">
                {userInfo.products} <span>Productos</span>
              </p>
            </section>
          </li>
          <li className="userInfo__element">
            <section className="userInfo__element__container">
              <p className="userInfo__element__text">{userInfo.score}</p>
              <p className="userInfo__element__text--valoraciones">
                {userInfo.votes} <span>Valoraciones</span>
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
