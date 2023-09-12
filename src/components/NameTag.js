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
  useFrame(() => {
    action === "nameTag"
      ? (meshRef.current.rotation.y += 0.005)
      : (meshRef.current.rotation.y = 0);
  });

  const { scale, position } = useSpring({
    scale:
      (action === "nameTag" ? 2 : 0) ||
      (action === "home" ? 0.5 : 0) ||
      (action !== "nameTag" || "home" ? 0 : 0),
    position: action === "nameTag" ? [0, 0.5, 0] : [0, 3.2, 0],
  });

  // This reference will give us direct access to the mesh
  const meshRef = useRef();

  // Subscribe this component to the render-loop, animating the mesh every frame

  return (
    <animated.mesh
      ref={meshRef}
      position={position}
      scale={scale}
      onClick={() =>
        action === "home" ? setAction("nameTag") : setAction("home")
      }
    >
      <animated.boxGeometry />
      <animated.meshPhongMaterial color={"red"} />
    </animated.mesh>
  );
}
