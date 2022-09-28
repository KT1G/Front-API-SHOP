import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import useAuth from './useAuth'

const useNavMovilLinks = (elementos) => {
  const [selected, setSelected] = useState(elementos[0])
  const { user } = useAuth()
  let location = useLocation()
  let path = location.pathname
  console.log(path)
  let linkTo = null
  let linkInicio = null

  const links = {
    Inicio: '/',
    Favoritos: `/likes/filterBy/loverId/${user?.id}`,
    Subelo: '/products',
    Mail: '/',
    Perfil: '/profile',
  }

  useEffect(() => {
    switch (path) {
      case '/':
        setSelected('Inicio')
        break
      case '/likes/filterBy/loverId/':
        setSelected('Favoritos')
        break
      case '/products':
        setSelected('Subelo')
        break
      case '/profile':
        setSelected('Perfil')
        break
      default:
        break
    }
  }, [path])

  const selectLinkTo = (user, link) => {
    linkTo = user ? links[link] : 'login'
    linkInicio = !user && link === 'Inicio' ? '/' : 'login'

    if (user) return linkTo
    if (!user) return linkInicio
  }

  return { selectLinkTo, selected, setSelected }
}

export default useNavMovilLinks
