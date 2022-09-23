import React from 'react'
import '../../styles/modal.css'

import { motion } from 'framer-motion'
import Backdrop from '../Backdrop/Backdrop'
import '../../styles/modal.css'


const dropIn = {
  hidden: {
    y: "-100vh",
    opacity:0
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness:500
    }
  },
  exit: {
    y: "100vh",
    opacity:0
  }
}


const Modal = ({ handleClose,children }) => {
  return (
    <Backdrop onclick={handleClose}>
      <motion.div 
        onClick={(e) => e.stopPropagation()}
        className="modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      > {children}
      </motion.div>
    </Backdrop>
  )
}

export default Modal