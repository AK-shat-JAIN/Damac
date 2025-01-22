import React from 'react'

const WhatsappButton = () => {
    const whatsappNumber = "+971528199321"; //  WhatsApp number
    const phoneNumber = "+971528199321"; // Phone number
    const whatsappMessage = "Hello! I would like to inquire about your services."; // Default WhatsApp message
  
  return (
    <div className="fixed bottom-4 right-4  flex flex-col items-center gap-3 z-50">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" // Replace with a local icon if needed
          alt="WhatsApp"
          className="w-8 h-8"
        />
      </a>

      {/* Phone Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="flex items-center justify-center w-14 h-14 bg-secondary rounded-full shadow-lg hover:bg-secondary transition-transform transform hover:scale-110"
      >
        <img
        src="https://cdn-icons-png.freepik.com/512/455/455604.png" // Replace with your local icon file if needed
        alt="Phone"
        
        className="h-14 w-14 text-white"
      />
          
        
          
        
      </a>
    </div>
  )
}

export default WhatsappButton
