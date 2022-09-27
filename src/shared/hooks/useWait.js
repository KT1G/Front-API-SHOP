import { useState } from 'react'

const useWait = (time) => {
  const [wait, setWait] = useState(false)

  setTimeout(() => {
      setWait(true)
  }, time)
  
  return {wait}
}

export default useWait