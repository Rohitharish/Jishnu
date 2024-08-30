import React, { useRef, useEffect } from "react";
import { Text, useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

import * as THREE from "three";

function Model() {
  const { nodes } = useGLTF("/c.glb");
  const modelRef = useRef();
  const { scene } = useThree();
  const { viewport } = useThree();
  const fontSize = viewport.width * 0.2;

  return (
    <group>
      <Text position={[0, 0, 1]} fontSize={fontSize} color="white">
        bonjour
      </Text>
      <mesh ref={modelRef} geometry={nodes.defaultMaterial.geometry}>
        <meshPhysicalMaterial
          envMap={scene.environment}
          metalness={0}
          roughness={0.2}
          transmission={1.5}
          thickness={0.5}
          transparent={true}
          opacity={1}
          reflectivity={0.5}
          clearcoat={1}
          clearcoatRoughness={0}
          color="#2C2C2C"
        />
      </mesh>
    </group>
  );
}

export default Model;
