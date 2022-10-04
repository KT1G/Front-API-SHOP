import ButtonTo from '../ButtonTo'

export const Pagination = ({ info }) => {
  return (
    <footer className="pagination__container">
      {info.prevPage && (
        <ButtonTo
          classe={'pagination__button'}
          to={`${info.prevPage}`}
          text="Prev"
        />
      )}
      <h3 className="pagination__title">{info.pageView} </h3>
      {info.nextPage && (
        <ButtonTo
          classe={'pagination__button'}
          to={`${info.nextPage}`}
          text="Next"
        />
      )}
    </footer>
  )
}
