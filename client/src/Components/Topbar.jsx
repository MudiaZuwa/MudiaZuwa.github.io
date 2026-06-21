import React from "react";

const Topbar = () => {
  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-border/40 bg-oil-black px-6 lg:px-10">
      <a className="flex items-center gap-3 text-white" href="#home">
        <span className="size-2 rounded-full bg-brand-frontend" aria-hidden />
        <span className="text-sm font-medium tracking-tight">
          <span className="sm:hidden">Mudia Zuwa</span>
          <span className="hidden sm:inline">Osamudiamen Osazuwa</span>
        </span>
      </a>

      <nav className="hidden md:flex items-center gap-8">
        <a href="#work" className="text-sm text-subtle hover-cyan">
          Work
        </a>
        <a href="#about" className="text-sm text-subtle hover-cyan">
          About
        </a>
        <a href="#toolbox" className="text-sm text-subtle hover-cyan">
          Toolbox
        </a>
        <a
          href="#contact"
          className="text-sm font-medium text-oil-black bg-brand-frontend px-4 py-2 rounded-lg"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
};

export default Topbar;
