import React from 'react'

const Hero = () => {
  return (
    <div className='bg-white p-4'>
      <div className="wrapper bg-[url(/Images/image.jpg)] h-[90vh] w-auto bg-center bg-cover bg-no-repeat flex flex-col items-center justify-center text-white text-center rounded-md gap-10">
        <div className='flex flex-col gap-1 items-center justify-center'><img src="/Images/logolight.png" alt="DAMAC" className='w-6/12' />
        <p className='text-sm'>LIVE THE LUXURY</p></div>
        <div className='flex flex-col gap-1 items-center justify-center'><h1 className='text-2xl'>DAMAC ISLANDS TOWNHOUSES & VILLAS</h1>
        <h4 className='text-sm'>A NEW WORLD OF ISLAND INSPIRED LIVING</h4></div>
        <div className='flex flex-row items-center justify-center gap-6'>
          <button className='py-2 px-6 bg-purple-100 border text-black rounded-full cursor-pointer text-transform uppercase font-semibold text-[8px]'>join the waitlist</button>
          <button className='py-2 px-6 bg-secondary  text-primary rounded-full cursor-pointer text-transform uppercase font-semibold text-[8px]'>download brochure</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
