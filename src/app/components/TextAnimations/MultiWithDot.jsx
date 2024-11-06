"use client";

import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const MultiWithDot = ({ text, className }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const words = textRef.current.querySelectorAll(".word");

    gsap.set(words, { opacity: 0, y: 20 });

    gsap.to(words, {
      opacity: 1,
      y: -2,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        end: "bottom 20%",
      },
    });

    return () => {
      gsap.killTweensOf(words);
    };
  }, []);

  return (
    <div ref={textRef} className={className}>
      <div className="text-2xl py-4">+</div>
      {text.split(" ").map((word, index) => (
        <span key={index} className="word inline-block mr-4 relative">
          <span className="inline-block">{word}</span>
        </span>
      ))}
    </div>
  );
};

export default MultiWithDot;
