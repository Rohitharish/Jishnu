"use client";

import gsap from "gsap";
import React from "react";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ReusableScrollAnimation({
  imageSrc,
  text,
  scaleInitial = 1,
  scaleFinal = 0.98,
  imageinitialscale,
  imagefinalscale,
  borderRadius = 10,
  scrub = 1,
  start = "0%",
  end = "100%",
  className = "",
}) {
  const ICref = useRef(null);
  const IMref = useRef(null);
  const Bref = useRef(null);

  useEffect(() => {
    const Imagecontainer = ICref.current;
    const Image = IMref.current;
    const blur = Bref.current;

    const master = gsap.timeline();

    const setInitialPosition = () => {
      gsap.set(Imagecontainer, { scale: scaleInitial });
      gsap.set(Image, { scale: imageinitialscale });
    };

    const finalAnimation = () => {
      const tl = gsap.timeline();

      tl.to(Imagecontainer, {
        scale: scaleFinal,
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
          scale: imagefinalscale,
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
  }, [
    imageinitialscale,
    imagefinalscale,
    scaleInitial,
    scaleFinal,
    borderRadius,
    scrub,
    start,
    end,
  ]);

  return (
    <main
      className={`flex flex-col relative h-[100vh] md:h-[200vh]  lg:h-[200vh] w-full font-custom  ${className}`}
    >
      <section
        ref={ICref}
        className="flex sticky top-0 h-[60vh] md:h-[100vh] lg:h-[100vh] w-full object-cover overflow-clip"
      >
        <span className="flex h-full w-full items-center justify-center z-50 absolute text-9xl text-white  tracking-widest">
          {text}
        </span>
        <img
          ref={IMref}
          className="h-[60vh] md:h-[100vh] lg:h-[100vh] w-[100vw] object-cover"
          src={imageSrc}
          alt={text}
        />
      </section>
    </main>
  );
}

export default ReusableScrollAnimation;
