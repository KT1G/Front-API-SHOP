import React from 'react'

const FormTittle = ({
  title = 'Bienvenido a API SHOP',
  text = 'Registrate a continuación',
}) => {
  return (
    <>
      <h2 className="form__title">{title}</h2>
      <p className="form__text">{text}</p>
    </>
  )
}

export default FormTittle