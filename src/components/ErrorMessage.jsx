import React from 'react'
import '../styles/error.css'

const ErrorMessage = ({ className = "error" , error }) => {

  return <p className={className}>{error}</p>
  
}

export default ErrorMessage