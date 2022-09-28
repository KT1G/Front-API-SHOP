import Card from "./Card"

export const Products = ({products}) => {
    return (
        <ul className="productList__list">
            {products.map((product) => (
                <Card key={product.id} section="products" element={product} />
            ))}
        </ul>
    )
}