// Package imports
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

// Component imports
import { PlayDate } from "./PlayDate";
import { NameTag } from "./NameTag";
import GarrettFace from "./GarrettFace";
import Background from "./Background";

export default function Scene({ action, setAction }) {
  return (
    <Canvas
    // orthographic
    // camera={{
    //   position: [0, 0, 2],
    //   left: -2,
    //   right: 2,
    //   top: 2,
    //   bottom: -2,
    //   zoom: 100,
    // }}
    >
      {/* <OrbitControls /> */}

      {/* Lighting */}
      <ambientLight intensity={1} />
      <directionalLight position={[4, 5, 6]} intensity={1} color={"#fff"} />
      <directionalLight position={[1, 1, 1]} intensity={1} color={"#fff"} />

      <Environment preset="city" />

      {/*  maybe add subtle sparkles later, read drei docs */}
      {/* <Sparkles /> */}

      {/* Background Sphere */}
      {/* <Background action={action} setAction={setAction} /> */}

      {/* Objects */}
      <Float
        action={action}
        speed={1} // Animation speed, defaults to 1
        rotationIntensity={action === "home" ? 0.7 : 0.25} // XYZ rotation intensity, defaults to 1
        floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={action === "home" ? [0.15, -0.15] : [0.05, 0.05]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <GarrettFace action={action} setAction={setAction} />
      </Float>
      <Float
        action={action}
        speed={1}
        rotationIntensity={0.7}
        floatIntensity={1}
        floatingRange={[-0.1, 0.1]}
      >
        <NameTag action={action} setAction={setAction} />
      </Float>
      <Float
        action={action}
        speed={1}
        rotationIntensity={0.7}
        floatIntensity={1}
        floatingRange={[-0.1, 0.1]}
      >
        <PlayDate action={action} setAction={setAction} />
      </Float>
    </Canvas>
  );
}
