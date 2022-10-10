import React, { useState } from 'react'

import Button from '../components/Buttons/Button'
import ButtonTo from '../components/Buttons/ButtonTo'
import FormAddProduct from '../components/Forms/FormAddProduct'
import Loading from '../components/Loading'
import Message from '../components/Message'
import Modal from '../components/Modal/Modal'
import useAuth from '../shared/hooks/useAuth'
import useModal from '../shared/hooks/useModal'
import useWait from '../shared/hooks/useWait'
import { AddNewProductService } from '../shared/services'

const AddNewProduct = () => {
  const { user, token } = useAuth()
  const [error, setError] = useState(null)
  const {ready} = useWait()
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)
  const { modalOpen, close, open } = useModal()
  let path = null
  
  if (user) path = `/products/filterBy/userId/${user.id}`
  
  if (!user && ready)
  return (
    <Modal>
        <Message text={'Debes logearte primer'} />
        <ButtonTo to={'/login'} text="Login" classe="modal__button" />
      </Modal>
    )
  
   
  const onSubmit = async (data, user) => {
    console.log(data)
    const formData = new FormData()
      formData.append('name', data.name)
      formData.append('caption', data.caption)
      formData.append('category', data.category)
      formData.append('price', data.price)
      formData.append('location', data.location)
      formData.append('image', data.image[0])
      
      try {
        console.log('esto es el path',path)
        setLoading(true)
        setError('')
        const data = await AddNewProductService(formData, token)
        setResponse(data.message)
        open()
        console.log(data)
      } catch (error) {
      setError(error.message)
      open()
    } finally {
      setLoading(false)
    }
  }
  
  return (
    user && <section className="page__container">
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
