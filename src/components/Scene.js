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

export default function Scene({ action, setAction }) {
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
      {/* <OrbitControls /> */}

      {/* Lighting */}
      <ambientLight intensity={1} />
      <directionalLight position={[4, 5, 6]} intensity={1} color={"#fff"} />
      <directionalLight position={[1, 1, 1]} intensity={1} color={"#fff"} />

      <Environment preset="city" />

      {/*  maybe add subtle sparkles later, read drei docs */}
      {/* <Sparkles /> */}

      {/* <BakeShadows /> */}
      <spotLight intensity={3} position={[0, 20, 10]} />

      {/* Background Sphere */}
      {/* <Background /> */}

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
        speed={1} // Animation speed, defaults to 1
        rotationIntensity={0.7} // XYZ rotation intensity, defaults to 1
        floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[-0.1, 0.1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <NameTag action={action} setAction={setAction} />
      </Float>
      <Float
        action={action}
        speed={1} // Animation speed, defaults to 1
        rotationIntensity={0.7} // XYZ rotation intensity, defaults to 1
        floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[-0.1, 0.1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <PlayDate action={action} setAction={setAction} />
      </Float>
    </Canvas>
  );
}

function Background() {
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

function GarrettFace({ action, setAction }) {
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
