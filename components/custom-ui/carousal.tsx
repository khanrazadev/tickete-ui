"use client";
import React, { useState, useEffect, useCallback } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const slides = [
  {
    url: "https://assets.tickete.co/tickete-images/1697560257138_images_2.jpg?auto=format&fm=webp&fit=crop&q=auto",
  },
  {
    url: "https://assets.tickete.co/tickete-images/1697560257144_images_4.jpg?auto=format&fm=webp&fit=crop&q=auto",
  },
  {
    url: "https://assets.tickete.co/tickete-images/1697560257150_images_MOTF2.jpg?auto=format&fm=webp&fit=crop&q=auto",
  },
  {
    url: "https://assets.tickete.co/tickete-images/1697560257150_images_MOTF2.jpg?auto=format&fm=webp&fit=crop&q=auto",
  },
  {
    url: "https://assets.tickete.co/tickete-images/1697560257155_images_MOTF3.jpg?auto=format&fm=webp&fit=crop&q=auto",
  },
  {
    url: "https://assets.tickete.co/tickete-images/1697560257160_images_MOTF4.jpg?auto=format&fm=webp&fit=crop&q=auto",
  },
];

const Carousal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = useCallback((index: React.SetStateAction<number>) => {
    setCurrentIndex(index);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000); // Change slide every 2 seconds
    return () => clearInterval(interval); // Cleanup function to clear interval on unmount
  }, [nextSlide]);

  return (
    <div className="h-full w-full relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
};

export default Carousal;
