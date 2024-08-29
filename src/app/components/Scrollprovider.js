"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";

const ScrollProvider = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const isLargeScreen = window.innerWidth > 768;

    if (isLargeScreen) {
      const lenis = new Lenis({});

      function animate(time) {
        lenis.raf(time);
        requestAnimationFrame(animate);
      }

      requestAnimationFrame(animate);

      return () => {
        lenis.destroy();
      };
    }
  }, []);

  return <div ref={scrollRef}>{children}</div>;
};

export default ScrollProvider;
