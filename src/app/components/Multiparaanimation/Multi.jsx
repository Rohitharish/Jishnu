"use client";

import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const Multi = ({ text, className }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const words = textRef.current.querySelectorAll("span");

    gsap.set(words, { opacity: 0, y: 20 });

    const animation = gsap.to(
      words,

      {
        opacity: 1,
        y: -2,
        duration: 1,
        ease: "power3.out",
        stagger: 0.01,

        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "bottom 20%",
        },
      }
    );
    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div ref={textRef} className={` ${className}`}>
      {text.split(" ").map((word, index) => (
        <span className=" inline-block  overflow-hidden    ">
          <span key={index} className=" inline-block   mr-2    ">
            {word}
          </span>
        </span>
      ))}
    </div>
  );
};

export default Multi;
