import { Float } from "@react-three/drei";
import { forwardRef } from "react";
import { Group } from "three";

import { SodaCan, SodaCanProps } from "@/components/ui/SodaCan";

type Props = {
  flavor?: SodaCanProps["flavor"];
  floatSpeed?: number;
  floatIntensity?: number;
  rotationIntensity?: number;
  floatingRange?: [number, number];
  children?: React.ReactNode;
};

const FloatingCan = forwardRef<Group, Props>(
  (
    {
      flavor = "blackCherry",
      floatSpeed = 1.5,
      floatIntensity = 1,
      rotationIntensity = 1,
      floatingRange = [-0.1, 0.1],
      children,
    },
    ref,
  ) => {
    return (
      <group ref={ref}>
        <Float
          speed={floatSpeed}
          rotationIntensity={rotationIntensity}
          floatIntensity={floatIntensity}
          floatingRange={floatingRange}
        >
          {children}
          <SodaCan flavor={flavor} />
        </Float>
      </group>
    );
  },
);

export default FloatingCan;
