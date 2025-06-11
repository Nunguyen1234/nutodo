"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const FaArrowUpIcon = FaArrowUp as unknown as React.FC;


const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVIsibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVIsibility);
    return () => window.removeEventListener("scroll", toggleVIsibility);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-4 animate-pulse right-4">
      {isVisible && (
        <button onClick={scrollToTop}
          className="bg-rose-700 text-white rounded-full w-12 h-12 flex items-center 
    justify-center focus:outline-none"
        >
          <FaArrowUpIcon  />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
