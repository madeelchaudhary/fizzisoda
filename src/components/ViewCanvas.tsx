"use client";

import { View } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";


type Props = {};

const ViewCanvas = (props: Props) => {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 30,
        pointerEvents: "none",
      }}
      dpr={[1, 1.5]}
      gl={{ antialias: true }}
      shadows
      camera={{ fov: 30 }}
    >
      <View.Port />
    </Canvas>
  );
};

export default ViewCanvas;
