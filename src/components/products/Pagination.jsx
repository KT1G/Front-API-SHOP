import ButtonTo from "../ButtonTo"

export const Pagination = ({ info }) => {
    return (
        <footer className="pagination__container">
            {info.prevPage && <ButtonTo to={`${info.prevPage}`} text="Prev" />}
            <h3>{info.pageView} | {info.productsView}</h3>
            {info.nextPage && <ButtonTo to={`${info.nextPage}`} text="Next" />}
        </footer>
    )
}