import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Topbar = () => {
  return (
    <header className="sticky top-5 z-50 flex items-center justify-between whitespace-nowrap border border-solid border-white/10 bg-black/30 backdrop-blur-md px-10 py-3 rounded-xl">
      <a className="flex items-center gap-4 text-white" href="#">
        <div className="size-6 text-primary">
          {/* Logo SVG */}
          <svg
            fill="none"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_6_319)">
              <path
                d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_6_319">
                <rect fill="white" height="48" width="48" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
          <span className="block sm:hidden">Mudia Zuwa</span>
          <span className="hidden sm:block lg:hidden">Mudia Osazuwa</span>
          <span className="hidden lg:block">Osamudiamen Osazuwa</span>
        </h2>
      </a>

      <div className="hidden md:flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <a
            href="#services"
            className="text-white text-sm font-medium hover:text-primary transition-colors"
          >
            Services
          </a>
          <a
            href="#projects"
            className="text-white text-sm font-medium hover:text-primary transition-colors"
          >
            Projects
          </a>
          <a
            href="#about"
            className="text-white text-sm font-medium hover:text-primary transition-colors"
          >
            About
          </a>
        </div>
        <a
          href="#contact"
          className="flex items-center justify-center h-10 px-4 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary/90 transition-colors"
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default Topbar;
