"use client";
import React from "react";
import Image from "next/image";
import { techData } from "../lib/techData";

const TechStack = () => {
  const half1 = techData.slice(0, Math.ceil(techData.length / 2));
  const half2 = techData.slice(Math.ceil(techData.length / 2));

  return (
    <section
      id="toolbox"
      aria-label="Toolbox"
      className="relative py-32 border-t border-border/30 overflow-hidden"
    >
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8 mb-16">
        <h2 className="text-5xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight">
          Toolbox.
        </h2>
        <p className="mt-6 max-w-[55ch] text-lg text-subtle/80">
          The tools I reach for, day to day. Some are old friends, others I am
          still getting to know.
        </p>
      </div>

      <div className="marquee space-y-8" aria-hidden>
        <MarqueeRow items={[...half1, ...half1, ...half1]} />
        <MarqueeRow items={[...half2, ...half2, ...half2]} reverse />
      </div>

      <ul className="sr-only">
        {techData.map((t) => (
          <li key={t.name}>{t.name}</li>
        ))}
      </ul>
    </section>
  );
};

const MarqueeRow = ({ items, reverse = false }) => (
  <div className="overflow-hidden">
    <div className={`marquee-track flex gap-12 w-max ${reverse ? "reverse" : ""}`}>
      {items.map((t, i) => (
        <span
          key={`${t.name}-${i}`}
          className="flex items-center gap-3 shrink-0"
        >
          <Image
            src={t.img}
            alt=""
            width={32}
            height={32}
            className="opacity-70"
          />
          <span className="text-2xl md:text-3xl font-medium text-white/80 whitespace-nowrap">
            {t.name}
          </span>
          <span className="text-2xl md:text-3xl text-brand-frontend/40 ml-6">
            /
          </span>
        </span>
      ))}
    </div>
  </div>
);

export default TechStack;
