import { useState } from 'react'
import { registerUserService } from '../shared/services'
import SubmitMail from '../components/SubmitMail'
import FormTittle from '../components/FormTittle'
import FormRegister from '../components/FormRegister'


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
    } catch (e) {
      setError(e.message)
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
      

      {error ? <p className='form__error'>{error}</p> : null}
    </section>
  )
}

export default Register
