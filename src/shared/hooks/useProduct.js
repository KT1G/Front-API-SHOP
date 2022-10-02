import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { getLikeProductIdService, getProductsService, getUserService } from "../services"
import useAuth from "./useAuth"

export const useProduct = () => {
    const [product, setProduct] = useState(null)
    const [ownerUser, setOwnerUser] = useState(null)
    const [liked, setLiked] = useState(false)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const location = useLocation()
    console.log(location);

    //recuperar el user del authContext
    const { user } = useAuth()  //TODO: No me llegan datos del usuario
    console.log(user);

    useEffect(() => {
        const loadProductAndOwnerUser = async () => {
            try {
                setLoading(true)
                const data = await getProductsService(location.pathname)
                const product = data.object[0]
                const ownerUser = await getUserService(product.user_id)
                
                setProduct(product)
                setOwnerUser(ownerUser)
                //si hay user comprobar si el producto tiene like de ese usuario
                if (user) {
                    const like = await getLikeProductIdService(product.id, user.id)
                    setLiked(like)
                }
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        loadProductAndOwnerUser()
    }, [location, user, liked])

    return { product, ownerUser, liked, setLiked, loading, error }
}