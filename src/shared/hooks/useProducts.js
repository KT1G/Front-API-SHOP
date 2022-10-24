import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getProductsService } from '../services'

const useProducts = () => {
  const [products, setProducts] = useState([])
  const [info, setInfo] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const location = useLocation()
  console.log(location);
  const path = `${location.pathname}${location.search}`
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true)  
        setError('')
        const allInfoProducts = await getProductsService(path)
        const pagination = allInfoProducts.info
        const listProducts = allInfoProducts.object
        //actualizar el estado de products con listProducts
        setProducts(listProducts)
        //actualizar el estado de info con pagination
        setInfo(pagination)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [path])

  return { products, info, loading, error }
}

export default useProducts
