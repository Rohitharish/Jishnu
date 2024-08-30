"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

function Preloader() {
  const loaderRef = useRef(null);
  const PLTRef = useRef(null);
  const RevealRef = useRef(null);

  useEffect(() => {
    const Preloadertext = PLTRef.current;
    const Reveal = RevealRef.current;
    const loaderbar = loaderRef.current;

    const master = gsap.timeline();

    const setInitialPosition = () => {
      gsap.set(Preloadertext, { opacity: 0 });
      gsap.set(Reveal, { opacity: 1 });
    };

    const Preloaderanimation = () => {
      const tl = gsap.timeline();

      tl.to(Preloadertext, {
        opacity: 1,
        ease: "power2.out",
        duration: 2,
      });

      tl.to(Preloadertext, {
        opacity: 0,
        ease: "power2.out",
        duration: 2,
      });

      tl.to(Reveal, {
        opacity: 0,

        duration: 1,
      });
      tl.to(Reveal, {
        yPercent: -100,

        duration: 1,
      });
      return tl;
    };

    master.add(setInitialPosition()).add(Preloaderanimation());

    return () => {
      master.kill();
    };
  }, []);

  return (
    <div
      ref={RevealRef}
      className="flex  items-center justify-center fixed top-0 h-[100vh] w-full bg-black overflow-hidden  z-[90] "
    >
      <span
        ref={PLTRef}
        className=" flex text-center items-center justify-center text-white text-xs md:text-base lg:text-base w-full md:w-[40%] lg:w-[30%] "
      >
        Hey i am jishnu dev building dynamic and responsive web applications..
      </span>
    </div>
  );
}

export default Preloader;
