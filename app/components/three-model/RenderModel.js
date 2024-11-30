"use client";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense } from "react";

const RenderModel = ({ children, className }) => {
  return (
    <Canvas
      className={clsx("w-screen h-screen -z-10 relative", className)}
      shadows={false}
      dpr={[1, 2]}
      camera={{
        fov: 45, //độ rộng góc nhìn 
        near: 0.1,
        far: 100,
        position: [-4, 3, 3], //vị trí x y z trong không gian
      }}
      // dpr is the device pixel ratio. Here we are setting it to 1 and 2 for retina displays to prevent blurriness in the model rendering on high resolution screens.
    >
      <Suspense fallback={null}>
        <OrbitControls
          autoRotate 
          autoRotateSpeed={3}
          enableZoom={false}
        />
        {children}
      </Suspense>
      {/* màu môi trường/thời tiết */}
      <Environment preset="dawn" /> 
    </Canvas>
  );
};

export default RenderModel;