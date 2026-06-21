"use client";
import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const EASE_OUT = [0.23, 1, 0.32, 1];

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/MudiaZuwa",
    icon: faGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mudiazuwa",
    icon: faLinkedin,
  },
  {
    label: "X",
    href: "https://x.com/mudia_zuwa",
    icon: faTwitter,
  },
];

const Contact = () => {
  const reduce = useReducedMotion();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ loading: false, success: null, error: "Please fill in all fields." });
      return;
    }
    setStatus({ loading: true, success: null, error: null });
    try {
      const res = await fetch("https://formspree.io/f/myzbwvzq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setFormData({ name: "", email: "", message: "" });
        setStatus({ loading: false, success: "Message sent. I will reply soon.", error: null });
      } else {
        throw new Error("Failed to send");
      }
    } catch {
      setStatus({ loading: false, success: null, error: "Something went wrong. Try again later." });
    }
  };

  const reveal = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6, delay, ease: EASE_OUT },
  });

  return (
    <>
      <section id="contact" className="bg-brand-agent text-white">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-8 py-32 grid grid-cols-12 gap-8">
          <motion.div
            {...reveal(0)}
            className="col-span-12 lg:col-span-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-6xl md:text-8xl font-bold leading-[0.95] tracking-tight">
                Got an idea?
              </h2>
              <p className="mt-8 max-w-[45ch] text-lg text-white/80 leading-relaxed">
                I am open to collaborations, freelance work, and conversations
                with people building something interesting. Drop a note.
              </p>
            </div>
            <ul className="mt-12 flex flex-wrap gap-6">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-white/80 hover:text-brand-frontend transition-colors"
                  >
                    <FontAwesomeIcon icon={s.icon} className="text-xl" />
                    <span className="text-sm">{s.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.form
            {...reveal(0.08)}
            onSubmit={handleSubmit}
            className="col-span-12 lg:col-span-6 flex flex-col gap-6"
            noValidate
          >
            <Field
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              autoComplete="name"
            />
            <Field
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              autoComplete="email"
            />
            <Field
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              textarea
              rows={5}
            />

            <button
              type="submit"
              disabled={status.loading}
              className="self-start bg-brand-frontend text-oil-black px-6 py-3 rounded-lg font-medium disabled:opacity-50"
            >
              {status.loading ? "Sending" : "Send message"}
            </button>

            {status.error && (
              <p role="alert" className="text-red-300 text-sm">
                {status.error}
              </p>
            )}
            {status.success && (
              <p role="status" className="text-brand-frontend text-sm">
                {status.success}
              </p>
            )}
          </motion.form>
        </div>
      </section>

      <footer className="bg-oil-black border-t border-border/30">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-subtle/70">
            © {new Date().getFullYear()} Mudia Osazuwa
          </p>
          <ul className="flex gap-5">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-subtle/70 hover:text-brand-frontend transition-colors"
                >
                  <FontAwesomeIcon icon={s.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
};

const Field = ({ label, name, value, onChange, type = "text", textarea, rows = 4, autoComplete }) => {
  const id = `f-${name}`;
  const baseInput =
    "w-full bg-transparent border-b border-white/30 text-white text-base py-3 focus:border-brand-frontend outline-none transition-colors";
  return (
    <label htmlFor={id} className="flex flex-col gap-2">
      <span className="text-sm text-white/70">{label}</span>
      {textarea ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          rows={rows}
          className={`${baseInput} resize-none`}
        />
      ) : (
        <input
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          autoComplete={autoComplete}
          className={baseInput}
        />
      )}
    </label>
  );
};

export default Contact;
