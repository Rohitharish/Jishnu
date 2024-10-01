"use client";

import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Maintext = ({ text, className }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const letters = textRef.current.querySelectorAll(".letter");

    gsap.set(letters, { opacity: 0, xPercent: 100 });

    const animation = gsap.to(letters, {
      opacity: 1,
      xPercent: 0,
      duration: 1.5,
      ease: "power3.out",
      stagger: 0.09,
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        end: "bottom 20%",
      },
    });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div ref={textRef} className={className}>
      {text.split("").map((letter, index) => (
        <span key={index} className="letter inline-block    ">
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </div>
  );
};

export default Maintext;
