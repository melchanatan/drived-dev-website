"use client";
import { createRoot } from "react-dom/client";
import React, { useRef, useState } from "react";
import { Canvas, useFrame, useThree,  } from "@react-three/fiber";
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
      rotation={[0, Math.PI / 2, 0]}
      ref={meshRef}
      scale={0.1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <mesh
        geometry={nodes.front.geometry}
        position={[2, 0, 0]}
      >
        <meshStandardMaterial
            color="#F4D44A"
         />
      </mesh>
      
      <mesh
        geometry={nodes.middle.geometry}
        position={[.3, 0, 0]}
      >
        <meshStandardMaterial
         />
      </mesh>
      <mesh
        geometry={nodes.back.geometry}
        position={[-2.45, .98, 0]}
      >
        <meshStandardMaterial
            color="#F4D44A"
            />
      </mesh>
    </mesh>
  );
}

const MyCanvas = () => {
  const cameraControlRef = useRef(null);

  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 4} />
      <directionalLight position={[5, 10, 6]} decay={0} intensity={Math.PI} />

      {/* <pointLight position={[5, 10, 6]} decay={0} intensity={Math.PI} /> */}
      <CameraControls ref={cameraControlRef} />

      <Box position={[0, -5, 0.6]} />
    </Canvas>
  );
};

export default MyCanvas;
