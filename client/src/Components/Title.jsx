import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const ComputersCanvas = dynamic(() => import("@/Components/3DComponent"), {
  ssr: false,
});

const Title = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-[600px] px-4 py-10 overflow-hidden rounded-xl"
    >
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <ComputersCanvas />
      </div>

      <div className="absolute inset-0 bg-oil-black/40 z-[1]" />

      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-black bg-gradient-to-r from-brand-agent via-border to-brand-frontend bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Osamudiamen Osazuwa | Full-Stack Developer
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mt-4 max-w-2xl mx-auto text-[#E0E0E0]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Crafting elegant, high-performance web experiences from concept to
          deployment.
        </motion.p>
        <motion.a
          href="#contact"
          className="inline-flex mt-6 px-5 py-3 bg-gradient-to-r from-brand-agent to-brand-frontend text-white rounded-lg font-bold hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_20px_rgba(97,218,251,0.5)]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          Contact Me
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Title;
