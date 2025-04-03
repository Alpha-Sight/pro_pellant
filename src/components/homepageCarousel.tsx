import React, { useState, useEffect } from "react";

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      id: 1,
      content: (
        <div className="flex flex-col bg-[#1C1D24] h-auto w-52 p-4 rounded-[0.63rem] gap-9 lg:w-96 hover:border-black hover:border-r-8 hover:border-b-8 rounded-r-[0.4rem] rounded-b-[0.4rem] hover:ease-in-out transition-all">
          <div className="bg-white h-28"></div>
          <div className="flex flex-col text-left text-white gap-5">
            <h1 className="font-semibold text-xl">Upload or Create</h1>
            <p className="font-normal leading-normal text-base">
              Start with your existing CV or build one from scratch using our drag-and-drop builder
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="flex w-80 bg-white gap-3 p-4 rounded-xl shadow-[0px_0px_0px_2.915px_rgba(0,0,0,0.00)_inset,5.831px_5.831px_21.866px_0px_rgba(61,63,78,0.10)] lg:w-[45rem] justify-between hover:border-black hover:border-2 hover:border-r-8 hover:border-b-8 rounded-r-[0.4rem] rounded-b-[0.4rem] hover:ease-in-out transition-all">
          <div className="flex flex-col self-center gap-3">
            <h1 className="font-semibold text-xl">AI Optimization</h1>
            <p className="font-normal leading-normal text-base">
              Receive tailored suggestions <br /> for keywords, formatting, and <br /> country-specific standards.
            </p>
          </div>
          <div className="bg-black w-40 lg:w-[50%]"></div>
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="flex flex-col bg-[#1C1D24] h-auto w-52 p-4 rounded-[0.63rem] gap-9 lg:w-96 hover:border-black hover:border-r-8 hover:border-b-8 rounded-r-[0.4rem] rounded-b-[0.4rem] hover:ease-in-out transition-all">
          <div className="flex flex-col text-left text-white gap-5">
            <h1 className="font-semibold text-xl">TS Scoring</h1>
            <p className="font-normal leading-normal text-base">
              Receive tailored suggestions for keywords, formatting, and country-specific standards.
            </p>
            <div className="bg-white h-28"></div>
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % calculateDotCount());
    }, 2500); 

    return () => clearInterval(interval);
  }, [items.length]);

  const calculateTransform = () => {
    // For lg: 3 items, md: 2 items
    if (window.innerWidth >= 1024) {
      return `translateX(-${currentIndex * 33.33}%)`; // lg: 33.33% width per item
    } else if (window.innerWidth >= 768) {
      return `translateX(-${currentIndex * 50}%)`; // md: 50% width per item
    }
    return `translateX(-${currentIndex * 100}%)`; // sm: 100% width per item
  };

  const calculateDotCount = () => {
    // Two dots for lg and md screens
    if (window.innerWidth >= 768) {
      return 2;
    }
    // Default to the number of items for smaller screens
    return items.length;
  };

  return (
    <div className="relative w-full flex justify-center items-center overflow-hidden">
      {/* Carousel Container */}
      <div
        className="flex transition-transform duration-500 lg:gap-8 md:gap-6"
        style={{ transform: calculateTransform() }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className={`flex-shrink-0 ${
              window.innerWidth >= 1024
                ? "w-[33.33%]" // lg: 3 items
                : window.innerWidth >= 768
                ? "w-[50%]" // md: 2 items
                : "w-full" // sm: 1 item
            } flex justify-center`}
          >
            {item.content}
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 flex justify-center space-x-2">
        {[...Array(calculateDotCount())].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-colors ${
              currentIndex === index ? "bg-black" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
