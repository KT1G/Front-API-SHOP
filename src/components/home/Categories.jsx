import { CategoryCard } from "./CategoryCard"

export const Categories = ({ranking}) => {
    const top5Categories = ranking.slice(0, 5);
    /* for (let i = 0; i < 5; i++) {
        top5Categories.push(ranking[i])
    } */
    console.log(top5Categories);
    return (
        //map de las 5 primeras categorias de categories
        <ul>
            {top5Categories.map((position, index) =>
                <CategoryCard key={index} category={position.category} total={position.total} />
            )}
        </ul>
    )
}