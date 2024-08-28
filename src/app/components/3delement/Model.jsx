import React, { useEffect, useMemo, useRef, useState } from "react";
import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

function Model() {
  const { nodes } = useGLTF("/U.glb");
  const modelRef = useRef();

  const { viewport } = useThree();
  const [cursorPosition, setCursorPosition] = useState(new THREE.Vector3());

  const materialProps = useMemo(
    () => ({
      thickness: 1,
      roughness: 0.2,
      transmission: 1,
      ior: 1,
      chromaticAberration: 0.04,
      backside: true,
    }),
    []
  );

  const handlePointerMove = (event) => {
    const { x, y } = event.point;
    setCursorPosition(new THREE.Vector3(x, y, 0));
  };

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.position.lerp(cursorPosition, 0.004);
    }
  });

  return (
    <group
      scale={[2, 2, 2]}
      position={[0, 0, 0]}
      onPointerMove={handlePointerMove}
      
    >
      <mesh ref={modelRef} geometry={nodes.defaultMaterial.geometry}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
      <Text position={[0, 0, -4]} fontSize={3} color="white">
        bonjour
      </Text>
    </group>
  );
}

export default Model;
