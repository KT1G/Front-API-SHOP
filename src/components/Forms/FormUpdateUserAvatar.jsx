import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import Loading from '../Loading'

import FormUploadImage from './FormUploadImage'

const schema = yup.object().shape({
  avatar: yup.mixed().test('fileSize', 'Debes subir una foto', (value) => {
    return value && value.length
  }),
})

const FormUpdateUserAvatar = ({ onSubmit, loading }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

const avatarUpload = watch('avatar')
const avatar = avatarUpload?.length

  return (
    <form
      className="profile__form__container"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* INPUT 1 */}
      <fieldset className="info__form__group">
        <FormUploadImage image={avatar} register={register} value={'avatar'} />
        {errors.avatar && (
          <p className="formAdd__error">{errors.avatar.message}</p>
        )}
      </fieldset>

      {/* input boton */}
      {!loading ? (
        <input
          className="button form__button"
          type="submit"
          value={'Enviar!'}
        />
      ) : (
        <Loading />
      )}
    </form>
  )
}

export default FormUpdateUserAvatar
