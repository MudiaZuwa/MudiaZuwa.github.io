import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "./Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/desktop_pc/scene.glb");
  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.y = Math.sin(t / 2) * 0.2; // gentle turn
      ref.current.position.y = Math.sin(t) * 0.1 + (isMobile ? -3 : -3.25); // float around base position
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 0]} intensity={1.5} />
      <primitive
        ref={ref}
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}  
        position={isMobile ? [0, -3, -1.5] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </>
  );
};


const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [canvasSize, setCanvasSize] = useState({ width: 500, height: 350 });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    const handleResize = () => {
      // Adjust canvas size based on screen width
      const newWidth = window.innerWidth < 640 ? 300 : 500;
      const newHeight = window.innerWidth < 640 ? 200 : 350;

      setCanvasSize({ width: newWidth, height: newHeight });
    };

    // Set initial canvas size
    handleResize();

    // Attach resize event listener
    window.addEventListener("resize", handleResize);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{
        width: `${canvasSize.width}px`,
        height: `${canvasSize.height}px`,
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
