import { useState } from 'react'
import { getUserMyDataService, registerUserService } from '../shared/services'
import SubmitMail from '../components/SubmitMail'
import FormTittle from '../components/Forms/FormTittle'
import FormRegister from '../components/Forms/FormRegister'
import ErrorMessage from '../components/ErrorMessage'



const Register = () => {
  const [error, setError] = useState('')
  const [response, setResponse] = useState('')
  const [loading,setloading] = useState(false)

  const onSubmit = async (data) => {
    try {
      setError('')
      setloading(true)
      const message = await registerUserService(data)
      setResponse(message)
      setloading(false)
    } catch (e) {
      setError(e.message)
      
    } finally {
      setloading(false)
    }
  }
  return (
    <section className="form">
      {!response ? (
        <>
          <FormTittle />
          <FormRegister onSubmit={onSubmit} loading={loading} />
        </>
      ) : (
        <SubmitMail response={response} />
      )}

      {error ? (
        <ErrorMessage className={'form__error'} error={error} />
      ) : null}
    </section>
  )
}

export default Register
