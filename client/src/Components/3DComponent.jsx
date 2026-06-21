import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useScroll, useReducedMotion } from "framer-motion";
import CanvasLoader from "./Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/desktop_pc/scene.glb");
  const ref = useRef();
  const { scrollY } = useScroll();
  const { invalidate } = useThree();
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return undefined;
    const unsub = scrollY.on("change", () => invalidate());
    return () => unsub();
  }, [scrollY, invalidate, reduce]);

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
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const onChange = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 1.5]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      style={{
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Computers isMobile={isMobile} />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;
