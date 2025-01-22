import React from 'react'

const Clients = () => {
  return (
    <div className='bg-white p-4 flex flex-col items-center justify-center gap-4'>
      <div>
        <h2 className='text-4xl text-center'>Exceptional Properties</h2>
        <h2 className='text-4xl text-center'>Exceptional Clients</h2>
      </div>
      <ul className='text-sm w-4/4 text-left px-12 list-disc'>
        <li>Balance of serenity and convenience</li>
        <li>The only Townhouse and Villa Island Master Community</li>
        <li>Central hub fountain Features a symphony of light and water.</li>
        <li>Reflecting the charm of the Maldives, Bora Bora, Seychelles, Hawaii, Bali, and Fiji.</li>
      </ul>
      
      <div className="grid grid-cols-6 grid-rows-6 gap-4">
        <div className="col-span-2 row-span-6 "><img src="/Images/img1.jpg" alt=""className='rounded-md transform translate-y-4 hover:scale-105 transition-transform duration-500' /></div>
        <div className="col-span-2 row-span-3 col-start-5 row-start-1 "><img src="/Images/img2.jpg" alt="" className='rounded-md transform translate-y-4 hover:scale-105 transition-transform duration-500' /></div>
        <div className="col-span-2 row-span-3 col-start-3 row-start-1"><img src="/Images/img3.jpg" alt="" className='rounded-md transform translate-y-4 hover:scale-105 transition-transform duration-500' /></div>
        <div className="col-span-2 row-span-3 col-start-3 row-start-4 "><img src="/Images/img4.jpg" alt="" className='rounded-md transform translate-y-4 hover:scale-105 transition-transform duration-500'/></div>
        <div className="col-span-2 row-span-3 col-start-5 row-start-4 "><img src="/Images/img5.jpg" alt="" className='rounded-md transform translate-y-4 hover:scale-105 transition-transform duration-500' /> </div>
      </div>
    
      
    </div>
  )
}

export default Clients
