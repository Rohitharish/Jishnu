// components/Preloader.js
"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

const Preloader = ({ children }) => {
  const preloaderRef = useRef();
  const textRef = useRef();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeline = gsap.timeline();

    timeline
      .fromTo(
        textRef.current,
        { opacity: 0, y: "100%" },
        { opacity: 1, y: "0%", duration: 1.5, ease: "power4.out" }
      )
      .to(preloaderRef.current, {
        y: "-100%",
        duration: 1.5,
        ease: "power4.inOut",
        delay: 0.5,
        onComplete: () => setLoading(false),
      });

    return () => timeline.kill();
  }, []);

  if (!loading) return <>{children}</>;

  return (
    <div
      ref={preloaderRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#D95F0E",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        overflow: "hidden",
      }}
    >
      <img
        alt="JU image"
        src="/JUblack.png"
        className="h-[60px] w-[60px] object-contain"
      />
    </div>
  );
};

export default Preloader;
