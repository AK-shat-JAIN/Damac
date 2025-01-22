import React from 'react'

const WhatsappButton = () => {
    const whatsappNumber = "7217224241"; // WhatsApp number
    const message = "Hello! I would like to inquire about your services."; // Default message
  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110"

    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" // Replace with your local icon file if needed
        alt="WhatsApp"
        className="w-8 h-8"
      />
    </a>
  )
}

export default WhatsappButton
