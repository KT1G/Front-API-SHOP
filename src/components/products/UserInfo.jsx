import { Link } from "react-router-dom"
import { Like } from "./Like"

export const UserInfo = ({ ownerUser, productId, liked, setLiked }) => {
    return (
        <header>
            <h2>User Info</h2>
            <nav>
                <ul>
                    <li>
                        <Link to={`/users/filterBy/id/${ownerUser.id}`} >
                            <section>
                                {ownerUser.avatar ? <img src={`${process.env.REACT_APP_BACKEND_PUBLIC}users/${ownerUser.user_id}/${ownerUser.avatar}`} alt={ownerUser.avatar} /> : <img src={`${process.env.REACT_APP_BACKEND_PUBLIC}/users/default/defaultAvatar.png`} alt='Default Avatar' />}
                            </section>
                            <section>
                                <p>{ownerUser.name}</p>
                                <p>{ownerUser.products}</p>
                            </section>
                        </Link>
                    </li>
                    <li>
                        <p>{ownerUser.score}</p>
                        <p>{ownerUser.votes}</p>
                    </li>
                    <Like productId={productId} liked={liked} setLiked={setLiked} />
                </ul>
            </nav>
        </header>
    )
}