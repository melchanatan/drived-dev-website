"use client";
import React, { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import useMousePosition from "@/hooks/useMousePosition";

function Box(props) {
  const FOLDER_COLOR = "#FDD347";
  const meshRef = useRef();
  const { viewport } = useThree();
  const { nodes } = useGLTF("/models/folder/model.gltf");
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const defaultRotation = [0.1, Math.PI / 2, 0];

  const [windowWidth, windowHeight] = [
    document.documentElement.clientWidth,
    document.documentElement.clientHeight,
  ];

  const mousePosition = useMousePosition();

  useFrame(({ pointer }, state) => {
    meshRef.current.rotation.y =
      defaultRotation[1] + (mousePosition.x - windowWidth / 2) * 0.001;
    meshRef.current.rotation.x =
      defaultRotation[0] + (mousePosition.y - windowHeight / 2) * 0.0006;
  });

  return (
    <group
      {...props}
      rotation={defaultRotation}
      ref={meshRef}
      scale={0.1}
      onClick={(event) => setActive(!active)}
      // onPointerOver={(event) => null}
      // onPointerOut={(event) => setHover(false)}
    >
      <mesh
        geometry={nodes.front.geometry}
        position={[0.4, 0, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color={FOLDER_COLOR} roughness={0.5} />
      </mesh>

      <mesh
        geometry={nodes.middle.geometry}
        position={[0.4, 0, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial />
      </mesh>

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
    <Canvas shadows>
      <ambientLight intensity={Math.PI / 2} color="#C7E1FE" />
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
