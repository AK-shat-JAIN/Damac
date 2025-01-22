import React from 'react'

const About = ({formVis}) => {
  return (
    <div className='bg-white p-4 flex flex-col items-center justify-center gap-4  animate-fade-in'>
      <h4 className='text-2xl font-semibold'>ABOUT DAMAC ISLAND</h4>
      <h2 className='text-2xl md:text-4xl lg:text-6xl font-awesomeSerifBoldTall text-center'>A New Waterfront Master Community</h2>
      <p className='text-lg md:text-xl lg:text-2xl w-8/12 text-center'>Discover DAMAC Islands by DAMAC Properties. Imagine a place surrounded by serene waters and island beauty, where each day starts with the gentle sound of waves and ends with breathtaking views of the horizon. We've embraced the essence of island living to create a community dedicated to your well-being, where tranquility and luxury flow effortlessly together. Choose from exquisitely designed 4 and 5-bedroom townhouses within our exclusive collection of residences at DAMAC Islands, offering the perfect blend of elegance and coastal serenity.
      </p>
      <button onClick={()=> formVis()} className='py-2 px-6 bg-primary outline  text-secondary rounded-full cursor-pointer text-transform uppercase font-semibold text-[8px]'>GET THE BROCHURE</button>
      
    </div>
  )
}

export default About
