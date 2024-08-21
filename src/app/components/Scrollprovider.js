"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";

const ScrollProvider = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      // You can configure options here
    });

    function animate(time) {
      lenis.raf(time);
      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);

    return () => {
      // Cleanup on unmount
      lenis.destroy();
    };
  }, []);

  return <div ref={scrollRef}>{children}</div>;
};

export default ScrollProvider;
