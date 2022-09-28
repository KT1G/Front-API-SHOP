import { useState } from 'react'

const useWait = (time) => {
  const [ready, setReady] = useState(false)

  setTimeout(() => {
    setReady(true)
  }, time)

  return { ready }
}

export default useWait
