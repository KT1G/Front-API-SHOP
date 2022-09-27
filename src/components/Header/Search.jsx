import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const Search = () => {
    const [text, setText] = useState('')
    const navigate = useNavigate();

    const handleChange = (event) => {
        setText(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(text)
        navigate(`/products/filterBy/search/${text}`)
        setText('')
    }

    return (
        <form className="header__form" onSubmit={handleSubmit}>
            <input className="header__input" type="text" placeholder="Search" onChange={handleChange} value={text} />
        </form>
    )
}