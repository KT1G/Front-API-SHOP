import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import '../../styles/formPrice.css'

const PrecioSelectModal = ({ close, modalOpen }) => {
  const { register, handleSubmit } = useForm()
  const [error, setError] = useState(null)
  const [loading, setloading] = useState(false)
  

  const onSubmit = async (data) => {
    try {
      console.log(data)
      setloading(true)
      setError('')
      //aqui hay que hacer que la informacion que llega en data que se ve en la consola se mande a la query y se haga una llamada al back
      setloading(false)
    } catch (e) {
      setError(e.message)
    } finally {
      setloading(false)
    }
  }

  return (
    <form className="precioSelect__form" onSubmit={handleSubmit(onSubmit)}>
      <h3 className="precioSelect__title">¿Cuanto quieres pagar?</h3>
      <section className="precioSelect__container">
        <fieldset className="precioSelect__element">
          <label className="precioSelect__label" htmlFor="min">
            Desde
          </label>
          <input
            className="precioSelect__input"
            type="text"
            {...register('min')}
            defaultValue="0"
            id="min"
          />
        </fieldset>
        <fieldset className="precioSelect__element">
          <label className="precioSelect__label" htmlFor="max">
            Hasta
          </label>
          <input
            className="precioSelect__input"
            type="text"
            {...register('max')}
            defaultValue="1000"
            id="max"
          />
        </fieldset>
      </section>
      <div className="precioSelect__button__container">
        <input
          onClick={modalOpen && close}
          className="precioSelect__button--1"
          value={'Cancelar'}
        />
        <input
          className="precioSelect__button--2"
          type="submit"
          value={'Enviar'}
          // onClick={!loading && modalOpen && close}
        />
      </div>
    </form>
  )
}

export default PrecioSelectModal
