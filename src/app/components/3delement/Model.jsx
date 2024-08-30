import React, { useRef, useEffect } from "react";
import { Text, useGLTF } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Model() {
  const { nodes } = useGLTF("/c.glb");
  const modelRef = useRef();
  const { scene } = useThree();
  const { viewport } = useThree();
  const fontSize = viewport.width * 0.2;
  const bounceAmplitude = 0.1;
  const bounceSpeed = 0.6;
  useEffect(() => {
    const mesh = modelRef.current;

    return () => {
      if (mesh) {
        mesh.geometry.dispose();
        mesh.material.dispose();
      }
    };
  }, []);
  useFrame(({ clock }) => {
    if (modelRef.current) {
      const elapsedTime = clock.getElapsedTime();

      const yOffset = Math.sin(elapsedTime * bounceSpeed) * bounceAmplitude;
      modelRef.current.position.y = yOffset;
    }
  });

  return (
    <group>
      <Text position={[0, 0, 1]} fontSize={fontSize} color="white">
        bonjour
      </Text>
      <mesh
        position={[0, 0, 2]}
        ref={modelRef}
        geometry={nodes.defaultMaterial.geometry}
      >
        <meshPhysicalMaterial
          envMap={scene.environment}
          color="#2C2C2C"
          roughness={0.4}
          metalness={1}
          opacity={0.6}
          transparent={true}
        />
      </mesh>
    </group>
  );
}

export default Model;
