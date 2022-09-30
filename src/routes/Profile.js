import React from 'react'
import ButtonTo from '../components/ButtonTo'

import useAuth from '../shared/hooks/useAuth'
import '../styles/profile.css'

const Profile = () => {
  const { user, logout } = useAuth()
  return (
    <section className='profile__container'>
      {user ? (
        <ButtonTo
          handleclick={logout}
          text={'Logout'}
          classe={'profile__button'}
        />
      ) : (
        null
      )}
    </section>
  )
}

export default Profile
