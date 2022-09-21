import { useState } from 'react'
import { registerUserService } from '../shared/context/services'
import SubmitMail from '../components/SubmitMail'
import FormTittle from '../components/FormTittle'
import FormRegister from '../components/FormRegister'

const Register = () => {
  const [error, setError] = useState('')
  const [response, setResponse] = useState('')

  const onSubmit = async (data) => {
    try {
      setError('')
      const message = await registerUserService(data)
      setResponse(message)
    } catch (e) {
      setError(e.message)
    }
  }
  return (
    <section className="form">
      {!response ? (
        <>
          <FormTittle />
          <FormRegister onSubmit={onSubmit} />
        </>
      ) : (
        <SubmitMail response={response} />
      )}

      {error ? <p>{error}</p> : null}
    </section>
  )
}

export default Register
