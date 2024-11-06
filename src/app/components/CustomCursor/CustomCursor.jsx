"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorTextRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const hoverTargets = document.querySelectorAll(".hover-target");

    const handleMouseEnter = (e) => {
      if (cursorRef.current) {
        cursorRef.current.classList.add("hoverd");

        cursorTextRef.current.textContent =
          e.target.getAttribute("data-name") || "view";
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove("hoverd");
        cursorTextRef.current.textContent = "";
      }
    };

    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div ref={cursorRef} className="customCursor">
      <span ref={cursorTextRef} className="cursorText"></span>
    </div>
  );
};

export default CustomCursor;
