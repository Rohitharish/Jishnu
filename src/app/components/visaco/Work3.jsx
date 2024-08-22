"use client";

import gsap from "gsap";
import React from "react";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Work3() {
  const MCref = useRef(null);
  const ICref = useRef(null);
  const IMref = useRef(null);
  const textRef = useRef(null);
  const L1Ref = useRef(null);
  const IRef = useRef(null);
  const B1ref = useRef(null);

  useEffect(() => {
    const Imagecontainer = ICref.current;
    const Image = IMref.current;

    const line = L1Ref.current;

    const Border1 = B1ref.current;

    const master = gsap.timeline();

    const setinitialposition = () => {
      gsap.set(Imagecontainer, { scale: 1 });
      gsap.set(Image, { scale: 1 });
    };

    const Finalanimation = () => {
      const tl = gsap.timeline();

      tl.to(Imagecontainer, {
        scale: 0.95,
        borderRadius: 10,
        scrollTrigger: {
          trigger: Imagecontainer,
          start: "0%",
          end: "100%",

          scrub: 1,
        },
      });
      tl.to(
        Image,
        {
          scale: 1.2,
          scrollTrigger: {
            trigger: Imagecontainer,
            start: "0%",
            end: "100%",

            scrub: 1,
          },
        },
        "<"
      );

      return tl;
    };
    master.add(setinitialposition).add(Finalanimation);

    return () => {
      master.kill();
    };
  }, []);
  return (
    <main className="flex flex-col relative  h-[200vh] w-full font-[modest] ">
      {/* This is the subcontainer with sticky property */}
      <section
        ref={ICref}
        className="flex sticky top-0 h-[100vh] w-full object-cover  overflow-clip "
      >
        <span className="flex h-full w-full items-center justify-center z-50 absolute text-8xl text-white">
          VISACO
        </span>
        <img
          ref={IMref}
          className="h-[100vh] w-[100vw] object-cover"
          src="/Zelt.png"
        />
      </section>
      {/* This is the subcontainer with sticky property */}
    </main>
  );
}

export default Work3;
