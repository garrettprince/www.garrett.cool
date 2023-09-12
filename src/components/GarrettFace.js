import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  OrbitControls,
  useGLTF,
  useAnimations,
} from "@react-three/drei";
import { useState, useRef } from "react";
import { useSpring, animated } from "@react-spring/three";
import * as THREE from "three";

export default function GarrettFace({ action, setAction }) {
  const { scale, color, position, rotation } = useSpring({
    color: action !== "home" ? "green" : "red",
    scale: action !== "home" ? 0.7 : 1.8,
    position: action !== "home" ? [-1.2, -1.8, 0] : [0, 0.5, 0],
    rotation: action !== "home" ? [0.2, 0.8, 0] : [0, 0, 0],
  });

  const meshRef = useRef();

  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state) => {
  //   if (action === "home") {
  //     meshRef.current.position.y =
  //       Math.sin(state.clock.getElapsedTime()) * 0.10;
  //   } else {
  //     meshRef.current.position.x = 0;
  //     meshRef.current.position.y = 0;
  //     meshRef.current.position.z = 0;
  //   }
  // });
  return (
    <animated.mesh
      ref={meshRef}
      // onClick={() => setAction("new")}
      scale={scale}
      position={position}
      rotation={rotation}
    >
      <animated.boxGeometry />
      <animated.meshStandardMaterial color={color} />
    </animated.mesh>
  );
}
