"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Marquee() {
  const maintext = useRef(null);
  const secondtext = useRef(null);

  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    requestAnimationFrame(animation);
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }

    if (xPercent > 0) {
      xPercent;
    }

    gsap.set(maintext.current, { xPercent: xPercent });
    gsap.set(secondtext.current, { xPercent: xPercent });
    xPercent += 0.05 * direction;
    requestAnimationFrame(animation);
  };

  return (
    <main
      className="absolute  top-full   w-full overflow-x-hidden z-50"
      style={{ top: "calc(100vh - 20vh)" }}
    >
      <div className="relative flex flex-row whitespace-nowrap text-white text-base w-[1500px]">
        <p ref={maintext} className="">
          - jishnu t raj - - jishnu t raj - - jishnu t raj - - jishnu t raj - -
          jishnu t raj - - jishnu t raj - - jishnu t raj - - jishnu t raj - -
          jishnu t raj - -
        </p>
        <p ref={secondtext} className=" absolute  left-[120%]">
          - - jishnu t raj - - jishnu t raj - - jishnu t raj - - jishnu t raj -
          - jishnu t raj - - jishnu t raj - - jishnu t raj - - jishnu t raj - -
          jishnu t raj
        </p>
      </div>
    </main>
  );
}
