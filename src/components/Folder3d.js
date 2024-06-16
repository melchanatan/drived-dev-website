"use client";
import { createRoot } from "react-dom/client";
import React, { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Html,
  useGLTF,
  SoftShadows,
  ScrollControls,
  CameraControls,
  useScroll,
  useTexture,
} from "@react-three/drei";

function Box(props) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef();
  const { viewport } = useThree();
  const { nodes } = useGLTF("/models/folder/model.gltf");
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <mesh
      {...props}
      rotation={[0.1, Math.PI / 2.6, 0]}
      ref={meshRef}
      scale={0.1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <mesh geometry={nodes.front.geometry} position={[2, 0, 0]}>
        <meshStandardMaterial color="#F4D44A" roughness={0.5} />
      </mesh>

      <mesh geometry={nodes.middle.geometry} position={[0.3, 0, 0]}>
        <meshStandardMaterial />
      </mesh>
      <mesh geometry={nodes.back.geometry} position={[-2.45, 0.98, 0]}>
        <meshStandardMaterial color="#F4D44A" roughness={0.5} />
      </mesh>
    </mesh>
  );
}

const MyCanvas = () => {
  const cameraControlRef = useRef(null);

  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <pointLight
        position={[2, 2, 3]}
        rotation={[0, Math.PI / 2, 0]}
        decay={0}
        intensity={Math.PI}
      />
      <CameraControls ref={cameraControlRef} />

      <Box position={[0, -5, 0.6]} />
    </Canvas>
  );
};

export default MyCanvas;
