// Scene will hold all 3D objects and manage transitions through user input and interaction

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { useState } from "react";
import { useSpring, animated } from "@react-spring/three";

export default function Scene({ action, setAction }) {
  // const { scale, color, position } = useSpring({
  //   color: action === "new" ? "blue" : "red",
  //   scale: action === "new" ? 2 : 0.9,
  //   // position: blockActive ? [0, 0, 0] : [-2, 2.75, 0],
  // });

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
      <TestBox
        // scale={scale}
        // color={color}
        action={action}
        setAction={setAction}
      />
      <TestBox2 action={action} />
    </Canvas>
  );
}

function TestBox({ action, setAction }) {
  const { scale, color, position } = useSpring({
    color: action === "new" ? "blue" : "red",
    scale: action === "new" ? 2 : 0.9,
    // position: blockActive ? [0, 0, 0] : [-2, 2.75, 0],
  });
  return (
    <animated.mesh
      onClick={() => setAction("new")}
      rotation={[1, 1, 1]}
      scale={scale}
    >
      <animated.boxGeometry />
      <animated.meshStandardMaterial color={color} />
    </animated.mesh>
  );
}

function TestBox2({ action }) {
  const { scale, color, position } = useSpring({
    // color: action === "new" ? "blue" : "red",
    scale: action === "new" ? 0.5 : 1,
    position: action === "new" ? [-1.35, -3.7, 0] : [1, 1, 1],
  });

  return (
    <animated.mesh
      rotation={[0, 1, 1]}
      position={position}
      transparent={false}
      scale={scale}
    >
      <animated.boxGeometry />
      <animated.meshStandardMaterial color="blue" />
    </animated.mesh>
  );
}
