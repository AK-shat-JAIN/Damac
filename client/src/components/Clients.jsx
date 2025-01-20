import React from 'react'

const Clients = () => {
  return (
    <div className='bg-white p-4 flex flex-col items-center justify-center gap-4'>
      <div>
        <h2 className='text-4xl text-center'>Exceptional Properties</h2>
        <h2 className='text-4xl text-center'>Exceptional Clients</h2>
      </div>
      <ul className='text-sm w-3/4 text-left px-12 list-disc'>
        <li>Balance of serenity and convenience</li>
        <li>The only Townhouse and Villa Island Master Community</li>
        <li>Central hub fountain Features a symphony of light and water.</li>
        <li>Reflecting the charm of the Maldives, Bora Bora, Seychelles, Hawaii, Bali, and Fiji.</li>
      </ul>
      <div className="flex flex-row gap-4">
        <div className="flex h-[30vh] md:h-[50vh] lg:h-[70vh] flex-col gap-4">
        <img src="/Images/img1.jpg" alt="" className="h-[30vh] md:h-[50vh] lg:h-[70vh] rounded" /></div>
        <div className="flex flex-col gap-4">
          <img src="/Images/img2.jpg" alt="" className="md:h-[23vh] lg:h-[34vh] rounded" />
          <img src="/Images/img3.jpg" alt="" className="md:h-[23vh] lg:h-[33vh] rounded" />
        </div>
        <div className="flex flex-col gap-4">
          <img src="/Images/img4.jpg" alt="" className=" md:h-[23vh] lg:h-[33vh] rounded" />
          <img src="/Images/img5.jpg" alt="" className=" md:h-[23vh] lg:h-[33vh] rounded" />
        </div>
      </div>
      
    </div>
  )
}

export default Clients
