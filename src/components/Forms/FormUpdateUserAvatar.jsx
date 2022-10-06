import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import { useForm } from "react-hook-form"
import Loading from "../Loading"
import Upload from "../Icons/Upload"

const schema = yup.object().shape({
        avatar: yup.mixed().test('fileSize', 'Debes subir una foto', (value) => {
            return value && value.length
        }),
    })

const FormUpdateUserAvatar = ({ onSubmit, loading, user }) => {
    
    const {
    register,
    handleSubmit,
    formState: { errors },
    } = useForm({
    resolver: yupResolver(schema),
    })
    return (
        <form className="profile__form__container" onSubmit={handleSubmit(onSubmit)}>
            {/* INPUT 1 */}
            <fieldset className="info__form__group">
                <label className="formAdd__group__label--file" htmlFor="file">
                    <Upload />
                    <input
                        className=" form__group__file"
                        type="file"
                        {...register('avatar')}
                        id="file"
                    />
                    <p>Sube una imagen !</p>
                </label>
                {errors.avatar && (
                    <p className="formAdd__error">{errors.avatar.message}</p>
                )}
            </fieldset>
            
            {/* input boton */}
            <input className="button form__button" type="submit" value={'Avatar'} />
            {/* {!loading ? <input className="button form__button" type="submit" value={'Avatar'} />: <Loading/>} */}
        </form>
    )
}

export default FormUpdateUserAvatar