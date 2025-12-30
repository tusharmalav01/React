import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-col md:flex-row items-center md:justify-between gap-4 md:gap-0 py-6 md:py-10 px-4 md:px-18'>
      <h4 className='bg-black text-white px-4 md:px-6 py-3 rounded-full uppercase'>Target Audience</h4>
      <button className='bg-gray-300 px-4 md:px-6 py-3 uppercase rounded-full text-sm tracking-widest'>digital Banking Platform</button>
    </div>
  )
}

export default Navbar 
