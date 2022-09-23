import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const useModal = () => {

   const [modalOpen, setModalOpen] = useState(false)

  const close = () => { setModalOpen(false)  }
  const open = () => setModalOpen(true)
  
  return {close,open,modalOpen}
    

}

export default useModal