"use client";
import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TimelineSection from "./TimelineSection";

gsap.registerPlugin(ScrollTrigger);

function Moshi() {
  return (
    <TimelineSection
      title="Moshi - Moshi"
      timeline="May 2024 - Present"
      sections={[
        {
          content:
            "Designed and implemented mobile applications for a jewellery management system and an e-commerce management system using React Native. Enhanced features for vendor creation, product recommendations, and product order tracking .",
        },
        {
          content:
            "Utilized ReactJS to build and optimize an admin panel, providing administrative users with robust tools for managing inventory, tracking orders.",
        },
        {
          content:
            "Implemented a vendor panel using ReactJS, enabling vendors to manage their products, view analytics, and track orders efficiently.",
        },
      ]}
    />
  );
}

export default Moshi;
