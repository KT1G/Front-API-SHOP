import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'


const schema = yup
  .object({
    email: yup.string().email().required(),
    name: yup.string().required(),
    password: yup.string().required().min(4).max(15),
  })
  .required()

  
const FormRegister = ({ onSubmit }) => {
    
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  return (
    <form className="form__container" onSubmit={handleSubmit(onSubmit)}>
      {/* INPUT 1 */}
      <fieldset className="form__group">
        <input
          className="form__group__input"
          type="text"
          {...register('name')}
          name="name"
          placeholder=" "
        />
        <label className="form__group__label" htmlFor="name">
          Nick:
        </label>
        <span className="form__group__line"></span>
        {errors.name?.type === 'name' && (
          <p>Debes introducir un nombre valido</p>
        )}
        {errors.name?.type === 'required' && <p>Este campo es obligatorio</p>}
      </fieldset>

      {/* INPUT 2 */}

      <fieldset className="form__group">
        <input
          className="form__group__input"
          type="text"
          {...register('email')}
          name="email"
          placeholder=" "
        />
        <label className="form__group__label" htmlFor="email">
          Email:
        </label>
        <span className="form__group__line"></span>
        {errors.email?.type === 'email' && (
          <p>Debes introducir un correo valido</p>
        )}
        {errors.email?.type === 'required' && <p>Este campo es obligatorio</p>}
      </fieldset>

      {/* INPUT 3 */}

      <fieldset className="form__group">
        <input
          className="form__group__input"
          type="password"
          {...register('password')}
          name="password"
          placeholder=" "
        />
        <label className="form__group__label" htmlFor="password">
          Password:
        </label>
        <span className="form__group__line"></span>
        {errors.password?.type === 'required' && (
          <p>Este campo es obligatorio </p>
        )}{' '}
        {errors.password?.type === 'min' && (
          <p>La contraseña debe tener almenos 4 digitos </p>
        )}
      </fieldset>
      {/* input boton */}
      <input className="button form__button" type="submit" value={'Crear Cuenta'} />
    </form>
  )
}

export default FormRegister
