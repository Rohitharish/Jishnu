"use client";
import React, { useEffect, useRef } from "react";
import Maintext from "../Maintextanimation/Maintext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Multi from "../Multiparaanimation/Multi";
import Paragraph from "../Paragraphanimation/Paragraph";

gsap.registerPlugin(ScrollTrigger);

function Aunest() {
  const lineref = useRef(null);
  const containref = useRef(null);

  const dotref1 = useRef(null);
  const dotref2 = useRef(null);
  const dotref3 = useRef(null);

  useEffect(() => {
    const line = lineref.current;
    const dot1 = dotref1.current;
    const dot2 = dotref2.current;
    const dot3 = dotref3.current;

    gsap.set(line, { scaleY: 0, transformOrigin: "top" });
    gsap.set([dot1, dot2, dot3], { opacity: 0 });

    const tl = gsap.timeline({
      ease: "power1.inOut",
    });

    tl.to(line, {
      scaleY: 1,
      scrollTrigger: {
        trigger: containref.current,
        start: "-10% top",
        end: "bottom bottom",

        scrub: 6,
      },
    });
    tl.to(dot1, {
      opacity: 1,
      y: -10,
      duration: 0.5,
      ease: "bounce.out",
      scrollTrigger: {
        trigger: dotref1.current,
        start: `center center`,
        end: `center center`,
        scrub: 6,
      },
    });
    tl.to(dot2, {
      opacity: 1,
      scrollTrigger: {
        trigger: dotref2.current,
        start: `center center`,
        end: `center center`,
        scrub: 6,
      },
    });
    tl.to(dot3, {
      opacity: 1,
      scrollTrigger: {
        trigger: dotref3.current,
        start: `center center`,
        end: `center center`,
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
      className="flex relative flex-col h-[200vh] lg:h-[300vh] w-full px-[5%]  "
    >
      <div className="h-[80vh] lg:h-[250vh] w-[0.5px] absolute bg-zinc-800 top-[0vh] left-[5%]  lg:left-1/2"></div>
      <div
        ref={lineref}
        className="h-[80vh] lg:h-[250vh] w-[0.5px] absolute bg-orange-500 top-[0vh] left-[5%] lg:left-1/2"
      ></div>
      <div
        ref={dotref1}
        className="h-[15px] w-[15px] rounded-full bg-white absolute left-[3%] lg:left-[49.6%] top-[100vh] lg:top-[148vh]"
      ></div>
      <div
        ref={dotref2}
        className="h-[15px] w-[15px] rounded-full bg-white absolute left-[3%] lg:left-[49.6%] top-[150vh] lg:top-[250vh]"
      ></div>

      <div
        ref={dotref3}
        className="h-[15px] w-[15px] rounded-full bg-white absolute left-[3%] lg:left-[49.6%] top-[200vh] lg:top-[350vh]"
      ></div>
      <Paragraph
        className=" w-full    text-white text-sm font-major"
        text="sep 2023 - feb 2024"
      />
      <Multi
        className=" w-full md-w-1/2 lg:w-1/2    text-white text-6xl"
        text="Aunest"
      />

      <section className="flex h-[50vh] lg:h-[100vh] w-full  flex-col items-end justify-center pl-[8%] lg:pl-[40%]  ">
        <Multi
          className=" w-full md-w-1/2 lg:w-1/2    text-white text-base leading-[1.2] font-major lowercase"
          text="Designed and implemented mobile applications for a jewellery management system and an e-commerce management system using React Native. Enhanced features for vendor creation, product recommendations, and product order tracking ."
        />
      </section>

      <section className="flex h-[50vh] lg:h-[100vh]  w-full flex-col items-center justify-center  space-y-2 pl-[8%] lg:pr-[40%]  font-major">
        <Multi
          className=" w-full md-w-1/2 lg:w-1/2   text-white text-base leading-[1.2] font-major lowercase"
          text="Utilized ReactJS to build and optimize an admin panel, providing administrative users with robust tools for managing inventory, tracking orders."
        />
      </section>

      <section className="flex h-[50vh] lg:h-[100vh]  w-full flex-col items-center justify-center space-y-2 pl-[8%] lg:pl-[40%]  font-major ">
        <Multi
          className=" w-full md-w-1/2 lg:w-1/2   text-white text-base leading-[1.2] font-major lowercase"
          text="Implemented a vendor panel using ReactJS, enabling vendors to manage their products, view analytics, and track orders efficiently."
        />
      </section>
    </div>
  );
}

export default Aunest;
