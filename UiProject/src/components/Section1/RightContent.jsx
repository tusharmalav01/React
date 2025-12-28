import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-[90vh]  rounded-4xl flex overflow-x-auto overflow-y-scroll flex-nowrap gap-10 w-7/10 p-10 '>
      {props.users.map(function(elem,idx){
        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} color={elem.color}/>
      })}
    </div>
  )
}

export default RightContent