"use client";

import gsap from "gsap";
import React, { useState, useRef } from "react";

function ImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const imageRefs = [useRef(null), useRef(null), useRef(null)];
  const textRefs = [useRef(null), useRef(null), useRef(null)];

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % imageRefs.length;
    animateSlide(activeIndex, nextIndex, "next");
    setActiveIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (activeIndex - 1 + imageRefs.length) % imageRefs.length;
    animateSlide(activeIndex, prevIndex, "prev");
    setActiveIndex(prevIndex);
  };

  const animateSlide = (current, next, direction) => {
    const currentImage = imageRefs[current].current;
    const nextImage = imageRefs[next].current;
    const currentText = textRefs[current].current;
    const nextText = textRefs[next].current;

    gsap.set(nextImage, {
      xPercent: direction === "next" ? 100 : -100,
      opacity: 0,
    });
    gsap.set(nextText, {
      xPercent: direction === "next" ? 100 : -100,
      opacity: 0,
    });

    gsap.to(currentImage, {
      xPercent: direction === "next" ? -100 : 100,
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
    });
    gsap.to(currentText, {
      xPercent: direction === "next" ? -100 : 100,
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
    });

    gsap.to(nextImage, {
      xPercent: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.inOut",
    });
    gsap.to(nextText, {
      xPercent: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.inOut",
    });
  };

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <button onClick={handlePrev} className="mr-4">
        Prev
      </button>
      <div className="relative w-[60vw] h-[60vh] overflow-hidden">
        <div ref={imageRefs[0]} className="absolute w-full h-full">
          <div className="relative  flex items-center justify-start text-white text-base">
            may 2024 - present
          </div>
          <img
            src="/Zelt.png"
            alt="Image 1"
            className="w-full h-full object-cover"
          />
          <div
            ref={textRefs[0]}
            className="absolute inset-0 flex items-center justify-center text-white text-2xl"
          >
            May 2024 - Present
          </div>
        </div>
        <div ref={imageRefs[1]} className="absolute w-full h-full">
          <div className="relative  flex items-center justify-start text-white text-base">
            may 2024 - present
          </div>
          <img
            src="/Aunest.png"
            alt="Image 2"
            className="w-full h-full object-cover"
          />
          <div
            ref={textRefs[1]}
            className="absolute inset-0 flex items-center justify-center text-white text-2xl"
          >
            June 2024 - Future
          </div>
        </div>
        <div ref={imageRefs[2]} className="absolute w-full h-full">
          <div className="relative  flex items-center justify-start text-white text-base">
            may 2024 - present
          </div>
          <img
            src="/Zelt.png"
            alt="Image 3"
            className="w-full h-full object-cover"
          />
          <div
            ref={textRefs[2]}
            className="absolute inset-0 flex items-center justify-center text-white text-2xl"
          >
            moshi moshi
          </div>
        </div>
      </div>
      <button onClick={handleNext} className="ml-4">
        Next
      </button>
    </div>
  );
}

export default ImageSlider;