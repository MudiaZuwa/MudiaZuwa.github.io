"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  getStackProjects,
  getArchivedProjects,
  getAllNiches,
} from "@/Components/ProjectList";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const EASE_OUT = [0.23, 1, 0.32, 1];

const NICHE_LABELS = {
  fullstack: "Fullstack",
  agent: "Agent",
  realtime: "Realtime",
  game: "Game",
  web3: "Web3",
};

const Projects = () => {
  const reduce = useReducedMotion();
  const stackRef = useRef(null);
  const [filter, setFilter] = useState("all");

  const allProjects = useMemo(() => getStackProjects(), []);
  const archived = useMemo(() => getArchivedProjects(), []);
  const niches = useMemo(() => getAllNiches(), []);

  const filtered = useMemo(() => {
    if (filter === "all") return allProjects;
    return allProjects.filter((p) => p.niches?.includes(filter));
  }, [filter, allProjects]);

  useEffect(() => {
    if (reduce || !stackRef.current) return;
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    if (!mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".stack-card");
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          endTrigger: cards[cards.length - 1],
          end: "top top",
          pin: true,
          pinSpacing: false,
        });
        gsap.to(card, {
          scale: 0.92,
          opacity: 0.55,
          ease: "none",
          scrollTrigger: {
            trigger: cards[i + 1],
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        });
      });
    }, stackRef);
    return () => ctx.revert();
  }, [reduce, filtered.length]);

  return (
    <section id="work" className="relative">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8 pt-32 pb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <h2 className="text-5xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight">
            Selected work
          </h2>
          <div className="flex flex-wrap gap-2">
            <FilterPill active={filter === "all"} onClick={() => setFilter("all")}>
              All
            </FilterPill>
            {niches.map((n) => (
              <FilterPill
                key={n}
                active={filter === n}
                onClick={() => setFilter(n)}
              >
                {NICHE_LABELS[n] ?? n}
              </FilterPill>
            ))}
          </div>
        </div>
      </div>

      <div ref={stackRef} className="relative">
        {filtered.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>

      <div className="mx-auto max-w-[1400px] px-4 lg:px-8 pt-24 pb-32">
        <details className="group">
          <summary className="cursor-pointer list-none flex items-center justify-between border-t border-border/40 pt-6">
            <span className="text-2xl md:text-3xl font-medium text-white">
              Archive
            </span>
            <span className="text-sm text-subtle/70 group-open:hidden">
              Show {archived.length} more
            </span>
            <span className="hidden text-sm text-subtle/70 group-open:inline">
              Hide
            </span>
          </summary>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6 mt-8">
            {archived.map((p) => (
              <li
                key={p.name}
                className="flex items-start justify-between gap-4 border-b border-border/20 pb-5"
              >
                <div className="min-w-0">
                  <p className="text-white text-base font-medium truncate">
                    {p.name}
                  </p>
                  <p className="text-sm text-subtle/70 mt-1 line-clamp-2">
                    {(p.description ?? "").trim()}
                  </p>
                </div>
                {p.pageLink && (
                  <a
                    href={p.pageLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${p.name}`}
                    className="text-brand-frontend text-sm shrink-0"
                  >
                    Open &rarr;
                  </a>
                )}
              </li>
            ))}
          </ul>
        </details>
      </div>
    </section>
  );
};

const FilterPill = ({ active, onClick, children }) => (
  <button
    type="button"
    onClick={onClick}
    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
      active ? "text-oil-black" : "text-subtle/80 hover-cyan"
    }`}
  >
    {active && (
      <motion.span
        layoutId="pill-bg"
        className="absolute inset-0 bg-brand-frontend rounded-full -z-0"
        transition={{ duration: 0.25, ease: EASE_OUT }}
      />
    )}
    <span className="relative z-10">{children}</span>
  </button>
);

const ProjectCard = ({ project, index }) => {
  const reduce = useReducedMotion();
  const link = project.pageLink || project.githubLink || project.npmLink;
  const num = String(index + 1).padStart(2, "0");

  return (
    <article
      className="stack-card relative min-h-[100dvh] flex items-center bg-oil-black"
      style={{ zIndex: 10 + index }}
    >
      <div className="mx-auto max-w-[1400px] w-full px-4 lg:px-8 grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: EASE_OUT }}
          >
            <p className="text-sm text-brand-frontend font-mono mb-6">{num}</p>
            <h3 className="text-6xl md:text-8xl font-bold text-white leading-[0.95] tracking-tight">
              {project.name}
            </h3>
            <p className="mt-8 max-w-[55ch] text-lg md:text-xl text-subtle leading-relaxed">
              {project.intro ?? (project.description ?? "").split("\n")[0]}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {(project.code ?? []).map((src, i) => (
                <span
                  key={i}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-overlay border border-border/40"
                >
                  <Image
                    src={src}
                    alt=""
                    width={20}
                    height={20}
                    className="opacity-80"
                  />
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-frontend text-base font-medium border-b border-brand-frontend/40 pb-1"
                >
                  Visit project &rarr;
                </a>
              )}
              {project.githubLink && project.pageLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-subtle/70 text-sm hover-cyan"
                >
                  GitHub
                </a>
              )}
              {project.npmLink && (
                <a
                  href={project.npmLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-subtle/70 text-sm hover-cyan"
                >
                  npm
                </a>
              )}
            </div>
          </motion.div>
        </div>

        <div className="col-span-12 lg:col-span-5 flex items-center justify-center">
          <div
            aria-hidden
            className="w-full aspect-square max-w-[420px] rounded-lg border border-border/30 relative overflow-hidden"
            style={{
              background:
                "radial-gradient(120% 80% at 80% 20%, rgba(97,218,251,0.08) 0%, transparent 60%), #0d0d0f",
            }}
          >
            <span className="absolute top-6 left-6 text-xs font-mono text-subtle/40">
              {(project.niches ?? []).map((n) => NICHE_LABELS[n] ?? n).join(" · ")}
            </span>
            <span className="absolute bottom-6 right-6 text-xs font-mono text-brand-frontend/60">
              {num}
            </span>
            <span className="absolute inset-0 flex items-center justify-center text-white/10 text-[180px] font-bold leading-none select-none">
              {project.name.charAt(0)}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Projects;
