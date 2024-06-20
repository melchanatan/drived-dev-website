"use client";
import React, { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";

function Box(props) {
  const FOLDER_COLOR = "#FDD347";
  const meshRef = useRef();
  const { viewport } = useThree();
  const { nodes } = useGLTF("/models/folder/model.gltf");
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const defaultRotation = [0.1, Math.PI / 2, 0];

  const { rotation } = useControls({
    rotation: defaultRotation,
  });

  useFrame(({ pointer }, state) => {
    meshRef.current.rotation.y = meshRef.current.rotation.y + 0.02;
    // meshRef.current.rotation.y = defaultRotation[1] + pointer.x * 0.1;
    // meshRef.current.rotation.x = defaultRotation[0] + pointer.y * 0.1;
  });
  // {"spotLightPosition":[-0.02000000000000008,1,1]}
  return (
    <group
      {...props}
      rotation={rotation}
      ref={meshRef}
      scale={0.1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
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
        position={[0, 0, 0]}
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
  const { spotLightPosition, spotLightRotation } = useControls({
    spotLightPosition: [1.02, 1.32, 1.49],
    spotLightRotation: [0, 0, 0],
  });
  // {"spotLightPosition":[1.020000000000001,1.3200000000000003,1.4899999999999969]}
  // {"spotLightPosition":[1.6,1.9600000000000002,-1.3500000000000003]}
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

      {/* <directionalLight castShadow position={spotLightPosition} /> */}
      <Box />
    </Canvas>
  );
};

export default MyCanvas;
