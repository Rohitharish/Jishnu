import React, { useMemo, useRef, useState } from "react";
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
      ior: 1.05,
      chromaticAberration: 0.009,
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
      const minX = -viewport.width / 3 + 1;
      const maxX = viewport.width / 3 - 1;
      const minY = -viewport.height / 4 + 1;
      const maxY = viewport.height / 4 - 1;

      const clampedPosition = cursorPosition
        .clone()
        .clamp(
          new THREE.Vector3(minX, minY, 0),
          new THREE.Vector3(maxX, maxY, 0)
        );

      modelRef.current.position.lerp(clampedPosition, 0.009);
    }
  });

  return (
    <group
      scale={[
        viewport.width / viewport.width,
        viewport.height / viewport.height,
        1,
      ]}
      position={[0, 0, 0]}
      onPointerMove={handlePointerMove}
    >
      <mesh
        scale={viewport.width / viewport.height}
        position={[0, 0, -1]}
        ref={modelRef}
        geometry={nodes.defaultMaterial.geometry}
      >
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
      <Text position={[0, 0, -4]} fontSize={viewport.width / 2.4} color="white">
        bonjour
      </Text>
    </group>
  );
}

export default Model;
