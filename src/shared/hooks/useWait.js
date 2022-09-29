import { useState } from 'react'

const useWait = () => {
  const [ready, setReady] = useState(false)

  setTimeout(() => {
    setReady(true)
  }, 200)

  return { ready }
}

export default useWait
