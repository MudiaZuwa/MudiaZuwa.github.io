import React from "react";
import dynamic from "next/dynamic";
import CanvasLoader from "@/Components/Loader";

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

      <div className="absolute inset-0 bg-black/40 z-[1]" />

      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] bg-clip-text text-transparent">
          Osamudiamen Osazuwa | Full-Stack Developer
        </h1>
        <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto text-[#E0E0E0]">
          Crafting elegant, high-performance web experiences from concept to
          deployment.
        </p>
        <a
          href="#contact"
          className="inline-flex mt-6 px-5 py-3 bg-primary text-white rounded-lg font-bold hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_20px_#135bec]"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Title;
