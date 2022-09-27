import { useState } from 'react'
import { getUserMyDataService, registerUserService } from '../shared/services'
import FormTittle from '../components/Forms/FormTittle'
import FormRegister from '../components/Forms/FormRegister'
import ErrorMessage from '../components/ErrorMessage'
import Modal from '../components/Modal/Modal'
import useModal from '../shared/hooks/useModal'
import ButtonTo from '../components/ButtonTo'

const Register = () => {
  const [error, setError] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setloading] = useState(false)

  const { close, open, modalOpen } = useModal()

  const onSubmit = async (data) => {
    try {
      setError('')
      setloading(true)
      const message = await registerUserService(data)
      setResponse(message)
        open()
    } catch (e) {
      setError(e.message)
    } finally {
      setloading(false)
    }
  }
  return !response ? (
    <section className="form">
      <FormTittle />
      <FormRegister onSubmit={onSubmit} loading={loading} />
      {error ? <ErrorMessage className={'form__error'} error={error} /> : null}
    </section>
  ) : (
    <Modal response={response}>
      <p className="card__title">{response}</p>
      <ButtonTo to="/login" text={'login'} classe={'card__button'} />
    </Modal>
  )
}

export default Register
