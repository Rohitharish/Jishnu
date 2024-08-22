"use client";

import gsap from "gsap";
import React from "react";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ReusableScrollAnimation({
  imageSrc = "/defaultImage.png",
  text = "Default Text",
  scaleInitial = 1,
  scaleFinal = 1.2,
  borderRadius = 10,
  scrub = 1,
  start = "0%",
  end = "100%",
  className = "",
}) {
  const ICref = useRef(null);
  const IMref = useRef(null);

  useEffect(() => {
    const Imagecontainer = ICref.current;
    const Image = IMref.current;

    const master = gsap.timeline();

    const setInitialPosition = () => {
      gsap.set(Imagecontainer, { scale: scaleInitial });
      gsap.set(Image, { scale: scaleInitial });
    };

    const finalAnimation = () => {
      const tl = gsap.timeline();

      tl.to(Imagecontainer, {
        scale: 0.95,
        borderRadius: borderRadius,
        scrollTrigger: {
          trigger: Imagecontainer,
          start: start,
          end: end,
          scrub: scrub,
        },
      });
      tl.to(
        Image,
        {
          scale: scaleFinal,
          scrollTrigger: {
            trigger: Imagecontainer,
            start: start,
            end: end,
            scrub: scrub,
          },
        },
        "<"
      );

      return tl;
    };

    master.add(setInitialPosition).add(finalAnimation);

    return () => {
      master.kill();
    };
  }, [scaleInitial, scaleFinal, borderRadius, scrub, start, end]);

  return (
    <main className={`flex flex-col relative h-[200vh] w-full font-[modest] ${className}`}>
      <section
        ref={ICref}
        className="flex sticky top-0 h-[100vh] w-full object-cover overflow-clip"
      >
        <span className="flex h-full w-full items-center justify-center z-50 absolute text-8xl text-white">
          {text}
        </span>
        <img
          ref={IMref}
          className="h-[100vh] w-[100vw] object-cover"
          src={imageSrc}
          alt={text}
        />
      </section>
    </main>
  );
}

export default ReusableScrollAnimation;
