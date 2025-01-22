import React from 'react'

const DreamHome = () => {
  return (
    <div className='bg-white p-4 mt-10 flex flex-col items-center justify-center gap-4'>
      <h1 className='text-2xl md:text-4xl lg:text-6xl font-awesomeSerif font-bold'>Dream Home a door away</h1>
      <div className='rounded-full'>
        <img src="/Images/home1.jpg" alt="DreamHome" className='rounded-full transform translate-y-4 hover:scale-105 transition-transform duration-500' />
      </div>
      
    </div>
  )
}

export default DreamHome
