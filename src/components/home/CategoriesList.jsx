import { Category } from "./Category"

export const CategoriesList = () => {
    const categories = ['desktop','notebook','tablet','smartphone','ebook','smartwhatch','console','tv','camera','mouse','keyboard','headset','speaker','printer','scanner','charger',
        ] 
    return (
        //map de las 5 primeras categorias de categories
        <ul>
            {categories.map((category, index) => {
                return (
                    <Category key={index} category={category} />
                )
            })}
        </ul>
    )
}