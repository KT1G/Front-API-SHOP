import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import '../../styles/formPrice.css'

const PrecioSelectModal = ({ close, modalOpen }) => {
  const { register, handleSubmit } = useForm()
  const [error, setError] = useState(null)
  const [loading, setloading] = useState(false)
  const [params, setParams] = useSearchParams()


  const onSubmit = async (data) => {
    try {
      /* useEffect(() => {
        const loadFilterProductsByPrice = async () => {
          try {
            setLoading(true);
            const minPrice = data.minPrice;
            const maxPrice = data.maxPrice;
            if (params.toString() === '') {
              if(minPrice !==)
               */
      console.log(data)
      const minPrice = data.minPrice
      const maxPrice = data.maxPrice
      if (params.toString() === '') {
        if (minPrice !== '' && maxPrice !== '') {
          setParams({
            minPrice: minPrice,
            maxPrice: maxPrice,
          })
        } else if (minPrice !== '') {
          setParams({ minPrice: minPrice })
        } else if (maxPrice !== '') {
          setParams({ maxPrice: maxPrice })
        }
      } else {
        if (minPrice === '' && maxPrice === '') {
          params.delete('minPrice')
          params.delete('maxPrice')
        } else if (minPrice !== '' && maxPrice !== '') {
          params.set("minPrice", minPrice)
          params.set("maxPrice", maxPrice)
        } else if (minPrice !== '') {
          params.set("minPrice", minPrice)
          params.delete("maxPrice")
        } else if (maxPrice !== '') {
          params.set("maxPrice", maxPrice)
          params.delete("minPrice")
        }
        setParams(params)
      }
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
          <label className="precioSelect__label" htmlFor="minPrice">
            Desde
          </label>
          <input
            className="precioSelect__input"
            type="text"
            {...register('minPrice')}
            placeholder="0"
            defaultValue={''}
            id="minPrice"
          />
        </fieldset>
        <fieldset className="precioSelect__element">
          <label className="precioSelect__label" htmlFor="maxPrice">
            Hasta
          </label>
          <input
            className="precioSelect__input"
            type="text"
            {...register('maxPrice')}
            placeholder="1000"
            defaultValue={''}
            id="maxPrice"
          />
        </fieldset>
      </section>
      <div className="precioSelect__button__container">
        <input
          onClick={modalOpen && close}
          className="precioSelect__button--1"
          defaultValue={'Cancelar'}
        />
        <input
          className="precioSelect__button--2"
          type="submit"
          defaultValue={'Enviar'}
          // onClick={!loading && modalOpen && close}
        />
      </div>
    </form>
  )
}

export default PrecioSelectModal
