"use client";

import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const Paragraph = ({ text, className }) => {
  const textRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    let currentText = "";
    const characters = text.split("");

    const typeText = gsap.timeline({
      onUpdate: () => {
        textRef.current.textContent = currentText;
      },
      scrollTrigger: {
        trigger: textRef.current,
        start: "top bottom",
      },
    });

    characters.forEach((char, i) => {
      typeText.add(() => {
        currentText += char;
      }, i * 0.3);
    });

    gsap.to(cursorRef.current, {
      opacity: 1,

      ease: "power2.inOut",
      duration: 0.5,
    });

    return () => {
      typeText.kill();
      gsap.killTweensOf(cursorRef.current);
    };
  }, [text]);

  return (
    <div className={`relative ${className}`}>
      <span ref={textRef} className="command-prompt-text font-majorMono"></span>
      <span ref={cursorRef}>|</span>
    </div>
  );
};

export default Paragraph;
