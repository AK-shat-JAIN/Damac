import React from 'react'

const Grid = () => {
  return (
    <div className='bg-white p-4 mt-10 flex flex-col items-center justify-center gap-4 '>
      <div>
        <h2 className='text-2xl md:text-3xl lg:text-4xl text-center font-bold'>The Comfort of a Great Location.</h2>
        
      </div>
      
      
    <div className="grid grid-cols-12 grid-rows-5 gap-3 w-[80vw]">
        <div className="col-span-6 row-span-6"><img src="/Images/Frame 196.png" alt="" className='rounded-[10px] object-cover w-[100%] h-[100%] transform translate-y-4 hover:scale-105 transition-transform duration-500'/></div>
    <div className="col-span-6 row-span-2 col-start-7"><img src="/Images/Frame 204.png" alt="" className='rounded-[10px] object-cover w-[100%] h-[100%] transform translate-y-4 hover:scale-105 transition-transform duration-500'/></div>
    <div className="col-span-2 row-span-2 col-start-7 row-start-3"><img src="/Images/Frame 203.png" alt="" className='rounded-[10px] object-cover w-[100%] h-[100%] transform translate-y-4 hover:scale-105 transition-transform duration-500'/></div>
    <div className="col-span-2 row-span-2 col-start-9 row-start-3"><img src="/Images/Frame 201.png" alt="" className='rounded-[10px] object-cover w-[100%] h-[100%] transform translate-y-4 hover:scale-105 transition-transform duration-500'/></div>
    <div className="col-span-2 row-span-2 col-start-11 row-start-3"><img src="/Images/Frame 202.png" alt="" className='rounded-[10px] object-cover w-[100%] h-[100%] transform translate-y-4 hover:scale-105 transition-transform duration-500'/></div>
    <div className="col-span-3 row-span-2 col-start-7 row-start-5"><img src="/Images/Frame 198.png" alt="" className='rounded-[10px] object-cover w-[100%] h-[100%] transform translate-y-4 hover:scale-105 transition-transform duration-500'/></div>
    <div className="col-span-3 row-span-2 col-start-10 row-start-5"><img src="/Images/Frame 199.png" alt="" className='rounded-[10px] object-cover w-[100%] h-[100%] transform translate-y-4 hover:scale-105 transition-transform duration-500'/></div>
    </div>
    
    
    
      
    </div>
  )
}

export default Grid
