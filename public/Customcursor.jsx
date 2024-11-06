"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor = ({ size, hoverScale, hoverColor, defaultColor }) => {
  const { cursorState, updateCursorPosition, setHoverState } = useCursor();
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
      x: cursorState.position.x,
      y: cursorState.position.y,
      duration: 0.3,
      ease: "power2.out",
      overwrite: true,
    });
  }, [cursorState.position]);

  useEffect(() => {
    const target = cursorRef.current;
    if (!target) return;

    gsap.to(target, {
      scale: cursorState.isHovered ? hoverScale : 1,
      backgroundColor: cursorState.isHovered ? hoverColor : defaultColor,
      duration: 0.3,
      ease: "power2.out",
      overwrite: true,
    });
  }, [cursorState.isHovered, hoverScale, hoverColor, defaultColor]);

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
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
    />
  );
};

export default CustomCursor;
