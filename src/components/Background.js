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
  return (
    <mesh scale={100}>
      <sphereGeometry args={[1, 64, 64]} />
      <LayerMaterial side={THREE.BackSide} />
      <Depth
        colorA="#f21a62"
        colorB="#0081fc"
        alpha={1}
        mode="normal"
        near={130}
        far={200}
        origin={[100, 100, -100]}
      />
      <LayerMaterial />
    </mesh>
  );
}
