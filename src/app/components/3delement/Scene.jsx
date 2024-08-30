"use client";

import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Model from "./Model";
import { Environment } from "@react-three/drei";

function Scene() {
  const isMobile = window.innerWidth < 768;

  return (
    <Canvas
      style={{ height: "100vh", width: "100%" }}
      pixelRatio={isMobile ? 1 : Math.min(window.devicePixelRatio, 2)}
    >
      <Suspense fallback={null}>
        <Model />
        {!isMobile && <Environment preset="studio" />}
      </Suspense>
    </Canvas>
  );
}

export default Scene;
