import React from 'react'
import { useState } from 'react'

const Hero = ({formVis}) => {
  
  return (
    <div className='bg-white p-4'>
      <div className="wrapper bg-[url(/Images/image.jpg)] h-[90vh] w-auto bg-center bg-cover bg-no-repeat flex flex-col items-center justify-between text-white text-center rounded-[50px] py-10">
        <div className='flex flex-col gap-1 items-center justify-center'><img src="/Images/logolight.png" alt="DAMAC" className='w-6/12' />
        <p className='text-sm'>LIVE THE LUXURY</p></div>
        <div className='flex flex-col gap-1 items-center justify-center'>
        <h4 className='text-md font-semibold'>A NEW WORLD OF ISLAND INSPIRED LIVING</h4>
        <div className='flex flex-row items-center justify-center gap-6 mt-4'>
          <button onClick={()=> formVis()} className='py-2 px-6 bg-purple-100 border text-black rounded-full cursor-pointer text-transform uppercase font-semibold text-[12px]'>join the waitlist</button>
          <button onClick={()=> formVis()} className='py-2 px-6 bg-secondary  text-primary rounded-full cursor-pointer text-transform uppercase font-semibold text-[12px]'>download brochure</button>
        </div></div>
      </div>
    </div>
  )
}

export default Hero
