"use client";

import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Model from "./Model";
import { Environment } from "@react-three/drei";

function Scene() {
  return (
    <Canvas style={{ height: "100vh", width: "100%" }}>
      <Suspense fallback={null}>
        <Model />
        <Environment preset="studio" />
      </Suspense>
    </Canvas>
  );
}

export default Scene;
