"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import ReusableScrollAnimation from "@/app/components/Workcomponent/Work";
import Detail1 from "./Detail";

function Page() {
  useEffect(() => {
    gsap.to(".reveal", { yPercent: -100, duration: 1.5, ease: "power4.inOut" });
  }, []);

  return (
    <div className="relative h-full w-full ">
      <div className="reveal fixed inset-0 bg-black z-50"></div>
      {/* Project zelt */}
      <section className="">
        <ReusableScrollAnimation
          imageSrc="/sample2.jpg"
          scaleInitial={1}
          scaleFinal={0.9}
          imageinitialscale={1}
          imagefinalscale={1.2}
          borderRadius={10}
          scrub={1}
          start="0%"
          end="100%"
        />

        <Detail1 />
      </section>
      {/* Project zelt */}
    </div>
  );
}

export default Page;
