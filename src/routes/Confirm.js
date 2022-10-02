
import ButtonTo from '../components/ButtonTo'
import Message from '../components/Message'
import Loading from '../components/Loading'
import Modal from '../components/Modal/Modal'
import useConfirm from '../shared/hooks/useConfirm'

const Confirm = () => {
  const { loading,data,  error } = useConfirm()
 console.log(data)
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Modal>
          <Message text={error ? error : data }/>
          <ButtonTo to="/login" text={'login'} />
        </Modal>
      )}
    </>
  )
}

export default Confirm