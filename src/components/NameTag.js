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

export function NameTag({ action, setAction }) {
  const { scale, color, position, opacity } = useSpring({
    color: action === "nameTag" ? "blue" : "red",
    scale: action !== "home" ? 0 : 0.7,
    position: action === "nameTag" ? [0, 0.5, 0] : [-1, 3.2, 0],
    // opacity: action === "home" ? 1 : 0,
  });

  // This reference will give us direct access to the mesh
  const meshRef = useRef();

  // Subscribe this component to the render-loop, animating the mesh every frame
  useFrame(() => {
    meshRef.current.rotation.y += 0.001;
  });

  return (
    <animated.mesh
      ref={meshRef}
      position={position}
      transparent={false}
      scale={scale}
      onClick={() =>
        action === "home" ? setAction("nameTag") : setAction("home")
      }
    >
      <animated.boxGeometry />
      <animated.meshPhongMaterial transparent color={color} opacity={opacity} />
    </animated.mesh>
  );
}
