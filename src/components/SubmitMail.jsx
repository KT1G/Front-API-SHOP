import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/submitMail.css'

const SubmitMail = ({ response }) => {
  return (
    <section className='card'>
      <p className="card__title">{response}</p>
      <Link to="/login">
        <button className='button card__button'>login</button>
      </Link>
    </section>
  )
}

export default SubmitMail
