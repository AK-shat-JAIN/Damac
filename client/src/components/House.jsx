import React from 'react'

const House = () => {
  return (
    <div className="relative bg-white px-4 py-15">
      {/* House Image */}
      <div className="absolute inset-0 z-10 p-10 md:p-6 lg:p-4">
        <img
          src="/Images/homeover.png" 
          alt="House"
          className="w-12/12  h-auto object-cover transform translate-y-4 hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Text Content */}
      <div className="relative z-1 flex flex-col items-center h-[30vh] md:h-[60vh] lg:h-screen  p-4 md:px-10">
        <h1 className="text-4xl md:text-7xl lg:text-9xl font-bold font-awesomeSerifBoldTall text-gray-900 leading-tight text-center">
          Crafting Elegance in
        </h1>
        <h2 className="text-2xl md:text-4xl lg:text-6xl text-blue-500 font-semibold font-awesomeSerif text-right w-8/12">
          Every Home
        </h2>
      </div>
    </div>
  )
}

export default House
