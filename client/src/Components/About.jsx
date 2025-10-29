import React, { useEffect, useState } from "react";

import TechStack from "./TechStack";

const About = () => {
  return (
    <section id="about" className="p-4">
      <h2 className="text-white text-[28px] font-bold mb-6">About Me</h2>
      <div className="flex flex-col md:flex-row gap-8 items-center bg-[#192233]/70 p-8 rounded-xl border border-[#324467]/50">
        <img
          src="Image_xdr2idxdr2idxdr2.png"
          alt="Osamudiamen Osazuwa"
          className="rounded-full w-48 h-48 object-cover border-4 border-primary/50 shadow-lg"
        />
        <div>
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
        </div>
      </div>
      <TechStack />
    </section>
  );
};

export default About;
