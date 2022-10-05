import React, { useState } from 'react'

import Button from '../components/Buttons/Button'
import ButtonTo from '../components/Buttons/ButtonTo'
import FormAddProduct from '../components/Forms/FormAddProduct'
import Loading from '../components/Loading'
import Message from '../components/Message'
import Modal from '../components/Modal/Modal'
import useAuth from '../shared/hooks/useAuth'
import useModal from '../shared/hooks/useModal'
import { AddNewProductService } from '../shared/services'

const AddNewProduct = () => {
  const { user, token } = useAuth()
  const [error, setError] = useState(null)
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)
  const { modalOpen, close, open } = useModal()
  console.log('esto es el usuario', user.id)
  const path = `/products/filterBy/userId/${user.id}`

  if (!user)
    return (
      <Modal>
        <Message text={'Debes logearte primer'} />
        <ButtonTo to={'/login'} text="Login" classe="modal__button" />
      </Modal>
    )
  const onSubmit = async (data) => {
    console.log(data)
    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('caption', data.caption)
    formData.append('category', data.category)
    formData.append('price', data.price)
    formData.append('location', data.location)
    formData.append('image', data.image[0])

    try {
      setLoading(true)
      setError('')
      const data = await AddNewProductService(formData, token)
      setResponse(data.message)
      console.log(data.message)
      open()
      console.log(data)
    } catch (error) {
      setError(error.message)
      open()
    } finally {
      setLoading(false)
    }
  }
  if (loading) return <Loading classe="loader__products" />

  return (
    <section className="page__container">
      <FormAddProduct onSubmit={onSubmit} />
      {error && modalOpen && (
        <Modal>
          <Message text={error} />
          <Button
            handleClick={close}
            text={'Cerrar'}
            classe={'button__cancel'}
          />
        </Modal>
      )}
      {response && modalOpen && (
        <Modal handleClose={close}>
          <Message text={response} />
          <ButtonTo to={path} text={'Mira !'} classe={'modal__button'} />
        </Modal>
      )}
    </section>
  )
}

export default AddNewProduct
