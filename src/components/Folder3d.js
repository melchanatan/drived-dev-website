"use client";
import { createRoot } from "react-dom/client";
import React, { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, useGLTF, SoftShadows, ScrollControls, useScroll, useTexture } from '@react-three/drei';

function Box(props) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef();
  const { viewport } = useThree();
  const { nodes, materials } = useGLTF('/models/earth.gltf')

  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(({ mouse }) => {
    const x = (mouse.x * viewport.width) / 2;
    const y = (mouse.y * viewport.height) / 2;
    meshRef.current.position.set(x, y, 0);
    meshRef.current.rotation.set(-y, x, 0);
  });

  useFrame((state, delta) => (meshRef.current.rotation.x += delta));

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      {/* <mesh geometry={nodes["Area_(2)"].geometry} material={materials.aluminium} material-color="#aaaaaf" material-envMapIntensity={0.2} /> */}

    </mesh>
  );
}

const MyCanvas = () => {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  );
};

export default MyCanvas;
