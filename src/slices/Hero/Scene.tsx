import { useGSAP } from "@gsap/react";
import { Environment } from "@react-three/drei";
import gsap from "gsap";
import { useRef } from "react";
import { Group } from "three";

import FloatingCan from "@/components/FloatingCan";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Props = {};

const Scene = (props: Props) => {
  const can1Ref = useRef<Group>(null);
  const can2Ref = useRef<Group>(null);
  const can3Ref = useRef<Group>(null);
  const can4Ref = useRef<Group>(null);
  const can5Ref = useRef<Group>(null);

  const can1GroupRef = useRef<Group>(null);
  const can2GroupRef = useRef<Group>(null);

  const groupRef = useRef<Group>(null);

  useGSAP(() => {
    if (
      !can1Ref.current ||
      !can2Ref.current ||
      !can3Ref.current ||
      !can4Ref.current ||
      !can5Ref.current ||
      !can1GroupRef.current ||
      !can2GroupRef.current ||
      !groupRef.current
    )
      return;

    gsap.set(can1Ref.current.position, { x: -1.5 });
    gsap.set(can1Ref.current.rotation, { z: -0.5 });

    gsap.set(can2Ref.current.position, { x: 1.5 });
    gsap.set(can2Ref.current.rotation, { z: 0.5 });

    gsap.set(can3Ref.current.position, { y: 5, z: 2 });
    gsap.set(can4Ref.current.position, { x: 2, y: 4, z: 2 });
    gsap.set(can5Ref.current.position, { y: -5 });

    const introTl = gsap.timeline({
      defaults: { ease: "back.out(1.4)", duration: 3 },
    });

    if (window.scrollY < 20) {
      introTl.from(can1GroupRef.current.position, { y: -5, x: 1 }, 0);
      introTl.from(can1GroupRef.current.rotation, { z: 3 }, 0);
      introTl.from(can2GroupRef.current.position, { y: 5, x: 1 }, 0);
      introTl.from(can2GroupRef.current.rotation, { z: 3 }, 0);
    }

    const scorllTl = gsap.timeline({
      defaults: { duration: 2 },
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      },
    });

    scorllTl.to(groupRef.current.rotation, { y: Math.PI * 2 });

    scorllTl
      .to(can1Ref.current.position, { x: -0.2, y: -0.7, z: -2 }, 0)
      .to(can1Ref.current.rotation, { z: 0.3 }, 0)

      .to(can2Ref.current.position, { x: 1, y: -0.2, z: -1 }, 0)
      .to(can2Ref.current.rotation, { z: 0 }, 0)

      .to(can3Ref.current.position, { x: -0.3, y: 0.5, z: -1 }, 0)
      .to(can3Ref.current.rotation, { z: -0.1 }, 0)

      .to(can4Ref.current.position, { x: 0, y: -0.3, z: 0.5 }, 0)
      .to(can4Ref.current.rotation, { z: 0.3 }, 0)

      .to(can5Ref.current.position, { x: 0.3, y: 0.5, z: -0.5 }, 0)
      .to(can5Ref.current.rotation, { z: -0.25 }, 0)
      .to(
        groupRef.current.position,
        { x: 1, duration: 3, ease: "sine.inOut" },
        1.3,
      );
  });

  const FLOAT_SPEED = 1.5;
  return (
    <group ref={groupRef}>
      <group ref={can1GroupRef}>
        <FloatingCan
          ref={can1Ref}
          floatSpeed={FLOAT_SPEED}
          flavor="blackCherry"
        />
      </group>

      <group ref={can2GroupRef}>
        <FloatingCan
          ref={can2Ref}
          floatSpeed={FLOAT_SPEED}
          flavor="lemonLime"
        />
      </group>
      <FloatingCan ref={can3Ref} floatSpeed={FLOAT_SPEED} flavor="grape" />
      <FloatingCan
        ref={can4Ref}
        floatSpeed={FLOAT_SPEED}
        flavor="strawberryLemonade"
      />
      <FloatingCan ref={can5Ref} floatSpeed={FLOAT_SPEED} flavor="watermelon" />
      <Environment
        files={["/assets/hdrs/lobby.hdr"]}
        environmentIntensity={1.5}
      />
    </group>
  );
};

export default Scene;
