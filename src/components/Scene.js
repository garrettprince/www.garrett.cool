// Package imports
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Pixelation,
  Vignette,
} from "@react-three/postprocessing";
import {
  Environment,
  Float,
  OrbitControls,
  useGLTF,
  useAnimations,
  Sparkles,
  BakeShadows,
  TransformControls,
  PresentationControls,
} from "@react-three/drei";
import { useState, useRef } from "react";
import { useSpring, animated } from "@react-spring/three";
import * as THREE from "three";
import { Depth, LayerMaterial } from "lamina";

// Component imports
import { PlayDate } from "./PlayDate";
import NameTag from "./NameTag";
import GarrettFace from "./GarrettFace";
import Background from "./Background";
import ContactPhone from "./ContactPhone";
import Portfolio from "./Portfolio";
import Montanahead from "./Montanahead";
import LongAddition from "./LongAddition";

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
      {/* Lighting */}
      <ambientLight intensity={1} />
      <directionalLight position={[4, 5, 6]} intensity={1} color={"#fff"} />
      <directionalLight position={[1, 1, 1]} intensity={1} color={"#fff"} />

      <Environment preset="night" />

      <OrbitControls />

      {/* Background Sphere */}
      <Background action={action} setAction={setAction} />

      {/* Objects */}
      <Float
        action={action}
        speed={1} // Animation speed, defaults to 1
        rotationIntensity={action === "home" ? 0.7 : 0.25} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.6} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={action === "home" ? [0.1, -0.1] : [0.05, 0.05]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        {/* LOOK INTO PRESENTATION CONTROLS MORE */}
        {/* <PresentationControls
          action={action}
          enabled={action === "home" ? true : false}
        > */}
        <GarrettFace action={action} setAction={setAction} />
        {/* </PresentationControls> */}
      </Float>
      <Float
        action={action}
        speed={1}
        rotationIntensity={0.6}
        floatIntensity={0.7}
        floatingRange={[-0.04, 0.04]}
      >
        <NameTag action={action} setAction={setAction} />
      </Float>
      <Float
        action={action}
        speed={1}
        rotationIntensity={0.6}
        floatIntensity={0.7}
        floatingRange={[-0.04, 0.04]}
      >
        <PlayDate action={action} setAction={setAction} />
      </Float>
      <Float
        action={action}
        speed={1}
        rotationIntensity={0.6}
        floatIntensity={0.7}
        floatingRange={[-0.04, 0.04]}
      >
        <ContactPhone action={action} setAction={setAction} />
      </Float>
      <Float
        action={action}
        speed={1}
        rotationIntensity={0.6}
        floatIntensity={0.7}
        floatingRange={[-0.04, 0.04]}
      >
        <Portfolio action={action} setAction={setAction} />
      </Float>
      <Float
        action={action}
        speed={1}
        rotationIntensity={0.6}
        floatIntensity={0.7}
        floatingRange={[-0.04, 0.04]}
      >
        <Montanahead action={action} setAction={setAction} />
      </Float>
      <Float
        action={action}
        speed={1}
        rotationIntensity={0.6}
        floatIntensity={0.7}
        floatingRange={[-0.04, 0.04]}
      >
        <LongAddition action={action} setAction={setAction} />
      </Float>
      {/* </EffectComposer> */}
    </Canvas>
  );
}
