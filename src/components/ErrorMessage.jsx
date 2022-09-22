import React from 'react'

const ErrorMessage = ({ className, error }) => {

  return <p className={className}>{error}</p>
  
}

export default ErrorMessage