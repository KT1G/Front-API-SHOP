import Card from "./Card"

export const Products = ({products}) => {
    return (
        <ul>
            {products.map((product) => (
                <Card key={product.id} section="products" element={product} />
            ))}
        </ul>
    )
}