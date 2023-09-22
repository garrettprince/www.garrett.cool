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
import { Depth, LayerMaterial } from "lamina";

export default function Background({ action, setAction }) {
  const { scale, position, rotation, color } = useSpring({
    scale:
      (action === "playDate" ? 50 : 35) ||
      (action === "home" ? 0.75 : 0) ||
      (action !== "playDate" || "home" ? 0 : 0),
    position: action === "playDate" ? [0, 0.5, 0] : [1.4, 2.5, 0],
    rotation: action === "playDate" ? [1, 1, 1] : [0, 0, 0],
    // color: action === "playDate" ? `${"#b52b4e"}` : `${"#fff"}`,
  });

  const meshRef = useRef();

  return (
    <animated.mesh ref={meshRef} scale={scale} rotation={rotation}>
      <sphereGeometry args={[1, 64, 64]} />
      <LayerMaterial side={THREE.BackSide}>
        <Depth
          action={action}
          colorA="#b52b4e"
          colorB="#0081fc"
          alpha={1}
          mode="normal"
          near={220}
          far={250}
          origin={[100, 100, -100]}
          grain={10}
        />
      </LayerMaterial>
    </animated.mesh>
  );
}
