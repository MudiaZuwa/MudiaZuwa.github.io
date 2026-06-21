"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";

const ComputersCanvas = dynamic(() => import("@/Components/3DComponent"), {
  ssr: false,
  loading: () => <CanvasPlaceholder />,
});

const EASE_OUT = [0.23, 1, 0.32, 1];

const CanvasPlaceholder = () => (
  <div
    aria-hidden
    className="w-full h-full rounded-lg"
    style={{
      background:
        "radial-gradient(80% 60% at 70% 40%, rgba(97,218,251,0.06) 0%, transparent 70%)",
    }}
  />
);

const Title = () => {
  const reduce = useReducedMotion();
  const [mountCanvas, setMountCanvas] = useState(false);

  useEffect(() => {
    const idle =
      typeof window.requestIdleCallback === "function"
        ? window.requestIdleCallback
        : (cb) => setTimeout(cb, 200);
    const cancel =
      typeof window.cancelIdleCallback === "function"
        ? window.cancelIdleCallback
        : clearTimeout;
    const id = idle(() => setMountCanvas(true), { timeout: 1500 });
    return () => cancel(id);
  }, []);

  const reveal = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: EASE_OUT },
  });

  return (
    <section
      id="home"
      className="relative grid grid-cols-12 gap-6 min-h-[100dvh] pt-24 pb-12 px-4 lg:px-8"
    >
      <div className="col-span-12 lg:col-span-7 flex flex-col justify-center z-10">
        <motion.h1
          {...reveal(0)}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] text-white tracking-tight"
        >
          Building the web,{" "}
          <em className="not-italic md:italic font-medium text-brand-frontend leading-[1.1] inline-block pb-1">
            end to end.
          </em>
        </motion.h1>

        <motion.p
          {...reveal(0.06)}
          className="mt-8 max-w-[58ch] text-lg md:text-xl text-subtle leading-relaxed"
        >
          Full-stack developer shipping AI agents, real-time apps, and 3D experiences. Currently open to collaborations.
        </motion.p>

        <motion.div
          {...reveal(0.12)}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="press inline-flex items-center gap-2 bg-brand-frontend text-oil-black px-6 py-3 rounded-lg font-medium text-base"
          >
            View work
            <span aria-hidden>&rarr;</span>
          </a>
          <a
            href="#contact"
            className="press inline-flex items-center gap-2 border border-brand-frontend text-white px-6 py-3 rounded-lg font-medium text-base hover-cyan"
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      <div className="col-span-12 lg:col-span-5 relative min-h-[50vh] lg:min-h-0">
        <div className="absolute inset-0 lg:inset-auto lg:right-0 lg:bottom-0 lg:top-0 lg:w-[120%] -z-0">
          {mountCanvas ? <ComputersCanvas /> : <CanvasPlaceholder />}
        </div>
      </div>
    </section>
  );
};

export default Title;
