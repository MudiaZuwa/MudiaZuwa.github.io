import React from "react";
import { motion } from "framer-motion";
import TechStack from "./TechStack";

const About = () => {
  return (
    <section id="about" className="py-6">
      <motion.h2
        className="text-white text-[28px] font-bold mb-6"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      <motion.div
        className="p-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col md:flex-row gap-8 items-center bg-overlay/70 p-8 rounded-xl border border-border">
          <motion.img
            src="Image_xdr2idxdr2idxdr2.png"
            alt="Osamudiamen Osazuwa"
            className="rounded-full w-48 h-48 object-cover border-4 border-brand-frontend/50 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          />
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-[#E0E0E0]">
              Hello! I am Osamudiamen E. Osazuwa, also known as Mudia Zuwa, a web
              developer passionate about creating engaging web experiences,
              interactive games, and innovative solutions. My work emphasizes
              responsive design, seamless user interactions, and leveraging modern
              tools to build meaningful projects. I enjoy exploring diverse areas
              of development, from frontend interfaces to real-time applications
              and creative digital experiences. This curiosity drives me to
              continuously learn and experiment, combining my coding skills with
              problem-solving and creativity.
            </p>
            <p className="text-[#E0E0E0] mt-4">
              I enjoy connecting with people, researching new technologies, and
              gaming, activities that fuel my creativity and broaden my
              perspective. I am enthusiastic about contributing to projects that
              make a real impact, enhance user experiences, and bring ideas to
              life through technology.
            </p>
          </motion.div>
        </div>
      </motion.div>
      <TechStack />
    </section>
  );
};

export default About;
