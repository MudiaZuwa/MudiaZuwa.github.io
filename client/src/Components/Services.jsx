import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: "code",
      title: "Full-Stack Web & App Development",
      desc: "I design and develop end-to-end web and mobile applications using React, Node.js, MongoDB, and TailwindCSS — delivering scalable, maintainable, and high-performance solutions.",
    },
    {
      icon: "sensors",
      title: "Real-Time & Interactive Systems",
      desc: "Building real-time multiplayer games, chat systems, and live collaboration tools using Socket.io, WebRTC, and Firebase for seamless cross-device experiences.",
    },
    {
      icon: "3d_rotation",
      title: "3D & Experimental Web Experiences",
      desc: "Creating immersive and interactive 3D applications and demos using Three.js and WebGL, combining art and technology to push the web's creative boundaries.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="services" className="py-6">
      <motion.h2
        className="text-white text-[28px] font-bold mb-6"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        What I Do
      </motion.h2>
      <motion.div
        className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {services.map((service, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className={`rounded-xl border border-border bg-overlay/70 p-6 transition-all duration-300 hover:scale-[1.02] ${i % 2 === 0 ? "hover:border-brand-frontend" : "hover:border-brand-agent"
              }`}
          >
            <span className={`material-symbols-outlined text-4xl ${i % 2 === 0 ? "text-brand-frontend" : "text-brand-agent"
              }`}>
              {service.icon}
            </span>
            <h3 className="text-lg font-bold mt-3">{service.title}</h3>
            <p className="text-subtle text-sm mt-2">{service.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
