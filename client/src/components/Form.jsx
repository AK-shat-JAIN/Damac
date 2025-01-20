import React from 'react'

const Form = () => {
  return (
    <div className="bg-gray-50 py-10 px-5 md:px-20">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        {/* Left Section (Content) */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Dream Home <br /> a door away
          </h1>
          <p className="mt-6 text-gray-700 text-lg">
            Ever since its establishment in 2002, DAMAC Properties has shaped
            Dubai’s dynamic real estate scene, becoming a prominent figure in
            the industry. With over 47,600 units delivered as of mid-2024, it
            stands as one of the region’s biggest and most respected developers.
            A developer of all property types, DAMAC’s influence stretches
            across 10+ cities globally, including London, UK.
          </p>
          <p className="mt-4 text-gray-700 text-lg">
            In addition to its exceptional standalone projects, DAMAC is just as
            well known for creating expansive communities such as the hugely
            popular DAMAC Hills and DAMAC Lagoons.
          </p>
        </div>

        {/* Right Section (Form) */}
        <div className="bg-white p-6 rounded-lg shadow-lg md:w-1/2 animate-fade-in">
          <h2 className="text-2xl font-semibold text-gray-800">
            Fill the form & Get VIP Access to latest market updates
          </h2>
          <form className="mt-6 space-y-4">
            {/* First Name */}
            <div>
              <label
                htmlFor="firstName"
                className="block text-gray-600 font-medium text-xs mb-1"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Your First Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="lastName"
                className="block text-gray-600 font-medium text-xs mb-1"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Your Last Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-600 font-medium text-xs mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Contact Number */}
            <div>
              <label
                htmlFor="contact"
                className="block text-gray-600 text-xs font-medium mb-1"
              >
                Contact Number
              </label>
              <div className="flex items-center gap-2">
                <select
                  id="countryCode"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="+1">+1</option>
                  <option value="+91">+91</option>
                  <option value="+44">+44</option>
                  {/* Add more country codes as needed */}
                </select>
                <input
                  type="tel"
                  id="contact"
                  placeholder="Phone Number"
                  className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label
                htmlFor="location"
                className="block text-gray-600 text-xs font-medium mb-1"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                placeholder="Enter your location"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="financingInfo"
                className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
              />
              <label
                htmlFor="financingInfo"
                className="ml-2 text-gray-600 text-sm"
              >
                I want financing info
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form
