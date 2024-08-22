"use client"
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

function Intro() {
  const text = "DEVELOPER";

  const textRef = useRef(null);

  useEffect(() => {
    const letters = textRef.current.querySelectorAll(".letter");
    const tl = gsap.timeline({
      ease: "power1.inOut",
      onComplete: () => {
        tl.kill(); // Kill the timeline when the animation completes
      },
    });

    tl.to(letters, {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      duration: 0.6,
    });

    return () => {
      tl.kill(); // Cleanup in case the component unmounts before completion
    };
  }, []);

  return (
    <div className="flex  h-screen w-full items-center justify-center font-[lato] ">
      <div
        ref={textRef}
        className=" flex  overflow-hidden
           text-[200px]"
      >
        {text.split("").map((letter, index) => (
          <span key={index} className="letter translate-y-full">
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Intro;
