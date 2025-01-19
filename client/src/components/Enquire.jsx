import React from 'react'

const Enquire = () => {
  return (
    <div className="bg-gray-100 py-10 px-5 md:px-20">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        
        <div className="relative">
        
          <div className="relative flex">
            
            <img
              src="/Images/house1.jpg" 
              alt="Modern House Wide"
              className="rounded-lg shadow-lg w-[60%] h-auto mr-2 relative z-10 transform translate-y-4 hover:scale-105 transition-transform duration-500"
            />
            
            <img
              src="/Images/house2.jpg" 
              alt="Modern House Narrow"
              className="rounded-lg shadow-lg w-[40%] h-auto relative z-10 transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Crafting Elegance in Every Home
          </h2>
          <p className="mt-4 text-xs text-gray-700">
            DAMAC Islands is a master-planned community by DAMAC Properties,
            inspired by some of the world’s most sought-after island
            destinations. The development features six clusters, each reflecting
            the unique charm of locations such as the Maldives, Bora Bora,
            Seychelles, Hawaii, Bali, and Fiji. Nestled in the heart of Dubai.
          </p>
          <button className="mt-4 py-2 px-9 bg-secondary  text-white rounded-full cursor-pointer text-transform uppercase font-semibold text-[8px] hover:bg-blue-600 transition-transform transform hover:scale-105">
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Enquire
