import React from 'react'


const Formpopup = ({setShowForm}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg md:w-1/2 animate-fade-in">
          <form className="mt-6 space-y-4">
            {/* First Name */}
            <div>
              <label
              
                htmlFor="fullName"
                className="block text-gray-600 font-medium text-xs mb-1"
              >
                Full Name
              </label>
              <input
              // required
                type="text"
                id="fullName"
                placeholder="Your Full Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Last Name
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
            </div> */}

            {/* Email */}
            <div>
              <label
                
                htmlFor="email"
                className="block text-gray-600 font-medium text-xs mb-1"
              >
                Email
              </label>
              <input
              // required
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
                  className="px-4 py-3 border read-only border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  {/* <option value="+1">+1</option> */}
                  <option value="+91">+91</option>
                  {/* <option value="+44">+44</option> */}
                  {/* Add more country codes as needed */}
                </select>
                <input
                // required
                  type="tel"
                  id="contact"
                  placeholder="Phone Number"
                  className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>

            {/* Location
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
            </div> */}

            {/* Checkbox */}
            <div className="flex items-center">
              <input
              // required
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
  )
}

export default Formpopup
