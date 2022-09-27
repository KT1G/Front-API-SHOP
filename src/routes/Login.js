import FormTittle from '../components/Forms/FormTittle'
import { useState } from 'react'

import FormLogin from '../components/Forms/FormLogin'
import { loginUserService } from '../shared/services'
import useAuth from '../shared/hooks/useAuth'
import ErrorMessage from '../components/ErrorMessage'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [response, setResponse] = useState('')
  const [error, setError] = useState('')
  const [loading, setloading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const onSubmit = (data) => {
    try {
      setloading(true)
      setError('')
      /* Añadimos retardo para que se pueda ver el Loader */
       setTimeout(async () => {
        const { accessToken } = await loginUserService(data)
        login(accessToken)
         if (login) navigate('/')
         setloading(false)
      },900)
    } catch (e) {
      setError(e.message)
    } 
  }

  return (
    <section className="form form__login">
      <FormTittle title="¡Hola de Nuevo!" text="Puedes iniciar Sesion abajo" />
      <FormLogin onSubmit={onSubmit} loading={loading} />
      {error ? (
        <ErrorMessage className={'form__error__login'} error={error} />
      ) : null}
    </section>
  )
}

export default Login
