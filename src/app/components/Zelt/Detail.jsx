"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Detail() {
  const DCref = useRef(null);
  const S1ref = useRef(null);
  const S2ref = useRef(null);
  const S3ref = useRef(null);
  const SD1ref = useRef(null);
  const SD2ref = useRef(null);
  const SD3ref = useRef(null);
  const L1ref = useRef(null);
  const L2ref = useRef(null);
  const L3ref = useRef(null);

  useEffect(() => {
    const Detailmaincontainer = DCref.current;
    const Sentence1 = S1ref.current;
    const Sentence2 = S2ref.current;
    const Sentence3 = S3ref.current;
    const Sentencedetail1 = SD1ref.current;
    const Sentencedetail2 = SD2ref.current;
    const Sentencedetail3 = SD3ref.current;
    const Line1 = L1ref.current;
    const Line2 = L2ref.current;
    const Line3 = L3ref.current;

    // Set initial positions
    gsap.set(
      [
        Sentence1,
        Sentence2,
        Sentence3,
        Sentencedetail1,
        Sentencedetail2,
        Sentencedetail3,
      ],
      { xPercent: 0 }
    );
    gsap.set([Line1, Line2, Line3], { width: "0%" });

    const Finalanimation = gsap.timeline({
      scrollTrigger: {
        trigger: Detailmaincontainer,
        start: "top bottom",
        end: "bottom top",

        markers: true,
        ease: "power2.inOut",
      },
    });

    Finalanimation.to(Sentence1, { xPercent: 100, duration: 4 })
      .to(Sentence2, { xPercent: 100, duration: 4 }, "-=3") // Overlap animations by 3 seconds
      .to(Sentence3, { xPercent: 100, duration: 4 }, "-=3")
      .to(Sentencedetail1, { xPercent: 100, duration: 4 }, "-=3")
      .to(Sentencedetail2, { xPercent: 100, duration: 4 }, "-=3")
      .to(Sentencedetail3, { xPercent: 100, duration: 4 }, "-=3");

    // Line animation
    const Lineanimation = gsap.timeline({
      scrollTrigger: {
        trigger: Detailmaincontainer,
        start: "top bottom",
        end: "bottom top",

        ease: "power2.inOut",
      },
    });

    Lineanimation.to(Line1, { width: "100%", duration: 3 })
      .to(Line2, { width: "100%", duration: 3 }, "-=2")
      .to(Line3, { width: "100%", duration: 3 }, "-=2");

    return () => {
      Finalanimation.kill();
      Lineanimation.kill();
    };
  }, []);

  return (
    <div
      ref={DCref}
      className="relative grid grid-cols-12 h-[60vh] w-full text-xs md:text-sm lg:text-sm px-[5%]"
    >
      <div
        ref={L1ref}
        className="absolute top-0 h-[1px] w-full bg-zinc-500"
      ></div>

      <div
        ref={L2ref}
        className="absolute top-1/2 h-[1px] w-full bg-zinc-500"
      ></div>

      <div
        ref={L3ref}
        className="absolute top-[100%] h-[1px] w-full bg-zinc-500"
      ></div>

      {/* first detail section */}
      <section className="col-span-12 md:col-span-12 lg:col-span-6 h-full w-full overflow-hidden">
        <div className="flex h-full w-full items-center justify-start">
          <div className="flex relative">
            <span className="flex h-full w-full items-center justify-start">
              sep 2023 - feb 2024
            </span>
            <div
              ref={S1ref}
              className="absolute h-[20px] w-[300px] flex left-0 bg-black overflow-hidden border-l-4"
            ></div>
          </div>
        </div>
      </section>

      {/* second text detail section */}
      <section className="col-span-12 md:col-span-12 lg:col-span-6 h-full w-full overflow-hidden">
        <div className="flex flex-col h-full w-full items-center justify-center">
          <div className="flex relative">
            <span className="flex h-full w-full items-center justify-start">
              jewelry booking platform with
            </span>
            <div
              ref={SD1ref}
              className="absolute h-[20px] w-[400px] flex left-0 bg-black overflow-hidden border-l-4"
            ></div>
          </div>
          <div className="flex relative">
            <span className="flex h-full w-full items-center justify-start">
              delivery for custom gold jewelry.
            </span>
            <div
              ref={SD2ref}
              className="absolute h-[20px] w-[400px] flex left-0 bg-black overflow-hidden border-l-4"
            ></div>
          </div>
          <div className="flex relative">
            <span className="flex h-full w-full items-center justify-start">
              jewelry booking platform with
            </span>
            <div
              ref={SD3ref}
              className="absolute h-[20px] w-[400px] flex left-0 bg-black overflow-hidden border-l-4"
            ></div>
          </div>
        </div>
      </section>

      {/* third text detail section */}
      <section className="col-span-12 md:col-span-12 lg:col-span-6 h-full w-full overflow-hidden">
        <div className="flex h-full w-full items-center justify-start">
          <div className="flex relative">
            <span className="flex h-full w-full items-center justify-start">
              technology
            </span>
            <div
              ref={S2ref}
              className="absolute h-[20px] w-[300px] flex left-0 bg-black overflow-hidden border-l-4"
            ></div>
          </div>
        </div>
      </section>

      {/* fourth detail section */}
      <section className="col-span-12 md:col-span-12 lg:col-span-6 h-full w-full overflow-hidden">
        <div className="flex h-full w-full items-center justify-center">
          <div className="flex relative">
            <span className="flex h-full w-full items-center justify-start">
              react native, react js
            </span>
            <div
              ref={S3ref}
              className="absolute h-[20px] w-[300px] flex left-0 bg-black overflow-hidden border-l-4"
            ></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Detail;
