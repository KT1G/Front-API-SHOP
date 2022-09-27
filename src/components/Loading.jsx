import React from 'react'
import { useState } from 'react'
import useWait from '../shared/hooks/useWait'

import Loader from './Icons/Loader'


const Loading = ({ classe }) => {
  const { wait } = useWait(200)
  console.log(wait)
  return (
    <div className={classe}>
      {wait ? <Loader />: null}
    </div>
  )
}

export default Loading
