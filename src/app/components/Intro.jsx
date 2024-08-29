"use client";

import gsap from "gsap";

import React, { useEffect, useRef } from "react";

function Intro() {
  const text = "Work";
  const lineref = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const letters = textRef.current.querySelectorAll(".letter");

    const line = lineref.current;

    gsap.set(line, { width: "0%" });

    const tl = gsap.timeline({
      ease: "power1.inOut",
    });

    tl.to(letters, {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      duration: 0.6,
      scrollTrigger: {
        trigger: letters,
        start: "top 90%",
        end: "bottom 20%",

        scrub: 1,
      },
    });
    tl.to(line, {
      width: "100%",
      scrollTrigger: {
        trigger: letters,
        start: "top 90%",
        end: "bottom 20%",

        scrub: 3,
      },
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="flex  flex-row h-[10vh] w-full items-center justify-start Intro  px-[.5%] ">
      <div
        ref={textRef}
        className=" flex items-start px-1   overflow-hidden
           text-base "
      >
        {text.split("").map((letter, index) => (
          <span key={index} className="letter translate-y-full">
            {letter}
          </span>
        ))}
      </div>
      <div
        ref={lineref}
        className="flex  relative h-[1px] w-full  bg-zinc-500"
      ></div>
    </div>
  );
}

export default Intro;
