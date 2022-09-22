import FormTittle from '../components/Forms/FormTittle'
import { useState } from 'react'
import SubmitMail from '../components/SubmitMail'
import FormLogin from '../components/Forms/FormLogin'
import { loginUserService } from '../shared/services'
import useAuth from '../shared/hooks/useAuth'
import ErrorMessage from '../components/ErrorMessage'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [response, setResponse] = useState('')
  const [error, setError] = useState('')
  const [loading, setloading] = useState(false)
  const {login} = useAuth()
  const navigate = useNavigate()

  const onSubmit = async (data) => {

    try {
      setError('')
      setloading(true)
      const { accessToken } = await loginUserService(data)  
      login(accessToken)
      if(login) navigate('/')
    
    } catch (e) {
      setError(e.message)
    }
    finally {
      setloading(false)
    }
  }

  return (
    <section className="form form__login">
      {!response ? (
        <>
          <FormTittle
            title="¡Hola de Nuevo!"
            text="Puedes iniciar Sesion abajo"
          />
          <FormLogin onSubmit={onSubmit} loading={loading} />
        </>
      ) : (
        <SubmitMail response={response} />
      )}

      {error ? <ErrorMessage className={'form__error__login'} error={error} /> : null}
    </section>
  )
}

export default Login
