"use client";
import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TimelineSection from "./TimelineSection";

gsap.registerPlugin(ScrollTrigger);

function Hexbit() {
  return (
    <TimelineSection
      title="Hexbit"
      timeline="Sep 2023 - Feb 2024"
      sections={[
        {
          content:
            "Devoted around 50% of my efforts to crafting reusable components and front-end libraries using React.",
        },
        {
          content:
            "Implemented enhancements to the ONDC API, optimizing seller-side and admin-side functionalities.",
        },
        {
          content:
            "Developed and optimized 10+ API endpoints using JavaScript & Node.js, and tested using Postman",
        },
      ]}
    />
  );
}

export default Hexbit;
