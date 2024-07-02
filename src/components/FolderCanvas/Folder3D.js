"use client";
import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Html } from "@react-three/drei";
import useMousePosition from "@/hooks/useMousePosition";
import { easing } from "maath";
import { a } from "@react-spring/three";
import { useSpring } from "@react-spring/core";
import useStartAnimation from "@/hooks/useStartAnimation";
import { BASE_LOADING_OFFSET } from "@/libs/styleConst";

const FOLDER_COLOR = "#FDD347";
const PAPER_COLOR = "#F9EEEB";

function Folder3D(props) {
  const meshRef = useRef();
  const { nodes } = useGLTF("/models/folder/model.gltf");
  const [isActive, setIsActive] = useState(0);
  const defaultRotation = [0.1, Math.PI / 2, 0];
  const startAnimation = useStartAnimation(BASE_LOADING_OFFSET);

  const startSpring = useSpring({
    scale: startAnimation ? 0.11 : 0.02,
    config: { mass: 0.05, tension: 20, friction: 1 },
  });

  const [windowWidth, windowHeight] = [
    document.documentElement.clientWidth,
    document.documentElement.clientHeight,
  ];

  const mousePosition = useMousePosition();

  useFrame(({ pointer }, delta) => {
    easing.dampE(
      meshRef.current.rotation,
      [
        defaultRotation[0] + (mousePosition.y - windowHeight / 2) * 0.0006,
        defaultRotation[1] + (mousePosition.x - windowWidth / 2) * 0.0005,
        0,
      ],
      0.5,
      delta
    );
  });

  const { popSpring } = useSpring({
    popSpring: isActive,
    config: { mass: 1.3, tension: 400, friction: 18 },
  });

  const middlePositionY = popSpring.to([0, 1], [1, 10]);

  return (
    <a.group
      {...props}
      rotation={defaultRotation}
      ref={meshRef}
      scale={startSpring.scale}
      onPointerOver={() => setIsActive(1)}
      onPointerOut={() => setIsActive(0)}
    >
      <mesh
        geometry={nodes.front.geometry}
        position={[0.4, 0, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color={FOLDER_COLOR} roughness={0.5} />
      </mesh>
      <a.mesh
        color={PAPER_COLOR}
        geometry={nodes.middle.geometry}
        position-x={0.4}
        position-y={middlePositionY}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial />
      </a.mesh>
      <mesh
        geometry={nodes.back.geometry}
        position={[0.5, 0, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color={FOLDER_COLOR} roughness={0.5} />
      </mesh>
    </a.group>
  );
}

export default Folder3D;
