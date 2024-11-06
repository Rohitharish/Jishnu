"use client";
import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TimelineSection from "./TimelineSection";

gsap.registerPlugin(ScrollTrigger);

function GlobalGarden() {
  return (
    <TimelineSection
      title="Global Garden"
      timeline="Feb 2024 - May 2024"
      sections={[
        {
          content: " React Native Development",
        },
        {
          content:
            "Integrated WooCommerce REST API into mobile applications, resulting in a 20% boost in e-commerce functionalities and user experience.",
        },
        {
          content:
            "Continuously optimizing and enhancing features, contributing to a 10% increase in app performance and user engagement.",
        },
      ]}
    />
  );
}

export default GlobalGarden;
