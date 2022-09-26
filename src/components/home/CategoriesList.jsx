import useCategories from "../../shared/hooks/useCategories";
import { Categories } from "./Categories"

export const CategoriesList = () => {
    const { ranking, loading, error } = useCategories();

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>
    return (
        <section>
            <h2>Top 5 Best Categories</h2>
            <Categories ranking={ranking} />
        </section>
    )
}