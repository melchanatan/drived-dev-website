"use client";
import { createRoot } from "react-dom/client";
import React, { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  useGLTF,
  SoftShadows,
  ScrollControls,
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
  const defaultRotation = [0.1, Math.PI / 2, 0]

  useFrame(({pointer}, state) => {
    meshRef.current.rotation.y = defaultRotation[1] + Math.sin(Date.now() * 0.0001) * 1/2;
    
    // meshRef.current.rotation.y = defaultRotation[1] + pointer.x * 0.1;
    // meshRef.current.rotation.x = defaultRotation[0] + pointer.y * 0.1;
  });


  return (
    <mesh
      {...props}
      rotation={defaultRotation}
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
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <pointLight
        position={[2, 2, 3]}
        rotation={[0, Math.PI / 2, 0]}
        decay={0}
        intensity={Math.PI}
      />
      <Box position={[0, -5, 0.6]} />
    </Canvas>
  );
};

export default MyCanvas;
