"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import Folder3D from "./Folder3D";

const FolderCanvas = () => {
  const spotLightPosition = [1.02, 1.32, 1.49];
  const spotLightRotation = [0, 0, 0];

  return (
    <Canvas shadows className="z-10">
      <ambientLight intensity={Math.PI / 2} color="#C7E1FE" />
      <directionalLight
        castShadow
        position={spotLightPosition}
        rotation={spotLightRotation}
        decay={Math.PI / 4}
        color="#FFCE95"
        intensity={Math.PI}
      />
      <Folder3D />
    </Canvas>
  );
};

export default FolderCanvas;
