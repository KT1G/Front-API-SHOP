import { useLocation, useParams } from "react-router-dom";
import { useUser } from "../../shared/hooks/useUser";
import { Avatar } from "./Avatar";
import ButtonTo from "../Buttons/ButtonTo";
import FormUpdateUserAvatar from "../Forms/FormUpdateUserAvatar";
import FormUpdateUserInfo from "../Forms/FormUpdateUserInfo";
import Loading from "../Loading";
import Message from "../Message";
import Modal from "../Modal/Modal";
import useAuth from "../../shared/hooks/useAuth";
import { Info } from "./Info";
import { useState } from "react";
import useModal from "../../shared/hooks/useModal";
import Button from "../Buttons/Button";
import { updateUserAvatarService, updateUserInfoService } from "../../shared/services";

export const ProfileInfo = () => {
    const { modalOpen, close, open } = useModal()
    const [response, setResponse] = useState(null)
    const [newError, setNewError] = useState(null)
    //const [loading, setLoading] = useState(false)
    const location = useLocation()
    
    const { id } = useParams()
    
    const { profileUser, loading, setLoading, error} = useUser(id)
    
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [num, setNum] = useState(0)

    const {user, token} = useAuth()

    const onChange = (event) => {

        //setNum(event.target.value.length)
        //actualizar el estado del numero de caracteres y que se vea

    }

    const onSubmitInfo = async (data) => {
        console.log(data)
        try {
            setLoading(true)
            setNewError('')
            const update  = await updateUserInfoService(data, token)
            setResponse(update.message)
            open()
            console.log(update)
        } catch (error) {
            setNewError(error.message)
            open()
        } finally {
            setLoading(false)
        }
    }

    const onSubmitAvatar = async (data) => {
        console.log(data)
        const formData = new FormData()
        formData.append('avatar', data.avatar[0])
        console.log("esto es el formdata", formData);
    
        try {
            setLoading(true)
            setNewError('')
            const data = await updateUserAvatarService(formData, token)
            setResponse(data.message)
            console.log(data.message)
            open()
            console.log(data)
        } catch (error) {
            setNewError(error.message)
            open()
        } finally {
            setLoading(false)
        }
    }

    if (loading) return <Loading classe={'categoriesSelect__loader'} />
    if (error) return (
        <Modal>
        <Message text={error} />
        <ButtonTo to={'/profile'} text="Volver" classe="modal__button" />
        </Modal>
    )
    return (
        <div className="page__container">
            <section className="profileInfo__container">
                <header className="profileInfo__header__text">
                    <h1 className="profileInfo__header__h1">
                        PERFIL
                    </h1>
                </header>
                <section className="profileInfo__section">
                    <article className="profileInfo__article__avatar">
                        <Avatar  user={profileUser} />
                        {user && user?.id === profileUser.id && <FormUpdateUserAvatar
                            onSubmit={onSubmitAvatar}
                            loading={loading}
                            user={profileUser}
                        />}
                        {error && modalOpen && (
                            <Modal>
                            <Message text={newError} />
                            <Button
                                handleClick={close}
                                text={'Cerrar'}
                                classe={'button__cancel'}
                            />
                            </Modal>
                        )}
                        {response && modalOpen && (
                            <Modal handleClose={close}>
                            <Message text={response} />
                            <Button handleClick={close}  text={'Listo !'} classe={'modal__button'} />
                            </Modal>
                        )}
                    </article>
                    <article style={{alignItems: 'flex-star'}} className="profileInfo__article__info">
                        <Info user={profileUser} />
                        {user && user?.id === profileUser.id && <FormUpdateUserInfo
                            onSubmit={onSubmitInfo}
                            loading={loading}
                            user={profileUser}
                        />}
                        {error && modalOpen && (
                            <Modal>
                            <Message text={newError} />
                            <Button
                                handleClick={close}
                                text={'Cerrar'}
                                classe={'button__cancel'}
                            />
                            </Modal>
                        )}
                        {response && modalOpen && (
                            <Modal handleClose={close}>
                            <Message text={response} />
                            <Button handleClick={close}  text={'Listo !'} classe={'modal__button'} />
                            </Modal>
                        )}
                    </article>
                </section>
            </section>
        </div>
    );
}