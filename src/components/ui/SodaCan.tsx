"use client";

import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

useGLTF.preload("/assets/models/Soda-can.gltf");

const flavorTextures = {
  lemonLime: "/assets/labels/lemon-lime.png",
  grape: "/assets/labels/grape.png",
  blackCherry: "/assets/labels/cherry.png",
  strawberryLemonade: "/assets/labels/strawberry.png",
  watermelon: "/assets/labels/watermelon.png",
};

const metalMaterial = new THREE.MeshStandardMaterial({
  roughness: 0.3,
  metalness: 1,
  color: "#bbbbbb",
});

export type SodaCanProps = {
  flavor?: keyof typeof flavorTextures;
  scale?: number;
};

export function SodaCan({
  flavor = "blackCherry",
  scale = 2,
  ...props
}: SodaCanProps) {
  const { nodes } = useGLTF("/assets/models/Soda-can.gltf");

  const labels = useTexture(flavorTextures);
  
  // Fixes upside down labels
  labels.strawberryLemonade.flipY = false;
  labels.blackCherry.flipY = false;
  labels.watermelon.flipY = false;
  labels.grape.flipY = false;
  labels.lemonLime.flipY = false;

  const label = labels[flavor];

  return (
    <group {...props} dispose={null} scale={scale} rotation={[0, -Math.PI, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.cylinder as THREE.Mesh).geometry}
        material={metalMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.cylinder_1 as THREE.Mesh).geometry}
      >
        <meshStandardMaterial roughness={0.15} metalness={0.7} map={label} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Tab as THREE.Mesh).geometry}
        material={metalMaterial}
      />
    </group>
  );
}
