"use client";
import React, { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, OrbitControls, Html } from "@react-three/drei";
import useMousePosition from "@/hooks/useMousePosition";
import { easing } from "maath";
import { a } from "@react-spring/three";
import { useSpring } from "@react-spring/core";

function Box(props) {
  const FOLDER_COLOR = "#FDD347";
  const meshRef = useRef();
  const { viewport } = useThree();
  const { nodes } = useGLTF("/models/folder/model.gltf");
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(0);
  const defaultRotation = [0.1, Math.PI / 2, 0];
  const textRef = useRef();

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

  const { spring } = useSpring({
    spring: active,
    config: { mass: 1.3, tension: 400, friction: 18 },
  });

  const position = spring.to([0, 1], [1, 10]);

  return (
    <group
      {...props}
      rotation={defaultRotation}
      ref={meshRef}
      scale={0.13}
      onPointerOver={() => setActive(1)}
      onPointerOut={() => setActive(0)}
    >
      <mesh
        geometry={nodes.front.geometry}
        position={[0.4, 0, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color={FOLDER_COLOR} roughness={0.5} />
      </mesh>

      <a.group
        geometry={nodes.middle.geometry}
        position-x={0.4}
        position-y={position}
      >
        {/* -4, 8, -17 */}
        <Html position={[-1.5, 8, -13]} occlude={[meshRef]} ref={textRef}>
          <div className="font-raster text-gray-700/20 w-[500px]">
            <h1 className="text-3xl font-bold">come and say hi!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </Html>
        <mesh
          color={"#F9EEEB"}
          geometry={nodes.middle.geometry}
          castShadow
          receiveShadow
        >
          <meshStandardMaterial />
        </mesh>
      </a.group>

      <mesh
        geometry={nodes.back.geometry}
        position={[0.5, 0, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color={FOLDER_COLOR} roughness={0.5} />
      </mesh>
    </group>
  );
}

const MyCanvas = () => {
  const spotLightPosition = [1.02, 1.32, 1.49];
  const spotLightRotation = [0, 0, 0];

  return (
    <Canvas shadows className="z-10">
      <ambientLight intensity={Math.PI / 2} color="#C7E1FE" />
      {/* <OrbitControls /> */}
      <directionalLight
        castShadow
        position={spotLightPosition}
        rotation={spotLightRotation}
        decay={Math.PI / 4}
        color="#FFCE95"
        intensity={Math.PI}
      />
      <Box />
    </Canvas>
  );
};

export default MyCanvas;
