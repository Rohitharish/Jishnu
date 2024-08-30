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

  useEffect(() => {
    const mesh = modelRef.current;

    // Cleanup function
    return () => {
      if (mesh) {
        mesh.geometry.dispose(); // Dispose of geometry
        mesh.material.dispose(); // Dispose of material
      }
    };
  }, []);

  return (
    <group>
      <Text position={[0, 0, 1]} fontSize={fontSize} color="white">
        bonjour
      </Text>
      <mesh ref={modelRef} geometry={nodes.defaultMaterial.geometry}>
        <meshPhysicalMaterial
          envMap={scene.environment}
          color="#2C2C2C"
          roughness={0.2} // Increased roughness to simplify appearance
          metalness={0.8} // Lower metalness to reduce complexity
          opacity={0.8} // Keep opacity at 1 if transparency is not needed
          transparent={true}
        />
      </mesh>
    </group>
  );
}

export default Model;
