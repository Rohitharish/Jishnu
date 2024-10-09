"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import useCursorStore from "@/path/to/cursorStore";

const CustomCursor = ({ size, hoverScale, hoverColor, defaultColor }) => {
  const { position, isHovered, updateCursorPosition, setHoverState } =
    useCursorStore();
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      updateCursorPosition(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [updateCursorPosition]);

  useEffect(() => {
    const target = cursorRef.current;
    if (!target) return;

    gsap.to(target, {
      x: position.x,
      y: position.y,
      duration: 0.3,
      ease: "power2.out",
      overwrite: true,
    });
  }, [position]);

  useEffect(() => {
    const target = cursorRef.current;
    if (!target) return;

    gsap.to(target, {
      scale: isHovered ? hoverScale : 1,
      backgroundColor: isHovered ? hoverColor : defaultColor,
      duration: 0.3,
      ease: "power2.out",
      overwrite: true,
    });
  }, [isHovered, hoverScale, hoverColor, defaultColor]);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: defaultColor,
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
      }}
    />
  );
};

export default CustomCursor;
