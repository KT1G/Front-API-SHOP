import { useProduct } from "../../shared/hooks/useProduct";
import { ProductInfo } from "./ProductInfo";
import { UserInfo } from "./UserInfo";

export const Product = () => {
    //Recuperara el resultado de la busqueda
    const { product, ownerUser, liked, setLiked, loading, error } = useProduct();
    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>
    return (
        <section>
            <UserInfo ownerUser={ownerUser} productId={product.id} liked={liked} setLiked={setLiked} />
            <ProductInfo product= {product} />
        </section>
    )
}