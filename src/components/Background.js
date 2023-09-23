import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  OrbitControls,
  useGLTF,
  useAnimations,
  Sparkles,
  BakeShadows,
} from "@react-three/drei";
import { useState, useRef } from "react";
import { useSpring, animated } from "@react-spring/three";
import * as THREE from "three";
import { Depth, LayerMaterial, Noise } from "lamina";

export default function Background({ action, setAction }) {
  const { scale, position, rotation, color } = useSpring({
    scale:
      (action === "playDate" ? 50 : 35) ||
      (action === "home" ? 0.75 : 0) ||
      (action !== "playDate" || "home" ? 0 : 0),
    position: action === "playDate" ? [0, 0.5, 0] : [1.4, 2.5, 0],
    rotation: action === "playDate" ? [1, 1, 1] : [2, 2, 7],
    // color: action === "playDate" ? "#b52b4e" : `${"#fff"}`,
  });

  const meshRef = useRef();

  return (
    <animated.mesh
      ref={meshRef}
      scale={scale}
      rotation={rotation}
      action={action}
    >
      <sphereGeometry args={[1, 64, 64]} action={action} />
      <LayerMaterial side={THREE.BackSide} action={action}>
        <Depth
          action={action}
          colorA={action === "playDate" ? "#eb4034" : "#fff"}
          colorB="blue"
          alpha={1}
          mode="normal"
          near={250}
          far={100}
          origin={[100, 100, -100]}
        />
        {/* <Noise colorA="black" alpha={0.1} /> */}
      </LayerMaterial>
    </animated.mesh>
  );
}
