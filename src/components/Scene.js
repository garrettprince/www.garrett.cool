// Scene will hold all 3D objects and manage transitions through user input and interaction

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { useState, useRef } from "react";
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

function GarrettFace({ action, setAction }) {
  const { scale, color, position, rotation } = useSpring({
    color: action !== "home" ? "green" : "red",
    scale: action !== "home" ? 0.7 : 1.8,
    position: action !== "home" ? [-1.2, -1.8, 0] : [0, 0.5, 0],
    rotation: action !== "home" ? [0.2, 0.8, 0] : [0, 0, 0],
  });

  // This reference will give us direct access to the mesh
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

function NameTag({ action, setAction }) {
  const { scale, color, position, opacity } = useSpring({
    color: action === "nameTag" ? "blue" : "red",
    scale: action === "nameTag" ? 1.8 : 0.7,
    position: action === "nameTag" ? [0, 0.5, 0] : [-1, 3.2, 0],
    opacity: action === "home" ? 1 : 0,
  });

  console.log(opacity);

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

function PlayDate({ action, setAction }) {
  const { scale, color, position } = useSpring({
    color: action === "playDate" ? "blue" : "red",
    scale: action === "playDate" ? 1.8 : 0.7,
    position: action === "playDate" ? [0, 0.5, 0] : [1, 3.2, 0],
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
        action === "home" ? setAction("playDate") : setAction("home")
      }
    >
      <animated.boxGeometry />
      <animated.meshStandardMaterial color={color} />
    </animated.mesh>
  );
}
