import React, { useState } from "react";

const images = [
  { src: "/Images/image1.jpg", title: "4 BR" },
  { src: "/Images/image2.jpg", title: "5 BR + MAID" },
  { src: "/Images/image3.jpg", title: "6 BR + MAID" },
  { src: "/Images/image4.jpg", title: "6 BR + MAID + GYM" },
  { src: "/Images/image5.jpg", title: "7 BR + MAID + GYM" },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNavigation = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Navigation Bar */}
      <div className="flex justify-between mb-6 text-sm md:text-base font-medium">
        {images.map((image, index) => (
          <button
            key={index}
            className={`px-3 py-2 transition ${
              currentIndex === index
                ? "text-black underline"
                : "text-gray-500 hover:text-black"
            }`}
            onClick={() => handleNavigation(index)}
          >
            {image.title}
          </button>
        ))}
      </div>

      {/* Image Carousel */}
      <div className="relative flex justify-center items-center h-96 md:h-[500px]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute transition-all duration-500 ${
              index === currentIndex
                ? "scale-100 z-20 opacity-100"
                : "scale-75 z-10 opacity-50"
            }`}
          >
            <img
              src={image.src}
              alt={image.title}
              className="rounded-2xl shadow-lg w-[80vw] md:w-[50vw] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
