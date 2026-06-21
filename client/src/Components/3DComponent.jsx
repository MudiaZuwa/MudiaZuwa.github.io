import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Preload, useGLTF } from "@react-three/drei";
import { useScroll } from "framer-motion";
import CanvasLoader from "./Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/desktop_pc/scene.glb");
  const ref = useRef();
  const { scrollY } = useScroll();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y = scrollY.get() * 0.0025;
    }
  });

  return (
    <>
      <ambientLight intensity={1.2} />
      <directionalLight position={[10, 10, 5]} intensity={2.5} />
      <pointLight position={[0, 5, 5]} intensity={1.5} />
      <spotLight
        position={[-10, 15, 10]}
        angle={0.3}
        penumbra={1}
        intensity={1.2}
        castShadow
      />

      <primitive
        ref={ref}
        object={computer.scene}
        scale={isMobile ? 0.45 : 0.6}
        position={isMobile ? [0, -2.2, -1.0] : [1.2, -2.2, -1.0]}
        rotation={[-0.05, -0.35, -0.05]}
      />
    </>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () =>
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <Canvas
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
