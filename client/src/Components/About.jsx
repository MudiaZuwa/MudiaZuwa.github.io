"use client";
import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const EASE_OUT = [0.23, 1, 0.32, 1];

const About = () => {
  const reduce = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6, delay, ease: EASE_OUT },
  });

  return (
    <section id="about" className="px-4 lg:px-8 py-32">
      <div className="grid grid-cols-12 gap-6">
        <motion.div
          {...reveal(0)}
          className="col-span-12 md:col-span-4 lg:col-span-3"
        >
          <div className="relative w-56 h-56 rounded-lg overflow-hidden border border-border/40">
            <Image
              src="/Image_xdr2idxdr2idxdr2.png"
              alt="Osamudiamen Osazuwa"
              fill
              sizes="224px"
              className="object-cover"
            />
          </div>
        </motion.div>

        <div className="col-span-12 md:col-span-8 lg:col-span-9">
          <motion.h2
            {...reveal(0.05)}
            className="text-5xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight"
          >
            I build software{" "}
            <em className="not-italic md:italic font-medium text-brand-frontend leading-[1.1] inline-block pb-1">
              end to end.
            </em>
          </motion.h2>

          <motion.p
            {...reveal(0.1)}
            className="mt-10 max-w-[65ch] text-lg text-subtle leading-relaxed text-balance"
          >
            I am Osamudiamen Osazuwa, a developer who likes shipping things. I
            care about how interfaces feel under your hand, how a system holds
            up when traffic spikes, and how an idea makes the leap from sketch
            to production. Curiosity is the throughline.
          </motion.p>

          <motion.p
            {...reveal(0.15)}
            className="mt-6 max-w-[65ch] text-lg text-subtle leading-relaxed"
          >
            My work spans{" "}
            <a
              href="#work"
              className="text-white border-b border-brand-frontend pb-0.5 hover:text-brand-frontend transition-colors"
            >
              fullstack web
            </a>
            ,{" "}
            <a
              href="#work"
              className="text-white border-b border-brand-frontend pb-0.5 hover:text-brand-frontend transition-colors"
            >
              real-time systems
            </a>
            , and{" "}
            <a
              href="#work"
              className="text-white border-b border-brand-frontend pb-0.5 hover:text-brand-frontend transition-colors"
            >
              3D experiences
            </a>
            . When I am not coding, I am usually reading about something I will
            try to build next week.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
