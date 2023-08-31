import { Canvas } from "@react-three/fiber";
import { useState, Suspense } from "react";

export default function Scene() {
  const [blockActive, setBlockActive] = useState(false);

  const homeScreen = () => {
    setBlockActive(false);
  };

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
      {/* <pointLight intensity={1.4} position={[0, 6, 0]} /> */}

      {/* Text */}
      {/* <TextTest
        textContent="Welcome to my site"
        position={[-1.5, 3.5, 0]}
        scale={0.15}
        blockActive={blockActive}
        setBlockActive={setBlockActive}
      /> */}

      {/* <Box blockActive={blockActive} setBlockActive={setBlockActive} /> */}
      {/* <Box2 /> */}

      {/* <TextTest
        textContent="X"
        position={[1.5, 3.5, 0]}
        scale={0.5}
        homeScreen={homeScreen}
      /> */}
    </Canvas>
  );
}
