import React, { useMemo, useRef, useState, useEffect } from "react";
import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function Model() {
  const { nodes } = useGLTF("/U.glb");
  const modelRef = useRef();
  const { viewport } = useThree();
  const [cursorPosition, setCursorPosition] = useState(new THREE.Vector3());
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1024);

  const materialProps = useMemo(
    () => ({
      roughness: 0.2,
    }),
    []
  );

  const handlePointerMove = (event) => {
    const { x, y } = event.point;
    setCursorPosition(new THREE.Vector3(x, y, 0));
  };

  useFrame(() => {
    if (modelRef.current && isLargeScreen) {
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

      modelRef.current.position.lerp(clampedPosition, 0.03);
    }
  });

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <group
      scale={[
        viewport.width / viewport.width,
        viewport.height / viewport.height,
        1,
      ]}
      position={[0, 0, 0]}
      onPointerMove={isLargeScreen ? handlePointerMove : false}
    >
      <mesh
        scale={(viewport.width / viewport.height, 1.5)}
        position={[0, 0, 1]}
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
