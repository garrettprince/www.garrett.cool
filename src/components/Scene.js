// Scene will hold all 3D objects and manage transitions through user input and interaction

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { useState } from "react";

export default function Scene() {
  return (
    <Canvas
      orthographic
      camera={{
        position: [0, 0, 2],
        left: -2,
        right: 2,
        top: 2,
        bottom: -2,
        zoom: 100,
      }}
    >
      {/* Lighting */}
      <ambientLight intensity={2} />
      <pointLight intensity={3} position={[0, 20, 10]} />

      {/* Objects */}
      <TestBox />
    </Canvas>
  );
}

function TestBox() {
  return (
    <mesh rotation={[1, 1, 1]}>
      <boxGeometry />
      <meshBasicMaterial />
    </mesh>
  );
}
