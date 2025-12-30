import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1content = (props) => {
  return (
    <div className='pb-16 pt-6 px-4 md:px-18 flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center h-auto md:h-[90vh]'>
        <LeftContent/>
        <RightContent users={props.users}/>
      
    </div>
  )
}

export default Page1content
