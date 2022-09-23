import React, { createContext, useEffect, useState } from 'react'
import { getUserMyDataService } from '../services'

export const AuthContext = createContext()

export const AuthProviderComponent = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [user, setUser] = useState(null)

  useEffect(() => {
    localStorage.setItem('token', token)
  }, [token])

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await getUserMyDataService( token )
        setUser(data)
      } catch (e) {
        logout()
      }
    }
    if (token) getUserData()
  }, [token])

  const login = (token) => {
    setToken(token)
  }

  const logout = () => {
    setToken('')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}