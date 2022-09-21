import FormTittle from '../components/FormTittle'
import { useState } from 'react'
import SubmitMail from '../components/SubmitMail'
import FormLogin from '../components/FormLogin'

const Login = () => {
  const [error, setError] = useState('')
  const [response, setResponse] = useState('')

  const onSubmit = (data) => {
    try {
      setError('')
    } catch (e) {
      setError(e.message)
    }
  }

  return (
    <section className="form">
      {!response ? (
        <>
          <FormTittle
            title="¡Hola de Nuevo!"
            text="Puedes iniciar Sesion abajo"
          />
          <FormLogin onSubmit={onSubmit} />
        </>
      ) : (
        <SubmitMail response={response} />
      )}

      {error ? <p>{error}</p> : null}
    </section>
  )
}

export default Login
