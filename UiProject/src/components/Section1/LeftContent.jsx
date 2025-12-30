import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Arrow from './Arrow'
import Text from './Text'

const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-full md:w-1/3 '>
    <Text/>
    <Arrow/>
    </div>
  )
}

export default LeftContent
