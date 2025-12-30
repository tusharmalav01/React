import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='md:h-[90vh] h-auto rounded-4xl flex overflow-x-auto md:overflow-y-scroll overflow-y-visible flex-nowrap gap-4 md:gap-10 w-full md:w-2/3 p-4 md:p-10'>
      {props.users.map(function(elem,idx){
        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} color={elem.color}/>
      })}
    </div>
  )
}

export default RightContent