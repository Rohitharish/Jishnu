"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Paragraph from "../Paragraphanimation/Paragraph";
import MultiWithDot from "../TextAnimations/MultiWithDot";
import Multi from "../Multiparaanimation/Multi";

gsap.registerPlugin(ScrollTrigger);

function TimelineSection({ title, timeline, sections }) {
  const lineref = useRef(null);
  const containref = useRef(null);

  useEffect(() => {
    const line = lineref.current;
    gsap.set(line, { scaleY: 0, transformOrigin: "top" });

    const tl = gsap.timeline({ ease: "power1.inOut" });

    tl.to(line, {
      scaleY: 1,
      scrollTrigger: {
        trigger: containref.current,
        start: "20% top",
        end: "bottom bottom",
        scrub: 6,
      },
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={containref}
      className="flex relative flex-col h-[200vh] lg:h-[400vh] w-full px-[5%] sm:px-[10%] lg:px-[5%] "
    >
      {title && (
        <Multi
          className="flex h-[100vh] w-full items-center justify-center text-white text-4xl md:text-7xl lg:text-9xl uppercase"
          text={title}
        />
      )}

      <div className="h-[80vh] lg:h-[250vh] w-[0.5px] absolute bg-zinc-800 top-[100vh] left-[5%] lg:left-1/2"></div>
      <div
        ref={lineref}
        className="h-[80vh] lg:h-[250vh] w-[0.5px] absolute bg-orange-500 top-[100vh] left-[5%] lg:left-1/2"
      ></div>

      {timeline && (
        <Paragraph
          className="w-full text-white text-xs sm:text-sm md:text-base font-major"
          text={timeline}
        />
      )}

      {sections.map((section, index) => (
        <section
          key={index}
          className={`flex w-full flex-col justify-center font-major h-[50vh] lg:h-[100vh] ${
            index % 2 === 0
              ? "lg:items-end pl-[8%] lg:pl-[40%]"
              : "lg:items-center pl-[8%] lg:pr-[40%]"
          }`}
        >
          <MultiWithDot
            className="w-full sm:w-1/2 lg:w-1/2 text-white text-xs sm:text-sm md:text-base leading-[1.2] font-major lowercase"
            text={section.content}
          />
        </section>
      ))}
    </div>
  );
}

export default TimelineSection;
