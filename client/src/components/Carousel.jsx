import React, { useState } from "react";

const Carousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const images = [
    { src: "/Images/image1.png", title: "4 BR" },
    { src: "/Images/image2.png", title: "5 BR + MAID" },
    { src: "/Images/image3.png", title: "6 BR + MAID" },
    { src: "/Images/image4.png", title: "6 BR + MAID + GYM" },
    { src: "/Images/image5.png", title: "7 BR + MAID + GYM" },
  ];

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto p-4">
      {/* Navigation Titles */}
      <div className="flex justify-around mb-4 text-sm md:text-lg font-medium">
        {images.map((image, index) => (
          <button
            key={index}
            className={`px-4 py-1 rounded-md ${
              selectedIndex === index
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            onClick={() => handleSelect(index)}
          >
            {image.title}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div className="relative flex justify-center items-center h-[50vh] md:h-[500px]">
        {images.map((image, index) => {
          const isActive = index === selectedIndex;
          const offset = (index - selectedIndex) * 50; // Offset for card stacking
          const scale = isActive ? 1 : 0.8;

          return (
            <div
              key={index}
              className={`absolute transition-transform duration-500 ease-in-out ${
                isActive ? "z-20" : "z-10"
              }`}
              style={{
                transform: `translateX(${offset}%) scale(${scale})`,
                opacity: isActive ? 1 : 0.5,
              }}
            >
              <img
                src={image.src}
                alt={image.title}
                className="rounded-lg shadow-lg h-[50vh] "
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
