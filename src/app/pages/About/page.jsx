"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

import Info from "./Info/Info";

function Page() {
  const imagesRef = useRef([]);

  useEffect(() => {
    imagesRef.current.forEach((el, index) => {
      gsap.set(el, {
        x: index % 2 === 0 ? -100 : 100,
        opacity: 0,
      });
    });

    // Animate images into their final positions
    gsap.to(imagesRef.current, {
      x: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="h-full w-full p-[2%]">
      <Link href="/pages/About">
        <div className="grid grid-cols-3  gap-[1px]  lg:gap-1">
          {[
            "row-1-column-1.png",
            "row-1-column-2.png",
            "row-1-column-3.png",
            "row-2-column-1.png",
            "row-2-column-2.png",
            "row-2-column-3.png",
            "row-3-column-1.png",
            "row-3-column-2.png",
            "row-3-column-3.png",
          ].map((src, index) => (
            <div className="text-center overflow-hidden" key={index}>
              <img
                ref={(el) => {
                  if (el) imagesRef.current[index] = el;
                }}
                className="h-full w-full object-cover"
                src={`/${src}`}
                alt={`Profilepic ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </Link>
      <Info />
    </div>
  );
}

export default Page;
