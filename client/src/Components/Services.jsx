import React from "react";

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
      desc: "Creating immersive and interactive 3D applications and demos using Three.js and WebGL, combining art and technology to push the web’s creative boundaries.",
    },
  ];

  return (
    <section id="services" className="p-4">
      <h2 className="text-white text-[28px] font-bold mb-6">What I Do</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
        {services.map((service, i) => (
          <div
            key={i}
            className="rounded-xl border border-[#324467]/50 bg-[#192233]/70 p-6 hover:border-primary transition-all duration-300 hover:scale-[1.02]"
          >
            <span className="material-symbols-outlined text-primary text-4xl">
              {service.icon}
            </span>
            <h3 className="text-lg font-bold mt-3">{service.title}</h3>
            <p className="text-[#92a4c9] text-sm mt-2">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
