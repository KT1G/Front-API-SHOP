import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { ButtonSearchFilter } from "../ButtonSearchFilter";

export const Search = () => {
    const [text, setText] = useState('')
    const [filter, setFilter] = useState('name')
    //TODO: Añadir un boton que despliegue un menu con las opciones de busqueda name, category y location
    //TODO: Actualizar el valor de filter en funcion de la opcion seleccionada con setFilter
    const navigate = useNavigate();

    const handleChange = (event) => {
        setText(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(text)
        navigate(`/products/filterBy/name/${text}`)
        setText('')
    }

    return (
        <form className="header__form" onSubmit={handleSubmit}>
            <input className="header__input" type="text" placeholder={`Search by name`} onChange={handleChange} value={text} />
            {/* <ButtonSearchFilter setFilter={setFilter} /> */}
        </form>
    )
}