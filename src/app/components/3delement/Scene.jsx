"use client";

import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState, useEffect } from "react";
import Model from "./Model";
import ModelL from "./ModelL";
import { Environment } from "@react-three/drei";

function Scene() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Canvas style={{ height: "100vh", width: "100%" }}>
      <Suspense fallback={null}>
        {isLargeScreen ? <ModelL /> : <Model />}
        <Environment preset="studio" />
      </Suspense>
    </Canvas>
  );
}

export default Scene;
