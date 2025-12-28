import React from 'react'

const RightCardContent = (props) => {
  return (
    <div>
       <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between '>
        <h2 className="bg-white rounded-full h-8 w-8 font-bold text-2xl flex justify-center items-center">{props.id+1}</h2>
        <div>
            <p className="text-lg text-gray-300 mb-21 leading-relaxed">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam vitae voluptates similique! Sunt, quia ratione!</p>
        
        <div className="justify-between flex"> 
            <button style={{backgroundColor:props.color}} className=" rounded-full text-lg text-white font-medium px-7 py-2 ">{props.tag}</button>
            <button style={{backgroundColor:props.color}} className=" rounded-full text-lg text-white font-medium px-4 py-3 "><i className="ri-arrow-right-line"></i></button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default RightCardContent
