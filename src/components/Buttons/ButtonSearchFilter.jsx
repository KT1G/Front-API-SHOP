export const ButtonSearchFilter = ({ setFilter }) => {
    const handleClick = (event) => {
        event.preventDefault()
        setFilter(event.target.value)
    }
    return (
        <button className="header__button" >
            <select className="header__select" onClick={handleClick}>
                <option value="name">Name</option>
                <option value="category">Category</option>
                <option value="location">Location</option>
            </select>
        </button>
    )
}